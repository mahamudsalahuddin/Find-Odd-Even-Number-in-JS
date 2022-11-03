let random = document.querySelector(".random");
let even = document.querySelector(".even");
let odd = document.querySelector(".odd");

let randomArray = [1,2,3,4,5,6,7,8,9,0,12,34,56,78,54,32,56,76,99];
let evenArr = [], oddArr = [];

random.innerHTML = randomArray;
randomArray.map((item)=>{
  console.log(item)
  if(item%2==0){
    evenArr.push(item);
  }
  else{
    oddArr.push(item)
  }
})
even.innerHTML = evenArr;
odd.innerHTML = oddArr;