const box = document.querySelector('.fox li:nth-child(2)');

const bot = document.querySelector('.egg1')

const tot = document.querySelector('.btm')

box.addEventListener('click',function(Bt){
  Bt.preventDefault()
  bot.classList.add('om');
})

tot.addEventListener('click',function(fl){
   fl.preventDefault()
  bot.classList.remove('om');
})