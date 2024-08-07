function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
//sayMyName()

function addTwoNumbers(number1,number2){
    //console.log(number1+number2);
}
addTwoNumbers(3,4)

/******************************************** */

function addTwoNumbers(number1, number2){
    return number1+number2
}
const result = addTwoNumbers(3,5)
//console.log(result);

////**************************************** */

function myFunction(a, b){
    return a/b;
}
const value= myFunction(8,4);
   //console.log(value);

///******************************************* */

function multiply(b,c){
    return b * c;
}
const output = multiply(5,2);
//console.log(output);





function loginUserMessage(username){
    return '${username} just logged in'
}

//console.log(loginUserMessage("hitesh"))


//*************REST OPERATOR */

function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200, 300, 400))




