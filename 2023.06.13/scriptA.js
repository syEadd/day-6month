let openBtn =document.querySelector('.gnd-open-btn');
let box1 = document.querySelector('.sidebar-btn')
openBtn.addEventListener('click',function(){
  document.querySelector('.sidebar').classList.add('acct')
})
box1.addEventListener('click',function(){
  document.querySelector('.sidebar').classList.remove('acct')
})

