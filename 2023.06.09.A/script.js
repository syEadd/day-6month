let buttons = document.querySelectorAll('.btn-group button');
const all = 100;

buttons.forEach(function(btn, index){

  btn.addEventListener('click',function(){
    let box = document.querySelector('.slide-list');
    let bune = -index * 100 + 'vw'
    // box.style.transform =  'translateX(' + bune + ')';
    // btn.classList.add('att');
    box.style.transform = `translateX(${bune})`;
    console.log(buttons);
    // 수정 필요 !!document.querySelector('att').style.backgroundColor = 'red';
  })
})