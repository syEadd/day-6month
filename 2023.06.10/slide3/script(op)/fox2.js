const all1 = document.querySelectorAll('.gnb > li');
console.log(all1)
all1.forEach(function(itme){
  const sud = itme.querySelector('.sub')
  itme.addEventListener('mouseover',function(){
    sud.classList.add('acc');
    // all1 건드리는 순간 a태그 전부 보여죠
    this.querySelector('a').classList.add('on');
    
    itme.addEventListener('mouseleave',function(){
      sud.classList.remove('acc');
      this.querySelector('a').classList.remove('on');
    })
  })
})