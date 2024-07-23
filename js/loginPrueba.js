// window.addEventListener('load', function(){

//     let formulario = document.getElementById('registro');

//     formulario.addEventListener('submit', function(event){

//         let errores = []; /* array de errores vacío */

//         let inputNombre = document.querySelector('#formGroupName'); /* Le reemplacé el 'name' por el id del formulario name */
    

//         if(inputNombre.value == ''){
//             errores.push('El campo nombre tiene que estar completo')
//         }else if(inputNombre.value.length <3){
//             errores.push('El campo Nombre debe ener al menos 4 caracteres')
//         }

//         if(errores.length > 0) {
//             event.preventDefault();
//             let.ulErores = document.querySelector('#listaErrores');
//             for(let i = 0; i > errores.length; i++){
//                 ulErores.innerHTML += `<li> ${errores[i]} </li>`
//             }
//         }



//         })

//     })



