"use strict"


const login=document.getElementById('login');
login.addEventListener('click',function(){


const username=document.querySelector('#username').value;
const password=document.querySelector('#password').value;
if(username=='admin' && password=='admin'){
  
    //just a test coz like that the website will be hacked easily

window.location.replace("admin.html");
}
else 
  alert('Login Failed');

})


