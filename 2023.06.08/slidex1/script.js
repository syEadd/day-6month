const But = document.querySelector('.btn1');
const But2 = document.querySelector('.btn2');
const btn2 = document.querySelector('.btn3');
const mut = document.querySelector('.slide-list');


// function btv(){
//   mut.style.transform = 'translateX(-200vw)'
// }
// onclick 클릭 방법1

// function btv(){
//   mut.style.transform = 'translateX(-100vw)';
// }
// But.addEventListener('click', btv)
// onclick=btv" html추가 해서사용 방법2

// But.addEventListener('click',function(){
//   document.querySelector('.slide-list').style.transform ='translateX(0)';
// })
// 사용 방법 3 = 안에서 가져오기

console.log(But)

But2.addEventListener('click',function(){
  mut.style.transform ='translateX(-100vw)'
})


btn2.addEventListener('click',function(){
  mut.style.transform ='translateX(-200vw)'
})