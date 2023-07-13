const box =document.querySelectorAll('.text4 > li');
console.log(box)


box.forEach(function(all){
  const fox1 = all.document.querySelector('.text5');

  all.addEventListener('mouseover',function(){
    fox1.classList.add('.acc');

    
  })
})