var envio = "";
var monto = "";
var estado = "";


document.addEventListener("DOMContentLoaded", function () {
    // Obtener el valor del parámetro de la URL
    var urlParams = new URLSearchParams(window.location.search);
    var entrega = urlParams.get('entrega');

    // Verificar y mostrar el div si la entrega es true
    if (entrega === 'true') {
        var pedidoPendiente = document.getElementById("nuevoPedido");
        if (pedidoPendiente) {
            pedidoPendiente.style.display = "block";
            // Asignar contenido a las etiquetas
            document.getElementById("labelVariable1").textContent = "Descripción: " + localStorage.getItem('variableEnvio');;
            document.getElementById("labelVariable2").textContent = "Monto: " + localStorage.getItem('variableMonto')+ ".00 lps";;

            // Mostrar notificación después de 5 segundos
            setTimeout(function () {
                mostrarNotificacion();
            }, 5000); // 5000 milisegundos = 5 segundos


        } else {
            console.error("El elemento con id 'nuevoPedido' no se encontró en el DOM.");
        }
    }
});

function mostrarNotificacion() {
    // Crear un elemento de notificación
    var notificacion = document.createElement("div");
    notificacion.className = "notificacion";
    
    // Configurar el contenido de la notificación
    notificacion.innerHTML = "Tu solicitud ha sido aceptada<br>Repartidor: Josué<br>Calificación: 4.5<br>";
    
    // Crear un botón de aceptar
    var botonAceptar = document.createElement("button");
    botonAceptar.textContent = "Aceptar";
    var botonCancelar = document.createElement("button");
    botonCancelar.textContent = "Rechazar";
    botonAceptar.addEventListener("click", function () {
        // Acción al hacer clic en el botón de aceptar
        alert("Pedido aceptado");
        window.location.href = 'entregaenProgreso2.html';
    });
    botonCancelar.addEventListener("click", function () {
        // Acción al hacer clic en el botón de aceptar
        window.location.href = 'cliente.html?entrega=true';
    });
    
    // Agregar el botón a la notificación
    notificacion.appendChild(botonAceptar);
    notificacion.appendChild(botonCancelar);
    
    // Agregar la notificación al cuerpo del documento
    document.body.appendChild(notificacion);
}


function nuevoPedido() {
    window.location.assign('NuevoPedido.html');
    document.getElementById('')
}

function programarPedido() {
    window.location.assign('ProgramarPedido.html');
}

function Pagar() {
    envio = document.getElementById("descripcion").value;
    monto = document.getElementById("monto").value;

    localStorage.setItem('variableEnvio', envio);
    localStorage.setItem('variableMonto', monto);
    window.location.assign('MetodoPago.html');
}

function confirmarPago() {
    window.location.href = 'cliente.html?entrega=true';
}

function changeTab(tabName) {
    var tabs = document.getElementsByClassName("tabContent");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    document.getElementById(tabName + "Content").classList.add("active");
}

