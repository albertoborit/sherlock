import styles from "./Login.module.css"
import { useState } from "react"
import axios from "axios"

export default function Login () {
    const headers = {
          'Content-Type': 'application/json',
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const sendToAuth = async () => {
            return await axios.post('http://127.0.0.1:8000/auth/login', {
                "username": e.target.username.value,
                "password": e.target.password.value
            }).catch(function (error) {
                    console.log(error);
                })
        }
        sendToAuth()
    }

    return (
        <div className={styles.formContainer}>
            <form className="loginForm" onSubmit={handleSubmit}>
                <div>
                    <label className="form-label" htmlFor="username">Usuario</label>
                    <input type="text" name="username" id="username" className="form-control"/>
                    <br />
                </div>
                <div>    
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" name="password" id="password" className="form-control"/>
                    <br />
                </div>
                <button className="form-control btn-info">Iniciar Sesion</button>
            </form>
        </div>
    )
}


