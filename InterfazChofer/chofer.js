function mostrarDetallesPedido(descripcion, monto, distancia, partida, entrega) {
    // Obtener el modal y el contenedor de detalles
    var modal = document.getElementById('detallesModal');
    var detallesContenido = document.getElementById('detallesContenido');

    // Limpiar contenido anterior si lo hubiera
    detallesContenido.innerHTML = '';

    // Crear elementos para mostrar los detalles del pedido
    var titulo = document.createElement('h3');
    titulo.textContent = 'Detalles del Pedido';

    var descripcionElement = document.createElement('p');
    descripcionElement.textContent = 'Descripción: ' + descripcion;

    var montoElement = document.createElement('p');
    montoElement.textContent = 'Monto: ' + monto;

    var distanciaElement = document.createElement('p');
    distanciaElement.textContent = 'Distancia estimada: ' + distancia;

    var partidaElement = document.createElement('p');
    partidaElement.textContent = 'Lugar de partida: ' + partida;

    var entregaElement = document.createElement('p');
    entregaElement.textContent = 'Lugar de entrega: ' + entrega;

    // Agregar los elementos al contenedor
    detallesContenido.appendChild(titulo);
    detallesContenido.appendChild(descripcionElement);
    detallesContenido.appendChild(montoElement);
    detallesContenido.appendChild(distanciaElement);
    detallesContenido.appendChild(partidaElement);
    detallesContenido.appendChild(entregaElement);


    // Mostrar el modal
    modal.style.display = 'block';
}

function cerrarDetallesModal() {
    // Cerrar el modal
    var modal = document.getElementById('detallesModal');
    modal.style.display = 'none';
}

function aceptarEntrega() {
    // Lógica para aceptar la entrega
    alert('Entrega en progreso');
    window.location.href = 'entregaenProgreso.html';
    // Cerrar la modal después de aceptar la entrega
    cerrarDetallesModal();
}

function guardarInfo(){
    window.location.href = 'chofer.html';
}