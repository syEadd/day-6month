



const img =document.querySelector('#img');
const all = document.querySelector('.text');
const dog =document.querySelector('.fox7')

img.addEventListener('click',function(go){
  all.classList.add('god');
  go.preventDefault()
})

dog.addEventListener('click',function(){
  all.classList.remove('god');
})

