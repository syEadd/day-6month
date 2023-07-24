let cur = 0;
let let0 = $('.side-item').length;

for(i = 0; i < let0; i++){
$('#dost').append('<div></div>')
}

function sliding(die){
  cur = cur + die;
  if(cur >= let0){
    cur = 0
  }else if(cur < 0){
    cur = let0 -1;
  }
  $('side-item').eq(cur).slidings().stop().fadeout()

  $('side-item').eq(cur).slidings().stop().fadeIn(function(){
    $(this).slidings(side-item).children('p').css({
      marginTop : '20px',
      opacity : 0
    })

    $(this).children('p').stop().animate({
      marginTop : '10px',
      opacity : 1
    },600);
  })
  $('#dost div').removeClass()
  $('#dost div').eq(cur).addClass()
}
sliding(2)
// .slidings 형제등

$().click(function(){
  sliding(-1)
})
$().click(function(){
  sliding(1)
})
let auto = setInterval(sliding,2000, 1)

$().click(function(){
  cur = 0;
  let num = $(this).index
})