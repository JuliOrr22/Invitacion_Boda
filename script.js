// Esperar a que la página cargue completamente
window.onload = function() {
    document.getElementById('envelope').classList.add('open');

    // Después de 2 segundos, hacer desaparecer el sobre
    setTimeout(function() {
        document.getElementById('envelope').classList.add('fade-out');

        // Eliminar el sobre y mostrar el contenido principal
        setTimeout(function() {
            document.getElementById('envelope').remove();
            document.getElementById('content').style.display = 'block';
        }, 1000);
    }, 2000);
};

// Fecha de la boda
var weddingDate = new Date("Oct 26, 2024 17:00:00").getTime();

// Actualizar el conteo regresivo cada segundo
var countdownFunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = weddingDate - now;

    // Calcular días, horas, minutos y segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar el resultado en el div con id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // Si la cuenta llega a cero
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "¡La boda ha comenzado!";
    }
}, 1000);
