const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
let  regUsername = document.getElementById('regUserName')
let  regEmail = document.getElementById('regEmail')
let  regPassword = document.getElementById('regPassword')
let profileName = document.getElementById('profileName')

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function signUp(){
  event.preventDefault();

  if(regUsername.value.trim() == ""){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Enter Username",

    });

  }

  else if(regEmail.value.trim() == ""){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Enter Email",

    });

  }

  
  else if(regPassword.value.trim() == ""){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Enter Password",

    });

  }

  else{
    Swal.fire({
      icon: "success",
      title: "Successfully registerd",
      timer: 1500
  
    })
    
  let userData = {
    username:  regUsername.value,
    email: regEmail.value,
    password: regPassword.value,
  }
  localStorage.setItem("userData",JSON.stringify(userData))
setTimeout(function(){
  window.open("./dashboard.html")
  
},1500)
  }
}


let getdata = localStorage.getItem("userData");
getdata = JSON.parse(getdata)

function signIn(){
  event.preventDefault()
  let signInEmail = document.getElementById('signInEmail');
  let signInPass = document.getElementById('signInPass')
console.log(getdata)

  if(signInEmail.value !== getdata.email || signInPass.value !== getdata.password){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "User Not Find",

    });
  }

  else{
    Swal.fire({
      icon: "success",
      title: "Successfully Login",
      timer: 1500
  
    })
    setTimeout(function(){
   
   window.location.href('/dashboard.html')
    },1500)
  }
}




