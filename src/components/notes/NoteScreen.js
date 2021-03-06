import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {


    const dispatch = useDispatch();
    const {active: note} = useSelector( state => state.notes );

    const [formValues, handleInputChange, reset ] = useForm(note);
   
    const { body, title } = formValues;

    const activeId = useRef( note.id )

    useEffect(() => {

        if( note.id !== activeId.current){
            reset(note);
            activeId.current = note.id
        }
        
        
    }, [note, reset]);

    useEffect(() => {
        dispatch(activeNote(formValues.id, {...formValues}));
        
    }, [formValues, dispatch])


    const handleDelete = () => {
        dispatch(startDeleting(note.id));
    }


    return (
        <div className="notes__main-content">
            <NoteAppBar/>
            <div className = "notes__content">
                <input
                    name = "title"
                    type = "text"
                    placeholder = "Some awesome title"
                    className = "notes__title-input"
                    autoComplete = "off"
                    value = { title }
                    onChange = {handleInputChange}
                />

                <textarea
                    name = "body"
                    placeholder = "What happend today?"
                    className = "notes__textarea"
                    value = {body}
                    onChange = {handleInputChange}
                >
                </textarea>
                {
                    (note.url) 
                    && <div className = "notes__image">
                    
                          <img src = {note.url} alt = "images"/>

                    </div>
                }
            </div>


            <button 
                className = "btn btn-danger"
                onClick = { handleDelete }
            > Delete</button>
        </div>
    )
}
