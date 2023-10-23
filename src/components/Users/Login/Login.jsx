import { useForm } from 'react-hook-form'
import './Login.css'

const Login = () =>{
    const { register, handleSubmit } = useForm()

    const enviar = (data) =>{
        console.log(data)
    }

    return(
        <div className="container">
            <form className="register__form" onSubmit={handleSubmit(enviar)}>
                <h1 className="form__title">Iniciar sesion</h1>
                <div className="form__subcont">
                    <p className="subcont__title">Email:</p>
                    <input className="subcont__input" type="text" placeholder="ingresar e-mail" {...register("e-mail")} />
                </div>
                <div className="form__subcont">
                    <p className="subcont__title">Contraseña:</p>
                    <input className="subcont__input" type="password" placeholder="ingresar contraseña" {...register("contraseña1")} />
                </div>
                <button className="form__button" type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default Login