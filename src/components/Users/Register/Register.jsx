import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './Register.css';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { control } from '../../../helpers/check_register.js';
import { usuariosDB } from '../../../helpers/get_users.js';

const Register = () =>{
    const { register, handleSubmit } = useForm()
    const [passClass, setPassClass] = useState('subcont__input')
    const [user, setUser] = useState("")
    const [contErrores, setContErrores] = useState(<></>)
    const [errores, setErrores] = useState([])
    const usuarios = collection(db, 'usuarios');

    const enviar = (data) =>{
        const resp = control(data, usuariosDB);
        if(resp === true){
            addDoc(usuarios, data)
                .then((doc) =>{
                    setUser(doc.id)
                    localStorage.setItem('account',{...data, id: doc.id})
                })
        }
        else{
            setPassClass('password-error')
            setContErrores( <div className="errores">
                                <h3 className="errores__title">Error</h3>
                                {resp.map((text)=>{
                                    return(<h5>*{text}</h5>)
                                })}
                            </div>)
        }
    }

    if(user){
        return(
            <div className='Justifier'>
                <div className="Bienvenida">
                    <h1>¡Gracias por registrarte!</h1>
                </div>
            </div>
        )
    }

    return(
        <div className="container">
            {contErrores}
            <form className="register__form" onSubmit={handleSubmit(enviar)}>
                <h1 className="form__title">Registro</h1>
                <div className="form__subcont">
                    <p className="subcont__title">Nombre:</p>
                    <input className="subcont__input" type="text" placeholder="ingresar nombre" {...register("nombre")} />
                </div>
                <div className="form__subcont">
                    <p className="subcont__title">Apellido:</p>
                    <input className="subcont__input" type="text" placeholder="ingresar apellido" {...register("apellido")} />
                </div>
                <div className="form__subcont">
                    <p className="subcont__title">Telefono:</p>
                    <input className="subcont__input" type="text" placeholder="ingresar telefono" {...register("telefono")} />
                </div>
                <div className="form__subcont">
                    <p className="subcont__title">Email:</p>
                    <input className="subcont__input" type="text" placeholder="ingresar e-mail" {...register("email")} />
                </div>
                <div className="form__subcont">
                    <p className="subcont__title">Contraseña:</p>
                    <input className={passClass} type="password" placeholder="ingresar contraseña" {...register("contraseña1")} />
                </div>
                <div className="form__subcont">
                    <p className="subcont__title">Repetir contraseña:</p>
                    <input className={passClass} type="password" placeholder="repetir contraseña" {...register("contraseña2")} />
                </div>
                <button className="form__button" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Register