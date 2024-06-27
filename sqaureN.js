/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
1
2
+
2
2
+
2
2
=
9
1 
2
 +2 
2
 +2 
2
 =9.
*/




function squareSum(numbers){
  if (numbers){ 
let j = [];
let x = 0;
for (let i = 0; i<numbers.length; i++){ 
j.push((numbers[i]*numbers[i]));
}

for (let i = 0; i < j.length; i++){
x += j[i];
}
    return x;
  }
  else{
    return 0;
  }
} 
  