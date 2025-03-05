const container=document.getElementById('container');
const regisBtn=document.getElementById('signUp');
const loginBtn=document.getElementById('signIn');


regisBtn.addEventListener('click', ()=>{
  container.classList.add("active")
})

loginBtn.addEventListener('click', ()=>{
  container.classList.remove("active")
})