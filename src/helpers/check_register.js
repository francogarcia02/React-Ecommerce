export const control = (data, usuarios)=>{
    const { nombre, apellido, telefono, email, contraseña1, contraseña2 } = data;
    usuarios.map(user =>{
        if(email == user.email){
            return 'Email ya existente'
        }
    })
    if(contraseña1 != contraseña2){
        return 'Las contraseñas no coinciden'
    }
    else if(contraseña1.length < 8 || contraseña2.lenght < 8){
        return 'Alguna contraseña esta fuera de rango'
    }
    else{
        return true
    }
}

