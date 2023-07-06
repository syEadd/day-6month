let text =document.querySelector('.dropdowm-btn');
let text1 =document.querySelector('.dropdowm-ment');
// console.log(text,text1)

text.addEventListener('click',function(e){
  e.preventDefault();
  // text1.classList.toggle('active');
  // -->테스트1 입니다
  if(this.active){
    text1.classList.remove('active')
  }else{
    text1.classList.add('active')
  }
  
  this.active =! this.active

})