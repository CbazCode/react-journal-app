import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import validator from 'validator'
import { /*login,*/ startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const state = useSelector( state => state );
    const {ui} = state
    

    const [ formValues, handleInputChange ] = useForm({
        email: 'sebas@gmail.com',
        password: '123456'

    });

    const { email, password } = formValues;

    const handleLogin = (e) =>{
      e.preventDefault();
      if(isFormValid()){
        dispatch( startLoginEmailPassword(email,password));
      }
      // dispatch(login(123,'pepito')) //disparo de accion sincrona  
      // dispatch( startLoginEmailPassword(email,password)); //Disparo de accion asincrona

    }
    const isFormValid = () =>{
      if (!validator.isEmail(email)){
        console.log('email invalid')
        return false;
      }else if ( password.trim().length === 0 ){
        console.log('password empty')
        return false;       
      }
      return true;
    }

    const  handleGoogleLogin = () =>{
      dispatch(startGoogleLogin());
    }

    return (
      <>
        <h3 className = 'auth__title'>LoginScreen</h3>
        <form 
          onSubmit = {handleLogin}
          className = "animate__animated animate__fadeIn animate__faster"
        >
          <input type="text" placeholder="Email" 
          name="email" 
          className = "auth__input" autoComplete = "off"
          value = {email}
          onChange = {handleInputChange}
          />

          <input type="password" placeholder="Password" name="password" 
          className = "auth__input" autoComplete = "off"
          value = {password}
          onChange = {handleInputChange}
          />

          <button 
            className="btn btn-primary btn-block" 
            type="submit"
            disabled = {ui.loading}
          >Login</button>
    
          <div className = "auth__social-networks">
            <p>Login with social network</p>
            <div className="google-btn" onClick = {handleGoogleLogin}>
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="google button"
                />
              </div>
              <p className="btn-text">
                <b>Sign in with google</b>
              </p>
            </div>
          </div>
          <Link to = "/auth/register"
            className = "link"
          >
              Create new account
          </Link>
        </form>
      </>
    );
}
