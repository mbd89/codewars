/*
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'

*/



function stringClean(s){
  // Function will return the cleaned string
  return s.replace(/[0-9]/g, '')
}






   