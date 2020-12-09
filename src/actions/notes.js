import { db } from "../firebase/firebase-config";

export const startNewNote = () => {
    return async( dispatch, getState ) => {
        const {uid} = getState().auth;
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add( newNote )
    }
}