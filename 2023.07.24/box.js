// 관습적으로 scroll
window.addEventListener('scroll',function(){
  // console.log(window.scrollY+'px')

  // 스크롤 
  // window.scroll(0,800)
 if(100 <= window.scrollY){
  document.querySelector('nav').style.backgroundColor = "Tomato";

 }else{
  document.querySelector('nav').style.backgroundColor = "red";

 }

})

document.querySelector('.lorem').addEventListener('scroll',function(){
  let all = document.querySelector('.lorem').scrollTop;
  let egg2 = document.querySelector('.lorem').scrollHeight;
  let egg = document.querySelector('.lorem').clientHeight;

  console.log(all,egg,egg2)
  if(all + egg == egg2){
    all0.window.scrollY+'px'
    alert(all + egg == egg2)

  }

})
window.addEventListener('scroll',function(){
  
  let box0 = document.querySelector('html').scrollTop;
  let box1 = document.querySelector('html').clientHeight;
  let box2 = document.querySelector('html').scrollHeight;
 
  // console.log(box0 , box1 , box2)
  if(box0 + box1 == box2){

    alert(box0 + box1 == box2)
  }
})

window.addEventListener('scroll',function(){


})

window.addEventListener('scroll',function(){
  let scorolltop0 = document.querySelector('html').scrollTop;
  let clienth0 = document.querySelector('html').clientHeight;
  let slienth0 = document.querySelector('html').scrollHeight;
  // console.log(scorolltop0);
  // console.log('화면 높이'+ clienth0 );
  // console.log('스양'+ slienth0);
  let progress = (scorolltop0 / (slienth0 - clienth0)) * 100;
  document.querySelector('.fox').style.width = progress + '%';
})

window.addEventListener('scroll', function(){
  let scrollTop = document.querySelector('html').scrollTop;
  let clientH = document.querySelector('html').clientHeight;
  let scrollH = document.querySelector('html').scrollHeight;
  // console.log('스크롤 양 :' +  scrollTop);
  // console.log('화면 높이 :' +  clientH);
  // console.log('스크롤 높이 :' +  scrollH);
  
  // 백분율 환산
  // (구하려는 백분율을 나타내는 수 / 전체 수) * 100
  let progress = (scrollTop / (scrollH - clientH)) * 100;
  console.log(progress + '%')
  document.querySelector('.fox').style.width = progress + '%';
})

