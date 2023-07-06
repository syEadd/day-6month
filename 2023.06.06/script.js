



const img =document.querySelector('#img');
const all = document.querySelector('.text');
const dog =document.querySelector('body')
img.addEventListener('click',function(){
  all.classList.add('god');
})

dog.addEventListener('click',function(){
  all.classList.remove('bog');
})

