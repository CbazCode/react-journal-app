import Swal from 'sweetalert2';

import { db } from "../firebase/firebase-config";
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => {
    return async( dispatch, getState ) => {
        const {uid} = getState().auth;
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        try{
            const doc = await db.collection(`${uid}/journal/notes`).add( newNote )

            dispatch( activeNote( doc.id, newNote ) );
            dispatch(addNewNote ( doc.id, newNote ) );
        }catch(err){
            
        }

    }
}


export const activeNote = ( id, note ) => {
    return {
        type: types.notesActive,
        payload:{
            id,
            ...note
        }
    }
}

export const addNewNote = ( id, note ) => {
    return {
        type: types.notesAddNew,
        payload:{
            id,
            ...note
        }
    }
}

export const startLoadingNotes = ( uid ) =>{
    return async(dispatch)=>{

        const notes = await loadNotes(uid); 
        dispatch(setNotes( notes ));

    }
}
 
export const setNotes = (notes) =>{
    return {
        type: types.notesLoad,
        payload: notes
        
    }
}

export const startSaveNote = ( note ) => {
    return async( dispatch , getState ) => {

        const { uid } = getState().auth;

        if( !note.url ){
            delete note.url;
        }
        
        const noteToFirestore = {...note };
        delete noteToFirestore.id;

        try{
            await db.doc(`${ uid }/journal/notes/${ note.id }`).update( noteToFirestore );
            dispatch(refreshNotes(note.id, noteToFirestore));
            Swal.fire('Saved', note.title, 'success');

        }catch (err){

            Swal.fire('Error','Error update','error');
            
        }


    }
}

export const refreshNotes = ( id , note ) => {
    return {
        type: types.notesUpdated,
        payload: {
            id,
            note:{
                id,
                ...note
            }
        }
    }
}


export const startUploading = (file) => {
    return async (dispatch, getState) => {
         const { active: activeNote } = getState().notes;

         Swal.fire({
             title: 'Uploading...',
             text: 'Please wait ...',
             allowOutsideClick: false,
             showConfirmButton: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }

         });
         const fileUrl = await fileUpload( file );
         activeNote.url = fileUrl;

         dispatch( startSaveNote( activeNote) );

         Swal.close();

    }
}

export const startDeleting = (id) => {
    return async (dispatch , getState) => {

        const uid = getState().auth.uid;
        await db.doc(`${ uid }/journal/notes/${ id }`).delete();

        dispatch( deleteNote( id ) );
    }

}


export const deleteNote = ( id ) =>{
    return {
        type: types.notesDelete,
        payload: id
    }
}

export const noteLogout = () => {
    return {
        type: types.notesLogoutCleaning
    }
}