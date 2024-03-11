const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// Máscara para o telefone
function mascaraTelefone(input) {
  var telefone = input.value;

  // Remove caracteres não numéricos
  telefone = telefone.replace(/\D/g, '');

  // Adiciona parênteses ao DDD
  telefone = telefone.replace(/^(\d{2})(\d)/g, '($1) $2');

  // Limita o número de caracteres para 11 dígitos (DDD + número)
  telefone = telefone.substring(0, 14);

  // Adiciona espaço após o DDD se for um número de celular
  // e o hífen após o quinto ou quarto dígito
  if (telefone.length === 14) {
    telefone = telefone.replace(/(\d{5})(\d)/, '$1-$2');
  } else {
    telefone = telefone.replace(/(\d{4})(\d)/, '$1-$2');
  }

  // Atualiza o campo com a máscara aplicada
  input.value = telefone;
}

// Adiciona o evento de input ao campo de telefone
var campoTelefone = document.getElementById('numeroTelefone');
campoTelefone.addEventListener('input', function () {
  mascaraTelefone(this);
});



// Validação de formulário
// document.getElementById('meuFormulario').addEventListener('submit', function (event) {
//   var nome = document.getElementById('name').value;
//   var email = document.getElementById('email').value;
//   var telefone = document.getElementById('numeroTelefone').value;

//   if (!validarNome(nome) || !validarEmail(email) || !validarTelefone(telefone)) {
//     alert('Por favor, preencha os campos corretamente.');
//     event.preventDefault(); // Impede o envio do formulário
//   }
// });


// Função para validar o email
// function validarEmail(email) {
//   var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return regex.test(email);
// }

// // Função para validar o telefone (formato brasileiro)
// function validarTelefone(telefone) {
//   var regex = /^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$/;
//   return regex.test(telefone);
// }

// // Função para validar o nome (simples, apenas para garantir que não estejam vazios)
// function validarNome(nome) {
//   return nome.trim().length > 0;
// }

// // Exemplo de uso
// var email = "exemplo@dominio.com";
// var telefone = "(31) 90000-0000";
// var nome = "José da Silva";

// console.log(validarEmail(email)); // true ou false
// console.log(validarTelefone(telefone)); // true ou false
// console.log(validarNome(nome)); // true ou false













