const all1 = document.querySelectorAll('.gnb > li');
console.log(all1)
all1.forEach(function(itme){
  const sud = itme.querySelector('.sub')
  itme.addEventListener('mouseover',function(){
    sud.classList.add('acc')
  })
})