const boum = document.querySelectorAll('.slide-but > li');
const miges = document.querySelector('.slide-list');
console.log(boum);


boum.forEach(function(all,index){

all.addEventListener('click',function(){
  
  let box = -index * 100 + 'vw';
  
  miges.style.transform = 'translateX(' + box + ')';
  boum.forEach(function(fox){
    fox.classList.remove('acc')
  })
  all.classList.add('acc');
})
})

