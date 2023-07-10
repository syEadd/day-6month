let sileList = document.querySelector('.slide-list');
let slideltems = document.querySelectorAll('.slide-list li')
let prevBtn = document.querySelector('.prev');
let nextBen = document.querySelector('.next');
let currentSlie = 0;
// console.log(currentSlie)

nextBen.addEventListener('click',function(){
  if(currentSlie < slideltems.length - 1){
    currentSlie++;
    sileList.style.transform = `translateX(-${currentSlie * 100}vw)`
  }
})
prevBtn.addEventListener('click',function(){
  if(currentSlie > 0){
    currentSlie--;
    sileList.style.transform = 'translateX(-'+currentSlie*100 +'vw)'

  }
})



