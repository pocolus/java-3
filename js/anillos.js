
//2 Arrays con objetos
const anillos =[{picture:"💎", referencia: 1, material: "Oro Rubi", valor: 1500},
                {picture:"💍", referencia: 2, material: "Oro, Diamante y Esmeralda", valor: 3500},
                {picture:"💎", referencia: 3, material: "Oro Blanco y zafiro azul", valor: 2500},
                {picture:"💍", referencia: 4, material: "Oro y zafiro azul", valor: 1800},
                {picture:"💎", referencia: 5, material: "Oro y Esmeralda", valor: 2000},
                {picture:"💍", referencia: 6, material: "Oro blanco, Diamante y Esmeralda", valor: 3000},
                {picture:"💎", referencia: 7, material: "Oro Blanco, Diamantes y Rubi", valor: 2750},
                {picture:"💍", referencia: 8, material: "Oro y topacio", valor: 2700},
                {picture:"💎", referencia: 9, material: "Oro amarillo", valor: 3700} ]
//3 DOM
const tbody = document.querySelector("tbody")
//4
function buscarAnillo(referencia) {
    let result = anillos.find(anillo => anillo.referencia === parseInt(referencia))
    return result
}

//5 html dinamico

                function tabla(anillo) {
                    return `<tr>
                                <td>${anillo.picture}</td>
                                <td>${anillo.material}</td>
                                <td>$ ${anillo.valor}</td>
                                <td><button id="${anillo.referencia}">Elige</button></td>
                                <tr>`
                    
                }
//6
function loadAnillos(array) {
    array.forEach(element => {
        tbody.innerHTML += tabla(element)
    
    })
    botonClick()
}
//7
loadAnillos(anillos)

//8 Evento Click

function botonClick() {
    const botons = document.querySelectorAll("button")
        for (boton of botons) {
        boton.addEventListener("click", (e)=> {
            addCar(e.target.id)
            
            
        })
        }
}

//12

function final () {
    let finalCar = car.reduce((acc, anillo)=> acc + anillo.valor, 0)
    alert("El valor total es de: $ " + finalCar + " dollares")
}


