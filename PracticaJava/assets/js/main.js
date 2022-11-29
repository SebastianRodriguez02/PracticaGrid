function Completado() {

    let Nombres = document.getElementById("NombreUsuarios").value
    if (Nombres =="") {       
       alert("Complete la casilla de nombre")
       return
    }

    let Apellidos = document.getElementById("ApellidoUsuarios").value
    if (Apellidos =="") {
        alert("Complete la casilla de apellido")
        return
    }

    let Correoelectronico = document.getElementById("ApellidoUsuarios").value
    if (Correoeletronico =="") {
        alert("Complete la casilla de correo")
        return
    }

    let Ciudad = document.getElementById("ApellidoUsuarios").value
    if (ciudad =="") {
        alert("Complete la casilla de ciudad")
        return
    }

    let Paises = document.getElementById("Paises").value
    if (Paises =="") {
        alert("Seleccione un país")
        return
    }
}