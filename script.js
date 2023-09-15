
const validacao_email = (email) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(String(email).toLowerCase())
}

const form = document.querySelector('form')
const nome = document.querySelector('input[name="nome"]')
const email = document.querySelector('input[name="email"]')
const senha = document.querySelector('input[name="senha"]')
const confirmar_senha = document.querySelector('input[name="confirmar_senha"]')
const data = document.querySelector('input[name="data"]')
const genero = document.querySelector('#genero')
const telefone = document.querySelector('input[name="telefone"]')
const agradecimento = document.querySelector('.agradecimento')

let validar_formulario = false

const resetar_entrada = (elemento)=> { 
  elemento.classList.remove('invalido')
  elemento.nextElementSibling.classList.add('error-hidden')
}

const elemento_invalido = (elemento) => {
    elemento.classList.add('invalido')
    elemento.nextElementSibling.classList.remove('error-hidden')
    validar_formulario = false
  }
  

  const validar_entrada = () => {validar_formulario = true
    if (!nome.value) { elemento_invalido(nome) } 

    if (!validacao_email(email.value)) { elemento_invalido(email) }

    if (!senha.value) { elemento_invalido(senha) }

    if (!confirmar_senha.value) { elemento_invalido(confirmar_senha) }

    if (!data.value) { elemento_invalido(data) }

    if (!genero.value) { elemento_invalido(genero) }

    if (!telefone.value) { elemento_invalido(telefone) }
        
}

  
form.addEventListener("submit", (evento) => {evento.preventDefault()
validar_entrada()

if (validar_formulario) {
    // POST - Backend
    form.remove()
    agradecimento.classList.remove('error-hidden')
    console.log("Concluído")
  }
    })


nome.addEventListener('input', () => {
        resetar_entrada(nome) })


email.addEventListener('input', () => {
        resetar_entrada(email)})

senha.addEventListener('input', () => {
          resetar_entrada(senha)})

confirmar_senha.addEventListener('input', () => {
            resetar_entrada(confirmar_senha)})

data.addEventListener('input', () => {
  resetar_entrada(data)})

genero.addEventListener('input', () => {
    resetar_entrada(genero)})

telefone.addEventListener('input', () => {
      resetar_entrada(telefone)})


function conferir_senha(){
  if(confirmar_senha.value === senha.value){ confirmar_senha.setCustomValidity('');
} else{confirmar_senha.setCustomValidity("As senhas não correspondem")}
}