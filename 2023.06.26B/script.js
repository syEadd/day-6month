const allbtn = document.querySelector('.box1 img')
const btn = document.querySelectorAll('.btn1 > img')
let aa = 2;


allbtn.addEventListener('click',function(all){
  allbtn.classList.toggle('om')
  all.preventDefault()

  btn.forEach(function(e){
    e.classList.toggle('on');
    
 
  })
})




// btn.forEach(function(all){

//   all.addEventListener('click',function(){
    
//     this.classList.toggle('on')
    
//     let hot44 = document.querySelectorAll('.on').length;
  
//     console.log(hot44)
//     if(3 == hot44){

//       allbtn.classList.add('om');
//       document.querySelector('.btn4').classList.remove('one');

//     }else if(2 == hot44){
//         allbtn.classList.remove('om')
//        document.querySelector('.btn4').classList.add('one')
//     }else{
      
//       allbtn.classList.remove('om')
//     }

    
//     })
        
//   })


//  TEXT 1번 용 ↓ ↓ ↓

  btn.forEach(function(all){

  all.addEventListener('click',function(){
    
    this.classList.toggle('on')
    
    let hot44 = document.querySelectorAll('.on').length;
    console.log(hot44)
  
    console.log(hot44)
    if(3 == hot44){

      allbtn.classList.add('om');
      document.querySelector('.btn4').classList.remove('one');

    }else if(0 < hot44){
     // 다 체크 되게 만듬!!
        allbtn.classList.remove('om')
       document.querySelector('.btn4').classList.add('one')
    }else{
      
      allbtn.classList.remove('om')
    }

    
    })
        
  })

 // TEXT 2번 용 ↓ ↓ ↓


  
