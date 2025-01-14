/* eslint-disable require-jsdoc */
/*Write a function, myCallback( func, arg). myCallback will call func with the given arg and then log the return value to the console.
Test myCallback by calling it with a function that takes a number and returns the cube of the argument.  First write it as "cube" a normal named function declaration, then as an anonymous function expression.
Also test with a function that returns true if the arg is an even number
*/

function myCallback(func, arg){

    //const ret = func(arg);
    console.log(func(arg));

}

function cube(num){ return num * num * num;}
function isEven(num) { return num % 2 === 0;}

myCallback(cube, 10); // 1000

myCallback(isEven, 10); // true 

const prime=[1,2,3];
let i=0;
while(i<prime.length){
    console.log(prime[i]);
    i++;
}
// console.log("square function call: ",square);//Reftrence error can nor access square before initialization

const square=function(n){
    return n*n;
}
console.log("square function call: ",square);//[Function: square]
console.log("square function call: ",square(25));
