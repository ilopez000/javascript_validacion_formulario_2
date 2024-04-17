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

    if(nombre.value === "") {
        document.getElementById('errorNombre').textContent = "Este campo es obligatorio.";
        nombre.classList.add('invalid');
        valid = false;
    }

    if(apellido.value === "") {
        document.getElementById('errorApellido').textContent = "Este campo es obligatorio.";
        apellido.classList.add('invalid');
        valid = false;
    }

    if(email.value === "" || !email.value.includes('@')) {
        document.getElementById('errorEmail').textContent = "Ingresa un correo electrónico válido.";
        email.classList.add('invalid');
        valid = false;
    }

    if(telefono.value !== "" && telefono.value.length !== 9) {
        document.getElementById('errorTelefono').textContent = "El número de teléfono debe tener 9 dígitos.";
        telefono.classList.add('invalid');
        valid = false;
    }

    if(valid) {
        alert("Formulario enviado con éxito!");
        // Aquí podrías agregar código para enviar los datos del formulario, como AJAX.
    }
}

