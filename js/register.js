let dbUsuarios = JSON.parse(localStorage.getItem('usuarios'))
// console.log(dbUsuarios);

window.addEventListener('load', function(){

    let formulario = document.getElementById('form-register');
    let inputEmail = document.querySelector('#email');
    let inputContraseña = document.querySelector('#password');
    let inputName = document.querySelector('#name');
    let divContenido = document.querySelector('#divContenidoRegister');

    formulario.addEventListener('submit', function(evento){

        evento.preventDefault();

        let errores = [];
        let usuarioEncontrado = false;
        let usuario;

        for(let i=0; i< dbUsuarios.length ; i++){
            if(dbUsuarios[i].email === inputEmail.value){
                usuarioEncontrado = true;  
            }
        }

        if(inputContraseña.value.length < 6){
            errores.push('La contraseña debe contener al menos 6 caracteres. Por favor, vuelva a intentarlo.')
        }
                
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
                alert('El email que ingresado ya se encuentra registrado.')
                let mensajeDeRespuesta = document.createElement('p');
                mensajeDeRespuesta.innerHTML = `El email: ${inputEmail.value} ya se encuentra registrado.`;
                divContenido.appendChild(mensajeDeRespuesta);
            }
    
            if(usuarioEncontrado === false){
                usuario = {
                    nombre: inputName.value,
                    email: inputEmail.value,
                    password: inputContraseña.value
                }

                dbUsuarios.push(usuario)

                localStorage.setItem('usuarios', JSON.stringify(dbUsuarios));
                sessionStorage.setItem('usuario', inputName.value);

                alert(`Gracias, ${inputName.value} por registrarte en nuestra página. Ya sos parte de la comunidad platense!!!`);
                let enlace = document.createElement('div');
                enlace.innerHTML = `<a class='btn' href='../index.html'>Te invitamos ir a la sección Inicio para descubrir en profundidad esta bella ciudad!!!</a>`;
                divContenido.appendChild(enlace);
            }
        }

    })
})