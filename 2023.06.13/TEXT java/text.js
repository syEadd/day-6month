const box1 = document.querySelector('.close-btn button');



box1.addEventListener('click',function(){
  setTimeout(function(){
    document.querySelector('.popup').style.display = 'none'

  }, 5000)
  

})

