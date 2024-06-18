/*
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
*/




function strCount(str, letter){  

  let j = 0;
  for (let i =0 ; i<str.length; i++){
    if (str[i] === letter){
      j++;
    }
    
  }
  return j;
}
