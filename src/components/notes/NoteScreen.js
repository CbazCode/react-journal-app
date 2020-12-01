import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NoteAppBar/>
            <div className = "notes__content">
                <input
                    type = "text"
                    placeholder = "Some awesome title"
                    className = "notes__title-input"
                    autoComplete = "off"
                />

                <textarea
                    placeholder = "What happend today?"
                    className = "notes__textarea"
                >
                </textarea>
                <div className = "notes__image">
                    <img src = "https://imgs.abduzeedo.com/files/francois/wallpapers/wpw398/wpw-joshua-sortino_1400px.jpg" alt = "image"/>

                </div>
            </div>
        </div>
    )
}
