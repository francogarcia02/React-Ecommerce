import { useForm } from 'react-hook-form'
import './Register.css'

const Register = () =>{
    const { register, handleSubmit } = useForm()

    const enviar = (data) =>{
        console.log(data)
    }

    return(
        <div className="container">
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
                    <input className="subcont__input" type="text" placeholder="ingresar e-mail" {...register("e-mail")} />
                </div>
                <div className="form__subcont">
                    <p className="subcont__title">Contraseña:</p>
                    <input className="subcont__input" type="password" placeholder="ingresar contraseña" {...register("contraseña1")} />
                </div>
                <div className="form__subcont">
                    <p className="subcont__title">Repetir contraseña:</p>
                    <input className="subcont__input" type="password" placeholder="repetir contraseña" {...register("contraseña2")} />
                </div>
                <button className="form__button" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Register