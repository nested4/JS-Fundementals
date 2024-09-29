//loops
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")
console.log("Hello World")

// for(intial statement;condition; increment-decrement){

// }

for(let i=0; i<5;i++){
    console.log("Hello World Loop")
}

var cars = ["Volvo","Toyota","Tesla"]

// for of Loop
for(let car of cars){
    console.log(car)
}

for(let car of cars){
    console.log(car)
    if(car=="Toyota")
        {
            break
        }
}

console.log();
//ES6 syntax

cars.forEach(car =>{
    console.log(car)
})