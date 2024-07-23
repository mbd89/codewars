/*

Output
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

*/






function correct(string)
{
  for(let i =0; i<string.length; i++){
  if(string[i] === '5'){
  string = (string.replace(string[i], 'S'))
  }
 if(string[i] === '1'){
  string = (string.replace(string[i], ('I')))
  }
   if(string[i] === '0'){
  string = (string.replace(string[i], ('O')))
  }
//  console.log(string[i])
  }
  return string
}



