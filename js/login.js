const btnLogin = document.getElementById("btnLogin");
const email = document.getElementById("emailLogin");
const pass = document.getElementById("passLogin");

btnLogin.addEventListener("click", ()=>{
    if(email.checkValidity() && pass.checkValidity()){
        window.location.href = "index.html";
    }
});

if (window.sessionStorage) {
    sessionStorage.setItem("nombre", "Gonzalo");
  
    var nombre = sessionStorage.getItem("nombre");
  
    sessionStorage.removeItem("nombre");
  
  }