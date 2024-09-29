export function printAge(Age){
    console.log(Age)
}

//exporting a class we need to export this class to be visible
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

//exporting an instance instead of exporting class
export var customerInfo = new CustomerDetails()