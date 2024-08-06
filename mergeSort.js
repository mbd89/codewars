/*
Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
*/





function mergeArrays(a, b) {
  // your code here
  let c = a.concat(b)
  return c.sort(function(a, b){return a-b}).filter((value, index)=>c.indexOf(value) === index)

}
