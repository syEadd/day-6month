// $('.btn-primary').on('click',function(){
//   $('.boxup').addClass('.on');
//   $('.overlay').addClass('.box');
// })
// $('.btn-outline-danger').on('click',function(){
//   $('.boxup').removeClass('.on')
//   $('.overlay').removeClass('.box')
// })
// $('.boxup').on('click',function(){
//   $('.overlay').removeClass('.box')
//   $('.boxup').removeClass('.on')
// })

// is ==

$('.btn-primary').on('click', function(){
  $('.overlay').addClass('box');
})

$('.btn-outline-danger').on('click', function(){
  $('.overlay').removeClass('box');
})

$('.overlay').on('click', function(e){
  // e.target과 .overlay가 일치하면 코드 실행
  if($(e.target).is('.overlay')) {
    $('.overlay').removeClass('box');
  }
  console.log($(e.target))
})