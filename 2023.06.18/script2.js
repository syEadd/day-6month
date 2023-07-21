// let count = 5;

// let time = setInterval(function(){
// count = count - 1;

// let randomclor = '#' +Math.round(Math.random()* 0xFFFFFF).toString(16);
// document.querySelector('.com').style.backgroundColor = randomclor ;
// document.querySelector('.com span').innerHTML= count

// console.log(count)
// if(count == 0){
//   clearInterval(time)
  
// }
// },1000);

// 카운트 적용 해서 자연적으로 살아짐 ↓

let plusCount = 1;

let = hot07 = setInterval(function(){
  plusCount = plusCount + 1;
  document.querySelector('.com span').innerHTML = plusCount;
  let randomclor = '#' +Math.round(Math.random()* 0xFFFFFF).toString(16);
 
  
  if(plusCount==10){
    clearInterval(hot07)
    document.querySelector('.com').classList.add('is-active')
    
  }
}, 1000)

