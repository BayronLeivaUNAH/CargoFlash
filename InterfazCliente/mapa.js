
var mapa;  // Declarar la variable del mapa fuera de la función

function inicializarMapa() {
    // Verificar si el mapa ya está inicializado
    if (!mapa) {
        // Código de inicialización del mapa
        mapa = L.map('mapa').setView([14.0723, -87.1921], 12);

        // Añadir un mapa base (puedes cambiar esto según tus preferencias)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(mapa);

        // Añadir un marcador draggable
        var marcador = L.marker([14.0723, -87.1921], { draggable: true }).addTo(mapa);

        // Actualizar las coordenadas cuando se mueve el marcador
        marcador.on('dragend', function (event) {
            document.getElementById('coordenadas').value = event.target.getLatLng().lat + ', ' + event.target.getLatLng().lng;
        });

        // Cerrar el mapa al hacer clic en cualquier parte fuera del mapa o del botón
        document.addEventListener('click', cerrarMapa);
    }
}

function cerrarMapa(event) {
    // Verificar si el mapa está inicializado y existe en el DOM
    if (mapa && document.getElementById('mapa') && !event.target.closest('#btnUbicacion') && !event.target.closest('#mapa')) {
        mapa.remove();  // Remover el mapa
        mapa = null;  // Resetear la variable del mapa
        document.getElementById('mapa').style.display = 'none';
        document.removeEventListener('click', cerrarMapa); // Remover el listener después de cerrar el mapa
    }
}

function toggleMapa() {
    var mapa = document.getElementById('mapa');

    // Toggle para mostrar o cerrar el mapa
    if (mapa.style.display === 'none') {
        mapa.style.display = 'block';
        inicializarMapa();
    } else {
        cerrarMapa();
    }
}
