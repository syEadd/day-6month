
// .test = 검증!!
// .empty = 비워줌
// isNaN() = 숫자가 않니다
// !isNaN = 숫자다
// prop =기존의 타입을 변경
// .replace = 
// parent = 부모 태크


//  ////
//  // input에 focusin 되면 부모 .inputbox에 border-act class add
// $('input').focusin(function(){
  //   $(this).parent('.inputbox').addClass('border-act');
  // })
  
  // // input에 focusout되면 부모 .inputbox border-act class remove
  // $('input').focusout(function(){
    //   $(this).parent('.inputbox').removeClass('border-act');
// })

// let mailveri = true;
let idveri = pwveri = pwchkveri = nameveri = bitrhveri = genderveri = phoneveri = addressveri = false;




// input에 focusin 되면 부모 .inputbox에 border-act class add
$('input').focusin(function(){
  $(this).parent('.inputbox').addClass('border-act');
})

// input에 focusout되면 부모 .inputbox border-act class remove
$('input').focusout(function(){
  $(this).parent('.inputbox').removeClass('border-act');
})

let mailveri = true;


// 아이디
// .userid input에 focusout 됐을 때 입력된 값의 길이가 0이라면(조건)
// .userid warn에 내용을 작성(실행문)
$('.userid input').focusout(function(){
  let userId = $(this).val();
  // 최소 5글자 ~ 최대 8글자 사이 영문 소문자 + 숫자 포함
  let idExp= /^[a-z0-9]{5,8}$/

  if(userId.length == 0) {
    $('.userid .warn').html('<span class="text-red">필수정보 입니다.</span>')
  } else if(!idExp.test(userId)) {
    $('.userid .warn').html('<span class="text-red">5~8자의 영문 소문자, 숫자만 사용 가능합니다.</span>')
  } else {
    idveri = true;
    $('.userid .warn').html('<span class="text-green">멋진 아이디네요!</span>')
  }
})


// 비밀번호
// .userpw input에 focusout 됐을 때 
// input value 값 길이(length)가 0이라면(조건)
// .userpw warn에 text-red class '필수 정보입니다.'

// else if (!정규식.test(userPw))
// .userpw warn에 text-red class 
// '8~20자 영문 대 소문자, 숫자, 특수문자를 사용하세요.'
// .userpw .inputbox p에 text-red class '사용불가' (.inputbox 우측 텍스트)
// .userpw .inputbox img attr src 변경 / img - 10

// else (0이 아니고, 정규식에 맞게 작성 했을 때)
// pwveri = true;
// .userpw .inputbox p에 text-green class '안전' (.inputbox 우측 텍스트)
// .userpw .inputbox img attr src 변경 / img - 04
$('.userpw input').focusout(function(){
  let userPw = $(this).val();
  // 8~20자 사이 영문 대소문자, 숫자, 특수문자 포함
  let pwExp = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/

  if(userPw.length == 0) {
    $('.userpw .warn').html('<span class="text-red">필수정보 입니다.</span>');
    $('.userpw .inputbox span').empty();
    // $('.userpw .inputbox img').attr('src', './images/m_icon_pw_step_01.png');
  } else if(!pwExp.test(userPw)) {
    $('.userpw .warn').html('<span class="text-red">8~20자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</span>')
    $('.userpw .inputbox p').html('<span class="text-red">사용불가</span>');
    // $('.userpw .inputbox img').attr('src', './images/m_icon_pw_step_10.png');
  } else {
    pwveri = true;
    $('.userpw .warn').empty();
    $('.userpw .inputbox p').html('<span class="text-green">안전</span>');
    // $('.userpw .inputbox img').attr('src', './images/m_icon_pw_step_04.png')
  }
})


// 비밀번호 재확인
// .userpw-chk input에 focusout 됐을 때 
// 입력된 값이 0이라면(조건)
// .userpw-chk .warn에 text-red class '필수 정보 입니다.' 
// 우측 아이콘 이미지를 원래대로 변경 / img - 02 

// .userpw-chk input.val(), .userpw input.val() 두 값이 같은가? (조건2)
// pwchkveri = true
// .userpw-chk .warn에 들어있는 경고 메세지를 empty()로 비운다. 
// 우측 아이콘 이미지를 바꿔준다. / img - 07

// 그렇지 않다면 else (위 두 조건에 해당하지 않을 때) 0이 아니고 두 값이 일치하지 않을 때
// .userpw-chk .warn에 text-red class 
// '비밀번호가 일치하지 않습니다.' 
// 우측 아이콘 이미지를 원래대로 변경 / img - 02
$('.userpw-chk input').focusout(function(){
  let userPwChk = $(this).val();

  if(userPwChk.length == 0) {
    $('.userpw-chk .warn').html('<span class="text-red">필수 정보 입니다.</span>');
    // $('.userpw-chk .inputbox img').attr('src', './images/m_icon_pw_step_02.png');
  } else if(userPwChk == $('.userpw input').val()) {
    pwchkveri = true;
    $('.userpw-chk .warn').empty();
    // $('.userpw-chk .inputbox img').attr('src', './images/m_icon_pw_step_07.png');
  } else {
    $('.userpw-chk .warn').html('<span class="text-red">비밀번호가 일치하지 않습니다.</span>');
    // $('.userpw-chk .inputbox img').attr('src', './images/m_icon_pw_step_02.png');
  }
})



// 이름
// .username input에 focusout 됐을 때 입력된 값이 0이라면(조건)
// .warn에 text-red 필수 정보 입니다.
// else if
// 정규식 한글 최소 2~5글자 (조건2)
// .warn에 text-red 한글로 2~5글자 사이로 작성하세요.
// else 
// .warn에 들어있는 경고메세지를 지워준다. 
// nameveri = true;
$('.username input').focusout(function(){
  let userName = $('.username input').val();
  let nameExp = /^[가-힣]{2,5}$/;

  if(userName.length == 0) {
    $('.username .warn').html('<span class="text-red">필수 정보입니다.</span>');
  } else if(!nameExp.test(userName)) {
    $('.username .warn').html('<span class="text-red">2~5글자 사이의 한글로 입력하세요.</span>');
  } else {
    nameveri = true;
    $('.username .warn').empty();
  }
})

// $('.birth #year ').focusout(function(){
//   let birth = $('#year').val();
//   let day =/^[0-9]{4}$/
//   if(birth.length == 0){
//      $('.birth .warn').html('<span class="text-red">필수 정보입니다.</span>');
     
//     }else if(!day.test(birth)){
//       $('.birth .warn').html('<span class="text-red">다 입력 해야죠 </span>');
      
//     }else{
//      $('.birth .warn').html('<span class="text-red">오키정보입니다.</span>');

//    }
// })



// $('.birth #date ').focusout(function(){
//   let birth1 = $('#date').val();
//   let day =/^[0-9]{2}$/
//   if(birth.length == 0){
//      $('.birth .warn').html('<span class="text-red">필수 정보입니다.</span>');
     
//     }else if(!day.test(birth1)){
//       $('.birth .warn').html('<span class="text-red">다 입력 해야죠 </span>');
      
//     }else{
//      $('.birth .warn').html('<span class="text-red">오키정보입니다.</span>');

//    }
// })






// 생년월일
// #year, #month, #date에 focusout 됐을 때
// #year의 value length가 4글자 아니라면(조건1)
// .birth .warn에 text-red class 
// '태어난 년도 4자리를 정확하게 입력하세요.'

// #month의 length가 0이라면 (조건2)
// .birth .warn text-red class 
// '태어난 월을 선택하세요.'

// #date의 length가 0이라면 (조건3)
// .birth .warn text-red class 
// '태어난 일(날짜) 2자리를 정확하게 입력하세요.'

// 년,월,일 값이 숫자가 아니라면 (조건4)
// .birth .warn text-red class 
// '생년월일을 다시 확인해주세요.'

// 올 해 기준으로 나이가 100 초과라면 (조건5)
// .birth .warn text-red class 
// '정말이세요?'
$('#year, #month, #date').focusout(function(){
  let year = $('#year').val();
  let month = $('#month').val();
  let date = $('#date').val();

  // 한국 날짜 및 시간 (한국 표준시)
  let now = new Date();
  // Date 객체의 getTime() 메서드는
  // 1970년 1월 1일 00시 00분 00초 (UTC) 
  // 세계표준시를 기준으로 경과한 밀리초를 반환한다. 
  let nowStamp = now.getTime();
  // 현재 날짜 및 시간에서 현재 연도의 네자리 값을 변수에 할당
  now = now.getFullYear();

  // 사용자가 입력한 year, month, date 값으로 Date 객체 생성
  let birth = new Date(year,month,date);
  console.log(birth)
  // 현재 시각
  birth = birth.getTime();
  console.log(birth)

  if(year.length != 4) {
    $('.birth .warn').html('<span class="text-red">태어난 년도 4자리를 정확하게 입력하세요.</span>')
    $('.birth .warn').html('<span class="text-red">태어난 년도 4자리를 정확하게 입력하세요.</span>');
  } else if(month.length == 0) {
    $('.birth .warn').html('<span class="text-red">태어난 월을 선택하세요.</span>')
  } else if(date.length == 0) {
    $('.birth .warn').html('<span class="text-red">태어난 일(날짜) 2자리를 정확하게 입력하세요.</span>')
    $('.birth .warn').html('<span class="text-red">태어난 월을 선택하세요.</span>');
  } else if(date.length == 0 || date > 31 || date <= 0) {
    $('.birth .warn').html('<span class="text-red">태어난 일(날짜) 2자리를 정확하게 입력하세요.</span>');
  } else if(isNaN(year * month * date)) {
    // is Not a Number
    $('.birth .warn').html('<span class="text-red">생년월일을 다시 확인 해주세요.</span>')
    $('.birth .warn').html('<span class="text-red">생년월일을 다시 확인 해주세요.</span>');
  } else if(now - year > 100) {
    $('.birth .warn').html('<span class="text-red">정말이세요?</span>')
    $('.birth .warn').html('<span class="text-red">정말이세요?</span>');
  } else if(nowStamp < birth) {
    $('.birth .warn').html('<span class="text-red">미래에서 오셨군요.^^</span>');
  } else {
    bitrhveri = true;
    $('.birth .warn').empty();
  }
})

// 성별
// .gender .inputbox를 클릭 했을 때
// .gender 모든 .inputbox에 .btn-primary class remove
// .gender .inputbox안 모든 input radio에 checked false
// 클릭된 자신에게만 .btn-primary class add
// 클릭된 자신에게만 input radio에 checked true
// genderveri = true;
$('.gender .inputbox').on('click', function(){
  $('.gender .inputbox').removeClass('btn-primary');
  // prop => jQuery에서 radio 버튼을 제어할 때 사용
  $('.gender .inputbox input[type="radio"]').prop('checked', false);
  $(this).addClass('btn-primary');
  $(this).children('input[type="radio"]').prop('checked', true);
  genderveri = true;
})




$('#veribtn').on('click', function(){
  let phoneVal = $('.phonenum input').val();
  phoneVal = phoneVal.replace(/[^0-9]/g, '');
  $('.phonenum input').val(phoneVal);

  // .phonenum input value length가 10~11 자리가 아니라면(조건1)
  // .phonenum input value 값이 숫자가 아닌 경우(조건2)
  // 변수 두 개 선언 후 1,2번 조건을 모두 충족할 때만 값을 true로 준다.
  // 10~11자리가 맞을 때 / 값이 숫자일 경우
  let phoneLeng;
  if(phoneVal.length < 10 || phoneVal.length > 11) {
    phoneLeng = false;
  } else {
    phoneLeng = true;
  }

  let phoneNum;
  if(isNaN(phoneVal)) {
    phoneNum = false;
  } else {
    phoneNum = true;
  }

  // phoneLeng, phoneNum 모두 true일 경우(조건)
  // .phone .warn에 text-green class '인증번호를 발송했습니다~~~';
  // #veritext에 disabled false
  // .inputbox에 .disinput class remove

  // else 
  // .phone .warn에 text-red class '형식에 맞지 않는 번호입니다.'
  // #veritext에 disabled true
    // .inputbox에 .disinput class add
  if(phoneLeng && phoneNum) {
    $('.phone .warn').html('<span class="text-green">인증번호를 발송했습니다.(유효시간 30분)<br>인증번호가 오지 않으면 입력하신 정보가 정확한지 확인하여 주세요. 이미 가입된 번호거나, 가상전화번호는 인증번호를 받을 수 없습니다.</span>');
    $('#veritext').attr('disabled', false);
    $('#veritext').parent('.inputbox').removeClass('disinput');
  } else {
    $('.phone .warn').html('<span class="text-red">형식에 맞지 않는 번호입니다.</span>')
    $('#veritext').attr('disabled', true);
    $('#veritext').parent('.inputbox').addClass('disinput');
  }
})

$('#veritext').focusout(function(){
  if($(this).val() == '1234'){
    phoneveri = true;
    $('.phone .warn').html('<span class="text-red">yes</span>')
    
  }else{
    
    $('.phone .warn').html('<span class="text-geed">no</span>')
  }
})

////////////
$('#joinbtn').on('click', function(e){
  if(idveri && pwveri && pwchkveri && nameveri && bitrhveri && genderveri && phoneveri && addressveri && mailveri) {
    $('#join-form').submit();
  } else {
    e.preventDefault();
    // 강제 이벤트 발생 시키는 메서드 trigger
    $('input').trigger('focusout');
  }
})
























// 주소
function sample6_execDaumPostcode() {
  addressveri = true;
  new daum.Postcode({
      oncomplete: function(data) {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

          // 각 주소의 노출 규칙에 따라 주소를 조합한다.
          // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
          var addr = ''; // 주소 변수
          var extraAddr = ''; // 참고항목 변수

          //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
          if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
              addr = data.roadAddress;
          } else { // 사용자가 지번 주소를 선택했을 경우(J)
              addr = data.jibunAddress;
          }

          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if(data.userSelectedType === 'R'){
              // 법정동명이 있을 경우 추가한다. (법정리는 제외)
              // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
              if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                  extraAddr += data.bname;
              }
              // 건물명이 있고, 공동주택일 경우 추가한다.
              if(data.buildingName !== '' && data.apartment === 'Y'){
                  extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
              }
              // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
              if(extraAddr !== ''){
                  extraAddr = ' (' + extraAddr + ')';
              }
              // 조합된 참고항목을 해당 필드에 넣는다.
              document.getElementById("sample6_extraAddress").value = extraAddr;
          
          } else {
              document.getElementById("sample6_extraAddress").value = '';
          }

          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          document.getElementById('sample6_postcode').value = data.zonecode;
          document.getElementById("sample6_address").value = addr;
          // 커서를 상세주소 필드로 이동한다.
          document.getElementById("sample6_detailAddress").focus();
      }
  }).open();
}

$('#joinbtn').on('click', function(e){
  if(idveri && pwveri && pwchkveri && nameveri && bitrhveri && genderveri && phoneveri && addressveri && mailveri) {
    $('#joinform').submit();
  } else {
    e.preventDefault();
    // 강제 이벤트 발생 시키는 메서드 trigger
    $('input').trigger('focusout');
  }
})



