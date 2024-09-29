// Declarative function
//can be called anywhere in the code even before declaration

helloOne()
function helloOne(){
    console.log('Hello One!')
}

helloOne()

console.log();



//Anonymous Functions, does not have a name thats why anonymous
//can not be called before declaration
// helloTwo()

var helloTwo = function(){
    console.log('Hello Two!!')
}
helloTwo()

//ES6 function sysntax or arrow function
var helloThree = ()=>{
console.log('Hello Three!!!')
}
helloThree()

//Function with arguments
function printName(name, lastName){
    console.log(name+' '+lastName)
}

printName('Recep', 'ivedik')
printName('Recep')

//Function with return
function multiplyByTwo(number){
    return number*2
}
console.log(multiplyByTwo(15))

//import function
// import {printAge} from '../helpers/printHelper.js'
// printAge(42)

//import everything
import *  as helper from '../helpers/printHelper.js'
helper.printAge("ihsan")
helper.printAge(42)