let count = 5;

let time = setInterval(function(){
count = count - 1;

let randomclor = '#' +Math.round(Math.random()* 0xFFFFFF).toString(16);
document.querySelector('.com').style.backgroundColor = randomclor ;
document.querySelector('.com span').innerHTML= count

console.log(count)
if(count == 0){
  clearInterval(time)
  
}
},1000);

