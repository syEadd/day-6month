let buttons = document.querySelectorAll('.btn-group button');
const all = 100;


buttons.forEach(function(btn, index){

  btn.addEventListener('click',function(){
    let box = document.querySelector('.slide-list');
    let bune = -index * 100 + 'vw'
    // box.style.transform =  'translateX(' + bune + ')';
    // btn.classList.toggle('att');
    // 기능 1 ↑↑
    box.style.transform = `translateX(${bune})`;
    // console.log(buttons);


    // buttons.forEach(function(oterBtn){
    //   oterBtn.classList.remove('att');
    // }) 
    btn.classList.add('att');
    // 기능 2 ↑↑

    buttons.forEach(function(go){
      if(go != btn && go.classList.contains('att')){
        go.classList.remove('att');
      }else{
  
      }
    })


  })
 
  })
