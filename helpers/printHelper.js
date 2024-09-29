export function printAge(Age){
    console.log(Age)
}

//exporting a class
export class CustomerDetails {

    /**
     * This Method prints the first name of the customer
     * @param {string} firstName 
     */
    printFirstName(firstName){
        console.log(firstName)
    }
    /**
     * This Method prints the first name of the customer
     * @param {string} lastName 
     */
    printLastName(lastName){
        console.log(lastName)
    }
}

//exporting and instance
export var customerInfo = new CustomerDetails()