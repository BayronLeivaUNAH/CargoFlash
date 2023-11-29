const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const usuariosRegistrados = [];

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Función para registrar un nuevo usuario
function registrarUsuario() {
    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    const tipoUsuario = document.getElementById('tipoUsuario').value;

    // Verificar si el usuario ya está registrado
    const usuarioExistente = usuariosRegistrados.find(user => user.correo === correo);
    if (usuarioExistente) {
        alert("Ya existe un usuario con ese correo.");
        return;
    }

    // Agregar el nuevo usuario al arreglo
    const nuevoUsuario = { nombre, correo, contrasena, tipoUsuario };
    usuariosRegistrados.push(nuevoUsuario);

    if (tipoUsuario === "Cliente") {
        alert("Usuario registrado exitosamente. ¡Bienvenido, " + nombre + "!");
        window.location.assign('../InterfazCliente/cliente.html');
    } else if (tipoUsuario === "Repartidor") {
        alert("Usuario registrado exitosamente. ¡Bienvenido, " + nombre + "!");
        window.location.assign('../interfazChofer/formularioChofer.html');
    } else {
        alert("Selecciona un tipo de usuario válido.");
    }
}

// Función para iniciar sesión
function iniciarSesion() {
    // Obtener valores de los campos
    const correo = document.getElementById('correoInicioSesion').value;
    const contrasena = document.getElementById('contrasenaInicioSesion').value;

    // Buscar el usuario en el arreglo
    const usuario = usuariosRegistrados.find(user => user.correo === correo && user.contrasena === contrasena);
    if (usuario) {
        alert("Inicio de sesión exitoso. ¡Bienvenido, " + usuario.nombre + "!");
        window.location.assign('../InterfazCliente/cliente.html');
    } else {
        alert("Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
}
