//objects

var customer = {
    firstName: 'John',
    lastName: 'Smith',
    'cars': ["Volvo","Toyota","Tesla"]
}

console.log(customer)
console.log(customer.firstName)
console.log(customer.lastName)

//Dot notation
customer.firstName = "Mike"

//Bracket Notation
customer['lastName'] = "Tyson"
console.log(`${customer.firstName} ${customer['lastName']}`)
console.log(`${customer['cars'][2]}`);


//arrays

var car = ["Volvo","Toyota","Tesla"]
console.log(car)

car[1]="BMW"
console.log(car)
console.log(customer.cars[0])

car.push('Mercedes');
console.log(car);

car.shift();
car.shift();
console.log(car);

car.unshift('TOGG')
console.log(car);

console.log(car.pop())
console.log(car);

