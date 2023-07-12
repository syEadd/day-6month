$('.gnb > li').hover(function(){
  $(this).find('ul').stop().slideDown(500);
  // hover 기능 다 보여줌 ↓
  $(this).find('a').addClass('on');
},function(){
$(this).find('ul').stop().slideUp(500);
 // hover 기능 다 보여줌 ↓
$(this).find('a').removeClass('on');
})