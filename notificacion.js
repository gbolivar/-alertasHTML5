class Notificacion{
	/**
	 * Methos encargado de proceder ha enviar mensaje de alerta desde el apis de HTML5
	 * @param msj String, Mensaje del cual vamos a proceder a implementar
	 * return alerta Mensaje
	 */

    alerta(msj) {
        if (Notification) {
            if (Notification.permission !== "granted") {
                Notification.requestPermission()
            }
            var title = ""
            var extra = {
                icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGSazxmJ1YWkwFVxzIxfuXjPIcTtkKGpvKLwRjZbihLj-6gSwo151amYqr",
                body: msj
            }
            var noti = new Notification( title, extra)
            noti.onclick = {
                // Al hacer click
            }
            noti.onclose = {
                // Al cerrar
            }
            // Cerrar Automaticamente luego de 1000 Segundos.
            setTimeout( function() { noti.close() }, 10000)
            var audio = new Audio('alert.mp3');
      audio.play();
        }
    }



}