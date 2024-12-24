/* 
make NEgative

*/

function makeNegative(num) {
    let x;
    if(num === 0)
    {
    return num
    } else if(num<0){
    return num
    } else{
       x = (num.toString());
     x = (('-') + x)
     x = Number(x)
    return (x)
    }
    }
    


