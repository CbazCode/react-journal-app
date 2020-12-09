import { db } from "../firebase/firebase-config";
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

        const doc = await db.collection(`${uid}/journal/notes`).add( newNote )

        dispatch( activeNote( doc.id, newNote ) );
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