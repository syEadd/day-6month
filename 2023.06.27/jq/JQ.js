

// label 클릭 했을 때
// 클릭된 label의 자식인 checkbox-img에 Checked class toggle
$('label').on('click', function(e){
  e.preventDefault();
  $(this).children('.checkbox-img').toggleClass('checked');

  // 클릭된 label의 자식인 .checkbox-img class에
  //  checked 라는 class가 포함되어 있다면 
  // <input type="checkbox">의 속성 checked
  if($(this).children('.checkbox-img').hasClass('checked')) {
    // .checkbox-img.checked 라는클래스가 있을 때
    $(this).children("input[type='checkbox']").attr('checked', true);
  } else {
    $(this).children("input[type='checkbox']").removeAttr('checked');
  }
})

$('.total label').on('click', function(){
  if($(this).children('.checkbox-img').hasClass('checked')) {
    $('.agree').find('.checkbox-img').addClass('checked');
    $('.agree').find('input[type="checkbox"]').attr('checked', true);
  } else {

    $('.agree').find('.checkbox-img').removeClass('checked');
    $('.agree').find('input[type="checkbox"]').removeAttr('checked');
  }
})

$('.agree label').on('click',function(){
  let len = $('.agree .checkbox-img').length;
  let chkien = $('.agree .checked').length;
  let unchk = len - chkien;
  console.log(chkien)
  if(unchk == 0) {
    $('.total label .checkbox-img').addClass('checked');
    $('.total label input[type="checkbox"]').attr('checked', true);
  } else {
    $('.total label .checkbox-img').removeClass('checked');
    $('.total label input[type="checkbox"]').removeAttr('checked');
  }
  
})

  $('#submit').on('click',function(e){
    e.preventDefault()
    let req = $('.req').length;
    let req1 = $('.req .checked').length;

    let unchk1 = req - req1;

    if(unchk1 == 0){
      $('#ido').submit()
    }else{
      e.preventDefault();
      $('.req-alert').css('visibility', 'visible');
    }
})

$('#cancel').on('click',function(){
  location.href = 'https://www.naver.com/'
})