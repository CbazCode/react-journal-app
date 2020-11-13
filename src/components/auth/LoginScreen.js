import React from 'react'

export const LoginScreen = () => {
    return (
        <div>
            <h3>LoginScreen</h3>
            <form>

                <input
                    type = "text"
                    placeholder ="email"
                    name = "email"
                
                />

                <input
                    type = "password"
                    placeholder ="password"
                    name = "password"
                
                />

                <button
                    type = "submit"
                >
                    Login
                </button>
                <hr/>
                Google
            </form>
        </div>
    )
}
