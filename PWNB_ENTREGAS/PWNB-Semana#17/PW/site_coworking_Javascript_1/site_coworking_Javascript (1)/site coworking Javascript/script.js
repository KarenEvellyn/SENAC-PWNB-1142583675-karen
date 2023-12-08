function login() {
    var email= document.getElementById('email').value;
    var password = document.getElementById('senha').value;

    if ('"' + email  + '"'===  localStorage.getItem('email') && '"' + password + '"' === localStorage.getItem('senha')) {
       alert('Login feito com sucesso, Seja Bem vindo(a) a TechPlace!');
       window.location.href = 'reserva.html';
    } else {
       alert('Falha ao efetuar o login, cheque suas informações');
    }
}

function cadastrar() {
   var nome = document.getElementById('nome').value;
   var email = document.getElementById('email').value;
   var senha = document.getElementById('password').value;

   if (!nome || !email || !senha) {
       alert('Por favor, preencha todos os campos antes de cadastrar.');
   } else {
       var usuario = {
           nome: nome,
           email: email,
           senha: senha
       };

       localStorage.setItem('nome', JSON.stringify(nome));
       localStorage.setItem('email', JSON.stringify(email));
       localStorage.setItem('senha', JSON.stringify(senha));

       alert('Cadastro realizado com sucesso!');
   }
}