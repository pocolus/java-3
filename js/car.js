
//1 Array vacio carrito
const car =[]

//9
function addCar(id) {
    let result = anillos.find(anillo => anillo.referencia === parseInt(id))
        if (result !== undefined) {
            car.push(result)
            keepCar(car)

        }
}

//10 local storage y Jason

function keepCar(car) {
    if (car.length > 0) {
        localStorage.setItem("carAnillos", JSON.stringify (car))
    }

}


//11 
function recoveryCar(){
    const carRecovery = JSON.parse(localStorage.getItem("carAnillos")) 
    if (carRecovery.length > 0) {
        car.push(... carRecovery)
    }
    
}

recoveryCar()