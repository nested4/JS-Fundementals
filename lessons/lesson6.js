//conditional Statements

/*
if(condition){
//execute the code here
} else{
//execute the code here
}
*/

// if time is btw 6 - 12 print "Good Morning"
// if time is btw 12 - 18 print "Good Afternoon"
// otherwise: "Good Evening"

var hour = 10;

if(hour >= 6 && hour <=12){
    console.log("Good Morning")
}
else if(hour > 12 && hour <=18){
    console.log("Good Afternoon")
}else{
    console.log("Good Evening")
}