
/*

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
*/


function largestOfFour(arr) {
  let newArr = [];
  for(let i =0;i<arr.length;i++){
  newArr.push(Math.max.apply(Math, arr[i]))
  }
  return newArr
  
  }


