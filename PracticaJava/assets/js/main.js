function Completado() {

    let Nombres = document.getElementById("NombreUsuarios").value
    if (Nombres ="") {
        console.log(`Formulario completado`)
        let cajaP = document.getElementById("saludoUsuario")
        cajaP.innerHTML = `Hola! ${nombreUsuario}, <span class="text-danger fw-bold">como estas?</span>`
    } else {
        alert("Complete la casilla de nombre")
    }
}