//logical "AND"
//all values have to be true for expression to be true

console.log(true && false)

//logical "OR"
//all values have to be false for expression to be false
console.log(true || false)

var isAgeMoreThanEighteen = true
var isUSCitizen = true

var eligibilityForDricerLicense = isAgeMoreThanEighteen && isUSCitizen

console.log('This customer is eligible for Driving Licence: '+eligibilityForDricerLicense)

//Logical "NOT"
console.log(!true)
console.log(!false)

console.log(6 !== 7)