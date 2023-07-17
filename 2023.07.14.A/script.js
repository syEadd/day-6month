$('.main-menu li, .submenu-wrapper').hover(function(){
  
  $('.submenu-wrapper').stop().slideDown(500);

},function(){
  $('.submenu-wrapper').stop().slideUp(500);
  
});


$('.submenu-list > li').hover(function(){
let i = $(this).index();
$('.main-menu').find('a').eq(i).addClass('on')
},function(){
  // this은 .submenu-list > li 을 말하는거 임
  let i = $(this).index();
  console.log(i)
  // eq은 index을 추가해서 제작됨
  $('.main-menu').find('a').eq(i).removeClass('on')
});



// $('선택자').hover(function(){
//   // hover시 실행
// }, function(){
//   // leave시 실행
// })