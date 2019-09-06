// Ex 1 and 2 Function Declaration
function add(n1, n2){
   return n1 +n2;
};

//Function Expression
var sub = function(n1,n2){
  return n1 - n2
};

//Ex 4 Function with multiply


//Ex 3 Callback with Error Handling
try {
    var cb = function (n1, n2, callback) {
        if (
            typeof n1 === "number", //Will fail if n1 is undefined, or is not a number
            typeof n2 === "number", //Will fail if n2 is undefined, or is not a number
            typeof callback === "function" //Will fail if callback is undefined or is not a function
        ) {
            return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
        } else {
            return console.log("cb failed, arguments do not match")
        }
    };

} catch (e) {
    console.log("cb failed, cause: " + e.log);
}

console.log( add(1,2) )     	// This will print 3
console.log( add )          	// This will print the function add as a value
console.log( add(1,2,3) ) ; 	// This will print 3
console.log( add(1) );	  		// This will print NaN because input 2 is not a number 	
console.log( cb(3,3,add) ); 	// This will print Result from the two numbers: 3+3=6
console.log( cb(4,3,sub) ); 	// This will print Result from the two numbers: 4+3=1
console.log(cb(3,3,add())); 	// This will print cb failed, arguments do not match 
console.log(cb(3,"hh",add));	// This will print Result from the two numbers: 3+hh=3hh
