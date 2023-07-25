const btn0 = document.querySelector('.btn-primary');
const btn1 = document.querySelector('.btn-outline-danger');
console.log()
console.log(btn1)

btn0.addEventListener('click',function(){

  document.querySelector('.boxup').classList.add('on');
  document.querySelector('.overlay').classList.add('box');

})


btn1.addEventListener('click',function(){
  document.querySelector('.boxup').classList.remove('on');
  document.querySelector('.overlay').classList.remove('box');
})

document.querySelector('.boxup').addEventListener('click',function(){
  document.querySelector('.overlay').classList.remove('box');
  document.querySelector('.boxup').classList.remove('on');
})