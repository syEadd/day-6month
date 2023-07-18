setTimeout(function(){
  // clearInterval(heBgcChange)
document.querySelector('.count').classList.add('is-active')
}, 5000)

// let heBgcChange = setInterval(function(){
// let randomclor = '#' +Math.round(Math.random()* 0xFFFFFF).toString(16);
// console.log(randomclor)
// document.querySelector('.count').style.backgroundColor = randomclor ;
// }, 1000)


// RGB 값으로 램덤하는 컬러 변경함
// 최소값을 최대값을 지정하고
// 그 사이에 함수 지정

function rand (min,max){
return Math.round(Math.random() * (max - min + 1) + min)
clearInterval(rdfd)
}

let rdfd = setInterval(function(){
  let r = rand(0,255)
  let g = rand(0,255)
  let b = rand(0,255)
  
  document.querySelector('.count').style.backgroundColor = 'rgb('+r+','+g+','+b+')';
}, 1000)







setTimeout(function(){
  // clearInterval(color100)
document.querySelector('.com').classList.add('is-active')
}, 5000)

// 주의 ↓↓↓↓↓

function go2 (box1, box2){
  return Math.round(Math.random() * (box1-box2 +1)+box2)
 
 
}


var box07 = 0

let color100 = setInterval(function(index){
 
  let r = go2(0,255)
  let g = go2(0,255)
  let b = go2(0,255)
document.querySelector('.com').style.backgroundColor = 'rgb('+r+','+g+','+b+')';

if(box07<5){
box07++;

}


document.querySelector('.com span').innerHTML = box07;
},1000)

