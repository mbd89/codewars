
/*

Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
*/





var min = function(list){
    
  return Math.min.apply(Math,list);
}

var max = function(list){
  
  return Math.max.apply(Math,list);
}

