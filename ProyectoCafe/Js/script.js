//Declaracion de variables y aplicacion de dom
const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const textarea = document.querySelector('#textarea')
const formulario = document.querySelector('.formulario')

//objetos
const datos = {
    nombre  : '',
    email   : '',
    textarea: ''
}

//eventos
nombre.addEventListener('input',info)
email.addEventListener('input',info)
textarea.addEventListener('input',info)

//Funcion de los eventos: nombre, email, mensaje
function info(evento) {
    datos[evento.target.id] = evento.target.value
    
}

// evento y funcion de envio de formulario
formulario.addEventListener('submit', function (e) {
    e.preventDefault()
    //Destructuring del objeto
    const {nombre, textarea, email} = datos
    if (nombre === '' || textarea === '' ||  email === '' ) {
        mostrarError('*formulario incompleto, rellene todos los datos*')

        return
        
    }

    mostrarEnviado('El formulario se ha enviado correctamente')
})

function mostrarError(mensaje) {
    
    const error = document.createElement('P')
    error.textContent = mensaje
    error.classList.add('error')
    formulario.appendChild(error)

    setTimeout(() => {
        error.remove()
    }, 4000);
}

function mostrarEnviado(mensaje) {
    const enviado = document.createElement('P')
    enviado.textContent = mensaje
    enviado.classList.add('enviado')
    formulario.appendChild(enviado)

    setTimeout(() => {
        enviado.remove()
    }, 4500);
    
}

