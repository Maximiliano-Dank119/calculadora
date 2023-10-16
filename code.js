
// let de la calculadora, para ingregar a las operaciones
let bandera = true
let numerosAIngresar = []
let numeroTemporal = "0"
let operador = ""


// constantes de la pantalla
const pantalla = document.querySelector(".pantalla-visible")

// constantes de los botnes-numero y puntos
const botonNumero1 = document.querySelector(".btn-1")
const botonNumero2 = document.querySelector(".btn-2")
const botonNumero3 = document.querySelector(".btn-3")
const botonNumero4 = document.querySelector(".btn-4")
const botonNumero5 = document.querySelector(".btn-5")
const botonNumero6 = document.querySelector(".btn-6")
const botonNumero7 = document.querySelector(".btn-7")
const botonNumero8 = document.querySelector(".btn-8")
const botonNumero9 = document.querySelector(".btn-9")
const botonNumero0 = document.querySelector(".btn-0")
const botonNumeroP = document.querySelector(".btn-p")
const botonNumeroC = document.querySelector(".btn-c")
// constantes de los botnes-operadores
const botonNumeroS = document.querySelector(".btn-s")
const botonNumeroR = document.querySelector(".btn-r")
const botonNumeroD = document.querySelector(".btn-d")
const botonNumeroM = document.querySelector(".btn-m")
const botonNumeroIG = document.querySelector(".btn-ig")
const botonNumeroDEL = document.querySelector(".btn-del")

// evento click, numero
botonNumero1.addEventListener("click",()=>{
    if (numeroTemporal === "0"){
        pantalla.textContent = ""
    }
    pantalla.textContent += "1"
    numeroTemporal += "1"
})
botonNumero2.addEventListener("click",()=>{
    if (numeroTemporal === "0"){
        pantalla.textContent = ""
    }
    pantalla.textContent += "2"
    numeroTemporal += "2"
    console.log(numeroTemporal)
})
botonNumero3.addEventListener("click",()=>{
    if (numeroTemporal === "0"){
        pantalla.textContent = ""
    }
    pantalla.textContent += "3"
    numeroTemporal += "3"
})
botonNumero4.addEventListener("click",()=>{
    if (numeroTemporal === "0"){
        pantalla.textContent = ""
    }
    pantalla.textContent += "4"
    numeroTemporal += "4"
})
botonNumero5.addEventListener("click",()=>{
    if (numeroTemporal === "0"){
        pantalla.textContent = ""
    }
    pantalla.textContent += "5"
    numeroTemporal += "5"
})
botonNumero6.addEventListener("click",()=>{
    if (numeroTemporal === "0"){
        pantalla.textContent = ""
    }
    pantalla.textContent += "6"
    numeroTemporal += "6"
})
botonNumero7.addEventListener("click",()=>{
    if (numeroTemporal === "0"){
        pantalla.textContent = ""
    }
    pantalla.textContent += "7"
    numeroTemporal += "7"
})
botonNumero8.addEventListener("click",()=>{
    if (numeroTemporal === "0"){
        pantalla.textContent = ""
    }
    pantalla.textContent += "8"
    numeroTemporal += "8"
})
botonNumero9.addEventListener("click",()=>{
    if (numeroTemporal === "0"){
        pantalla.textContent = ""
    }
    pantalla.textContent += "9"
    numeroTemporal += "9"
})

// evento click, operadores
botonNumeroS.addEventListener("click",()=>{
    if (bandera === true & numeroTemporal !== "0"){
        pantalla.textContent += " + "
        operador = "+"
        bandera = false
        numerosAIngresar.push(parseInt(numeroTemporal))
        numeroTemporal = ""
    }
    })
botonNumeroR.addEventListener("click",()=>{
    if (bandera === true & numeroTemporal !== "0"){
        pantalla.textContent += " - "
        operador = "-"
        bandera = false
        numerosAIngresar.push(parseInt(numeroTemporal))
        numeroTemporal = ""
    }
})
botonNumeroM.addEventListener("click",()=>{
    if (bandera === true & numeroTemporal !== "0"){
        pantalla.textContent += " * "
        operador = "*"
        bandera = false
        numerosAIngresar.push(parseInt(numeroTemporal))
        numeroTemporal = ""
    }
})
botonNumeroD.addEventListener("click",()=>{
    if (bandera === true & numeroTemporal !== "0"){
        pantalla.textContent += " / "
        operador = "/"
        bandera = false
        numerosAIngresar.push(parseInt(numeroTemporal))
        numeroTemporal = ""
    }
})
botonNumeroIG.addEventListener("click",()=>{
    if (bandera === false & operador != "" & numeroTemporal !== ""){
        numerosAIngresar.push(parseInt(numeroTemporal))
        numeroTemporal = solucion(operador,numerosAIngresar)
        pantalla.textContent = numeroTemporal
        operador = ""
        bandera = true
        numerosAIngresar = []
        console.log(numeroTemporal)
        console.log(numerosAIngresar)
    }
})
botonNumeroDEL.addEventListener("click",()=>{
    pantalla.textContent = "0"
    operador = ""
    bandera = true
    numeroTemporal = "0"
})

const solucion = (operador,numerosAIngresar)=>{
    if (operador === "+"){
        return numerosAIngresar[0] + numerosAIngresar[1]
    }else if (operador === "-"){
        return numerosAIngresar[0] - numerosAIngresar[1]
    }else if (operador === "*"){
        return numerosAIngresar[0] * numerosAIngresar[1]
    }else if (operador === "/"){
        return numerosAIngresar[0] / numerosAIngresar[1]
    }
}