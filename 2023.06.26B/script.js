const allbtn = document.querySelector('.box1 img')
const btn = document.querySelectorAll('.btn1 > img')
let aa = 2;

console.log(aa)
allbtn.addEventListener('click',function(all){
  allbtn.classList.toggle('om')
  all.preventDefault()

  btn.forEach(function(e){
    e.classList.toggle('on');
    
 
  })
})
///////////////미저장

let i = 2
let a = btn.length
console.log(i <= btn.length)
btn.forEach(function(all){
  all.addEventListener('click',function(){
    if(this.on && this.on == 1 ){
      
      this.classList.add('on') 
     // btn.classList.remove('on')
    

    }else{
      allbtn.classList.add('om')
    
    }
    this.on = !this.on
    
  })
 })