// // 제이퀘이
// ('.gub-main-item').hover(function(){

//   $(this).find('.sub').stop().slideDowe(300);
//   $(this).children('a').addClass('active');
// },function(){
//   $(this).find('.sub').stop().slideUp(300);
//   $(this).children('a').addClass('active');
// })


// JS
const box = document.querySelector('.box1')

let gubltems = document.querySelectorAll('.gub-main-item');
gubltems.forEach(function(item){
  let subMend = item.querySelector('.sub');
  
  item.addEventListener('mouseover', function(){
    subMend.classList.add('active');
    this.querySelector('a').classList.add('on')
    this.querySelector('.box1').classList.add('bob')
  })
  item.addEventListener('mouseleave',function(){
    subMend.classList.remove('active')
    this.querySelector('a').classList.remove('on')
    this.querySelector('.box1').classList.remove('bob')
  })

})