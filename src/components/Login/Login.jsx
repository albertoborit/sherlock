import styles from "./Login.module.css"
import { useState } from "react"
import axios from "axios"
const initialFormState = {
    username: "",
    password: ""
}

export default function Login () {
    const [formState, setFormState] = useState(initialFormState)
    const handleSubmit = (e) => {
        e.preventDefault()
        const sendToAuth = async () => {
            await axios.post('http://127.0.0.1:8000/auth/login', {
                    firstName: 'Fred',
                    lastName: 'Flintstone'
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        sendToAuth()
    }

        

    const handleKeyUp = (e) => {
        e.preventDefault()
        setFormState({...formState, [e.target.name]:e.target.value})
    }

    return (
        <div className={styles.formContainer}>
            <form className="loginForm" onSubmit={handleSubmit} onKeyUp={handleKeyUp}>
                <label className="form-label" htmlFor="username">Usuario</label>
                <input type="text" name="username" id="username" className="form-control"/>
                <br />
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" name="password" id="password" className="form-control"/>
                <br />
                <button className="form-control btn-info">Iniciar Sesion</button>
            </form>
        </div>
    )
}


