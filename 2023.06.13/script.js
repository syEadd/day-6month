// // 제이퀘이
// ('.gub-main-item').hover(function(){

//   $(this).find('.sub').stop().slideDowe(300);
//   $(this).children('a').addClass('active');
// },function(){
//   $(this).find('.sub').stop().slideUp(300);
//   $(this).children('a').addClass('active');
// })


// JS

let gubltems = document.querySelectorAll('gub-main-item');

gubltems.forEach(function(item){
let subMend = item.querySelector('.sub');

item.addEventListener('.mouseover',function(){
  subMend.classList.add('active');
})
})