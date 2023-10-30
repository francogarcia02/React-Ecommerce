import { useForm } from 'react-hook-form'
import './Login.css'

const Login = () =>{
    const { register, handleSubmit } = useForm()

    const enviar = (data) =>{
        console.log(data)
    }

    return(
        <div className="container-login">
            <form className="login__form" onSubmit={handleSubmit(enviar)}>
                <h1 className="login-form__title">Iniciar sesion</h1>
                <div className="login-form__subcont">
                    <p className="login-subcont__title">Email:</p>
                    <input className="login-subcont__input" type="text" placeholder="ingresar e-mail" {...register("e-mail")} />
                </div>
                <div className="login-form__subcont">
                    <p className="login-subcont__title">Contraseña:</p>
                    <input className="login-subcont__input" type="password" placeholder="ingresar contraseña" {...register("contraseña1")} />
                </div>
                <button className="login-form__button" type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default Login