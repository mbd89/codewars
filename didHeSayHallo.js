
/*
You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
Notes

you can assume the input is a string.
to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
function should be case insensitive to pass the tests

*/




function validateHello(greetings) {
  let greets = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc']
  switch (greetings.toLowerCase()){
      case 'hello': return true
      break;
       case 'ciao': return true
      break;
       case 'salut': return true
      break;
       case 'hallo': return true
      break;
       case 'hola': return true
      break;
       case 'ahoj': return true
      break;
       case 'czesc': return true
      default: for(let i =0;i<greets.length;i++){
        if(greetings.toLowerCase().includes(greets[i]) ){
          return true
        } 
      }return false
  }
}


    
  

 
 