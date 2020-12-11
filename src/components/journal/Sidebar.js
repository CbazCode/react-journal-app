import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { noteLogout, startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const {name} = useSelector( state => state.auth );

    const nameShow = name.toUpperCase();

    const dispatch = useDispatch();

    const handleLogout = () =>{
        dispatch( startLogout());
        dispatch( noteLogout());
    }

    const handleAddNew = () => {
        dispatch(startNewNote());
    }

    return (
        <aside className = "journal__sidebar">

            <div 
                className = "journal__sidebar-navbar mt-5">
                    <div className = "journal__sidebar-title">
                        <h3 >
                            <i className="far fa-moon"></i>
                            <span> {nameShow}</span>
                        </h3>
                    </div>

                <button className = "btn"
                    onClick = {handleLogout}
                >
                    Logout
                </button>

            </div>
            <div 
                className="journal__new-entry"
                onClick = {handleAddNew}    
            >
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    New entry
                </p>
            </div>
            <JournalEntries />
        </aside>
    )
}
