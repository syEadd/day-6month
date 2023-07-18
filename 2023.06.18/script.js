setTimeout(function(){
  clearInterval(heBgcChange)
document.querySelector('.count').classList.add('is-active')
}, 5000)

let heBgcChange = setInterval(function(){
let randomclor = '#' +Math.round(Math.random()* 0xFFFFFF).toString(16);
console.log(randomclor)
document.querySelector('.count').style.backgroundColor = randomclor ;
}, 1000)
