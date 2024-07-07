let dbUsuarios = [
    { 
        "nombre": "Administrador",
        "email": "admin@gmail.com",
        "password": "admin",
    }
]

dbUsuarios = JSON.stringify(dbUsuarios)

let db = JSON.parse(dbUsuarios)

// Solicitar al usuario que se loguee:

let nombreIngresado = prompt('Por favor, ingrese su nombre');
let emailIngresado = prompt('Por favor, ingrese su email');
let passwordIngresada = prompt('Por favor, ingrese su contraseña');

console.log(nombreIngresado,emailIngresado,passwordIngresada);

let nombreDelUsuario;
let usuario;
let usuarioEncontrado = false;

// aplicar ciclos: 3 partes (inicio, condición y modificador)

if(nombreIngresado !== null && passwordIngresada !== null && emailIngresado !== null){

    for(let i=0; i< db.length ; i++){
        if(db[i].email === emailIngresado){
            if(db[i].password === passwordIngresada){
                nombreDelUsuario =db[i].nombre;
                usuarioEncontrado = true;

                usuario = {
                    nombre: db[i].nombre,
                    email: db[i].email,
                    password: db[i].password,
                }
            } else {
                alert('La contraseña no coincide con la registrada.')
            }
        }
    }

    if(usuarioEncontrado !== true){
        const usuarioPorGuardar =  {
            nombre: nombreIngresado,
            email: emailIngresado,
            password: passwordIngresada
        }
        db.push(usuarioPorGuardar);
        usuario = usuarioPorGuardar;
    
        nombreDelUsuario = nombreIngresado;
    }

    sessionStorage.setItem('usuario', nombreDelUsuario)
    sessionStorage.setItem('datosDelUsuario', JSON.stringify(usuario))

    alert(`Bienvenid@ ${sessionStorage.getItem('usuario')} a nuestra página!!`)
} else{
    alert(`Bienvenid@ Invitado a nuestra página!!`)
}

console.log(db)
console.log(JSON.parse(sessionStorage.getItem('datosDelUsuario')))