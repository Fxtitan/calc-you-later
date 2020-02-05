/******************
 * YOUR CODE HERE *
 ******************/
function calculate(num1,num2,op){
  num1 = Number(num1)
  num2 = Number(num2)
  if (op === '+' || (op === 'added to')) { 
    return Number(num1) + Number(num2);
  }
   if (op === '-'|| (op === 'subtracted from')) {
    return num1 - num2; }

    if (op === 'x' || op === 'multiplied by' || (op === 'times') || (op === 'X')) {
      return num2 * num1;
    }

    if (op === '/' || op === 'divided by') {
      return num1 / num2;
    }
    if (op === '%' || (op === 'modulus') || (op === 'mod')) {
      return num1 % num2;
    }
    
   if (op === 'plus' || (op === '+')) {
    return num1 + num2;
   }
   if (op === '-' || (op === 'minus')) {
     return num1 - num2
   }
   return "Sorry, that's not a mathematical operation!"
   
    }

    //else if {
      //return "Sorry, that's not a mathematical operation!"
    
    


  //}
  

    
    



 

/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;