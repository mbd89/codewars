/*
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/


function replace(s){
  let vowel  = 'aeiouAEIOU';
  for (let i = 0; i<vowel.length; i++){
  if (s.includes(vowel[i])){
  
  s= s.replaceAll(vowel[i], '!')
  }
  }
  return s
  }