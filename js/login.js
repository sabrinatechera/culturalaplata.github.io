function capturarDatos() {
    let inputEmail = document.getElementById(`email`);
    let formulario = document.querySelector(`form`);

    formulario.addEventListener(`submit`, function(evento){
        evento.preventDefault();
        //codigo para validarel formulario
        // Codigo para enviar los datos del formulario
        console.log(inputEmail.value)
        let usuario = {
            email: inputEmail.value}
    })
    return usuario;
}


let usuarioIngresado = capturarDatos()
console.log(usuarioIngresado)