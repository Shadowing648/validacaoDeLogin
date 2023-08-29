function validarFormulario() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
  
    if (email == "") {
      alert("Por favor, preencha o campo de e-mail.");
      return false;
    }
  
    if (senha == "") {
      alert("Por favor, preencha o campo de senha.");
      return false;
    }
  
  
    // Verifica se a senha tem pelo menos 8 caracteres
    if (senha.length < 8) {
      alert("A senha deve ter pelo menos 8 caracteres.");
      return false;
    }
  
    return true;
  }