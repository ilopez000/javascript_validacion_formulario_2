function validarFormulario() {
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');
    var telefono = document.getElementById('telefono');
    var valid = true;

    // Limpiar errores previos
    document.getElementById('errorNombre').textContent = '';
    document.getElementById('errorApellido').textContent = '';
    document.getElementById('errorEmail').textContent = '';
    document.getElementById('errorTelefono').textContent = '';
    nombre.classList.remove('invalid');
    apellido.classList.remove('invalid');
    email.classList.remove('invalid');
    telefono.classList.remove('invalid');


    if(valid) {
        alert("Formulario enviado con éxito!");
        // Aquí podrías agregar código para enviar los datos del formulario, como AJAX.
    }
}

