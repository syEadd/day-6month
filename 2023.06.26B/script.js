const allbtn = document.querySelector('.box1 img')
const btn = document.querySelectorAll('.btn1 > img')
let aa = 2;

console.log(aa)
allbtn.addEventListener('click',function(all){
  allbtn.classList.toggle('om')
  all.preventDefault()

  btn.forEach(function(e){
    e.classList.toggle('on');
    
    if(2 <= btn.length){
      allbtn.classList.add('om')
      e.classList.add('on');
    }
    
  })
})