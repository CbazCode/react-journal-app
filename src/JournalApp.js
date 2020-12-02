import React from 'react';
import { AppRouter } from './routers/AppRouter';
import {Provider} from 'react-redux'
import { store } from './store/store';


 
import './styles/styles.scss';

export const JournalApp = () => {
    return (
        <Provider store = {store}>
           <AppRouter/>
        </Provider>
    )
}
