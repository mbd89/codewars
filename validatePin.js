/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/




function validatePIN (pin) {
  //return true or false
  let j = ".";
  if (pin.includes(j) === false) { 
 if ( /^\d+\.\d+$|^\d+$/.test(pin) && pin >= 0){
   if(pin.length === 4 || pin.length === 6){
     return true;
   } else {
     return false;
   }
 }
    }
  return false;
 }

  