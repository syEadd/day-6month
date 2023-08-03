const oil0 = document.querySelectorAll('.name0 p')[1];
const oil2 = document.querySelectorAll('.name0 p')[2];
const oil3 = document.querySelectorAll('.name0 p')[3];
const box1 = document.querySelector('.name0 input');
const color_1 = document.querySelector('.name0 .p0');
console.log(oil0)
box1.addEventListener('click',function(e){
  //  e.preventDefault()
  let dan = box1.value;
  
  
  let boxup = /^[0-9]{4}$/
  
  console.log(boxup.test('1203'))

  if(dan.length == 0){
    oil2.classList.remove('p1')
    oil3.classList.remove('p1')
    oil0.classList.add('p1')
  }else if(boxup.test(dan)){
    oil0.classList.remove('p1')
    oil3.classList.remove('p1')
    oil2.classList.add('p2')
   }else{
     oil0.classList.remove('p1')
     oil2.classList.remove('p1')
     oil3.classList.add('p1')
   }
})
console.log(box1)



