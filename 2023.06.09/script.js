let buttons = document.querySelectorAll('.btn-group button');
const all = 100;
buttons.forEach(function(btn, index){
  btn.addEventListener('click',function(){
    let box = document.querySelector('.slide-list');
    let bune = -index * 100 + 'vw'
  //  box.style.transform = 'translateX(' + bune + ')'
    box.style.transform = `translateX(${bune})`;
    
  })
})