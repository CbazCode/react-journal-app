import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import {AuthRouter} from './AuthRouter'
import {firebase} from '../firebase/firebase-config'
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { LoadingScreen } from "../components/loading/LoadingScreen";

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
      //Nos devuelve un firebase.Unsubscribe en caso haya habido un cambio en la sesion nos devuelve el user de la ultima accion realizada
      //Lo que hace es crear un observable esto es un objeto se dispara cada vez q hay un cambio en sesion.
      //se dispara el efecto una solo vez y es el observable quien vigila y se dispara cada vez q el estado de a autenticacion cambie

      firebase.auth().onAuthStateChanged((user) => {
        if (user?.uid){

          dispatch(login(user.uid, user.displayName));
          setIsLoggedIn(true);

        }else{

          setIsLoggedIn(false);
        
        }

        setChecking(false);

      })
   
  }, [setChecking])

  if( checking ){
    //Lo retorna directo a la vista antes de mostrar la app
    return (
      <LoadingScreen/>
    )
  }


  return (
    <Router>
        <div>
            <Switch>
                <Route path = "/auth" component = {AuthRouter} />
                <Route exact path = "/" component = {JournalScreen}/>
            </Switch>
        </div>
         
    </Router>
  );
};
