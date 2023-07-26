const box = document.querySelector('.box img');
const boxup = document.querySelector('.box1 img');


box.addEventListener('click',function(){
  // box.src = './img5.jpg'
  
  let box01 = {
   src :  '../img/공격 곰.jpg'
  }
  boxup.src = box01.src
  boxup.src = box.src
 
})
