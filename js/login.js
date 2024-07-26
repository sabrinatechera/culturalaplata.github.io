let dbUsuarios = JSON.parse(localStorage.getItem('usuarios'))
// console.log(dbUsuarios);

// window.addEventListener('load', function(){

//     let formulario = document.getElementById('form-login');
//     let inputEmail = document.querySelector('#email');
//     let inputContraseña = document.querySelector('#password');
//     let divContenido = document.querySelector('#divContenido');
    
//     formulario.addEventListener('submit', function(evento){

//         evento.preventDefault();

//         let errores = [];
//         let usuarioEncontrado = false;
//         let nombreDelUsuario;

//     for(let i=0; i< dbUsuarios.length ; i++){
//         if(dbUsuarios[i]).email === inputEmail.value){
//             if(dbUsuarios[i].password == inputContraseña.value){
//                 nombreDelUsuario = dbUsuarios[i].nombre;
//                 usuarioEncontrado = true;
//             } else {
//                 errores.push('La contraseña ingresada es incorrecta. Vuelva a intentarlo.')
//             }
//         }
//     }

//      if (errores.length > 0) {
//         let ulErrores = document.createElement('ul');
//         for(let i = 0; i < errores.length; i++){
//             ulErrores.innerHTML += `<li> ${errores[i]} </li>`
//         }
//         divContenido.appendChild(ulErrores);

//     } else {
//         if(usuarioEncontrado === true){
//             let mensajeDeBienvenida = document.createElement('p');
//             sessionStorage.setItem('usuario', nombreDelUsuario);
//             mensajeDeBienvenida.innerHTML = `Bienvenido/a ${sessionStorage.getItem('usuario')} a nuestra página!`;
//             divContenido.appendChild(mensajeDeBienvenida);
//         }
        
//         if(usuarioEncontrado === false){
//             alert(`Bienvenido/a a nuestra página. Lo invitamos a formar parte de nuestra comunidad. Por favor, registrese.`);
//             let enlace = document.createElement('div');
//             enlace.innerHTML = `<a class='btn' href='./register.html'>Registrarse</a>`; // Esto tengo que acomodarlo o ponerle un registrarse
//             divContenido.appendChild(enlace);
//         }
//     }

//     })



// })

window.addEventListener('load', function(){

    let formulario = document.getElementById('form-login');
    let inputEmail = document.querySelector('#email');
    let inputContraseña = document.querySelector('#password');
    let divContenido = document.querySelector('#divContenidoLogin');


    formulario.addEventListener('submit', function(evento){

        evento.preventDefault();

        let errores = [];
        let usuarioEncontrado = false;
        let nombreDelUsuario;

        for(let i=0; i< dbUsuarios.length ; i++){
            if(dbUsuarios[i].email === inputEmail.value){
                if(dbUsuarios[i].password == inputContraseña.value){
                    nombreDelUsuario = dbUsuarios[i].nombre;
                    usuarioEncontrado = true;
                } else {
                    errores.push('La contraseña ingresada es incorrecta. Vuelva a intentarlo.')
                }
            }
        }
        
        //Esto limpia el div donde se colocan las respuestas, al eliminar los nodos hijos del elemento!!!!!!!!!!!!!!!!!!ACAAAA
        while (divContenido.firstChild) {
            divContenido.removeChild(divContenido.firstChild);
        }

        if (errores.length > 0) {
            let ulErrores = document.createElement('ul');
            for(let i = 0; i < errores.length; i++){
                ulErrores.innerHTML += `<li> ${errores[i]} </li>`
            }
            divContenido.appendChild(ulErrores);
        } else {
            if(usuarioEncontrado === true){
                let mensajeDeBienvenida = document.createElement('p');
                sessionStorage.setItem('usuario', nombreDelUsuario);
                mensajeDeBienvenida.innerHTML = `Bienvenido/a ${sessionStorage.getItem('usuario')} a nuestra página!`;
                divContenido.appendChild(mensajeDeBienvenida);
            }
    
            if(usuarioEncontrado === false){
                let enlace = document.createElement('div');
                enlace.innerHTML = `Bienvenido/a a nuestra página. Te invitamos a registrarte para formar parte de nuestra comunidad platense.`; // Esto tengo que acomodarlo o ponerle un registrarse
                divContenido.appendChild(enlace);
            }
        }

    })
})