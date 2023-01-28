document.querySelector("#btnSolicitud").addEventListener("click", () => {

let inicio = document.querySelector("#inicio").value - 1
let fin = document.querySelector("#fin").value - 1

let url = "https://www.fishwatch.gov/api/species/red-snapper"

let solicitud = fetch(url) 
solicitud.then(res => res.json())
        .then((informacion) => {
            console.log(informacion)
            informacion.facts.forEach((texto, posicion) => {
                if (posicion >= inicio && posicion <= fin) {
                    document.querySelector("#infoApi").innerHTML += `<p>${texto}</p>`
                }
            });
        })
    })
