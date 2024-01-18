class registros{
  constructor (username,CorreoElectronico,password){
    this.username = username;
    this.CorreoElectronico = CorreoElectronico;
    this.password = password;
  }
  }

const formIngresar = document.querySelector("#formInput"),
userInput = document.querySelector("#userInput"),
passInput = document.querySelector("#passInput"),
btnInput = document.querySelector("#login"),
mensaje = document.querySelector("#mensaje");


const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
usuarios.push (new registros("marcos","marcos@gmail.com",123));

function guardarLS(elemento){
  return localStorage.setItem('usuarios', JSON.stringify(elemento))
}
guardarLS(usuarios);



function recuperarLS(){
  return JSON.parse(localStorage.getItem("usuarios"));
}


const registradosLS = recuperarLS();


function registrados(registradosLS){
  let userFound = registradosLS.find((usuario)=>{
    return usuario.username == userInput.value && usuario.password == passInput.value;  
  })
    if(userFound){
      window.location.href = "./productos.html";
    }else{
      document.querySelector("#mensaje").innerText = "Datos incorrectos o Usuario No registrado";
    }
  }
  

formIngresar.addEventListener('submit', (e)=>{
  e.preventDefault()
  registrados(registradosLS)
  formIngresar.reset();  
})