import Swal from 'sweetalert2'

import { types } from "../types/types"
import {firebase, googleAuthProvider} from '../firebase/firebase-config'
import { finishLoading, startLoading } from "./ui"


export const startLoginEmailPassword = (email, password) =>{
    return (dispatch)=>{

        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then( ({user}) =>{
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            } )
            .catch (err =>{
                Swal.fire('Error', err.message, 'error');
                console.log(err);
                dispatch(finishLoading());
            })


    }
}

export const startGoogleLogin = () =>{
    return (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider)
            .then(({user}) => {
                dispatch(
                    login(user.uid, user.displayName)
                );
            })
    }
}

export const startRegisterWithEmailPasswordName = (email,password,name) =>{
    return( dispatch )=>{
        firebase.auth().createUserWithEmailAndPassword(email,password).then( async({user}) =>{
            //Graba el display name en el user debido a que retornar null por no ser una autenticacion con alguna red social
            await user.updateProfile({displayName: name});
            dispatch(login(user.uid, user.displayName));
        } )
        .catch(err=>{
            Swal.fire('Error', err.message, 'error');
            console.log(err);
        })
    }
}


export const login = (uid , displayName) =>{
    return {
        type: types.login,
        payload:{
            uid,
            displayName
        }
    }
}

export const startLogout = () => {
    return async(dispatch) =>{ 
        await firebase.auth().signOut();
        dispatch( logout() );
    }
}

export const logout = () => {
    return {
        type: types.logout
    }
}