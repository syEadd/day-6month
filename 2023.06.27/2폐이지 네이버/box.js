const oil0 = document.querySelectorAll('.name0 p')[1];
const oil2 = document.querySelectorAll('.name0 p')[2];
const oil3 = document.querySelectorAll('.name0 p')[3];
const box1 = document.querySelector('.name0 input');
const color_1 = document.querySelector('.name0 .p0');
console.log(oil0)
box1.addEventListener('click',function(e){
  //  e.preventDefault()
  let boxup = /^[0-9]{2}$/
  if(boxup.test == '2'){

    oil2.classList.add('p1')
    
  }else{
     oil0.classList.add('p1')

   }
})
console.log(box1)


console.log(boxup.test('0'))

