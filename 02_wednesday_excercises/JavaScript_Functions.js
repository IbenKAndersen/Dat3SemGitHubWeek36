//Exercises for: JavaScript Functions and Callbacks

// Ex 1 Create a new JavaScript file and add these three functions
function add(n1, n2){
	return n1 + n2;
};

var sub = function(n1,n2){
	return n1 - n2
};

//Ex 3 Callback function expression after rewrite with error handling
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

//Ex 4 Write a mul function and use it as the callback for the cb function
var mul = function(n1,n2){
	return n1 * n2;
};
console.log( cb(2,4,mul));		// This will print Result from the two numbers: 2+4=8

//Ex 5 Call cb with an anonymous function that divides the first argument with the second
var div = function(n1,n2){
	return n1 / n2;
};
console.log( cb(8,2,div));		//This will print Result from the two numbers: 8+2=4

//Ex 2 Call the functions from Ex 1
console.log( add(1,2) )     	// This will print 3
console.log( add )          	// This will print the function add as a value
console.log( add(1,2,3) ) ; 	// This will print 3
console.log( add(1) );	  		// This will print NaN because input 2 is not a number 	
console.log( cb(3,3,add) ); 	// This will print Result from the two numbers: 3+3=6
console.log( cb(4,3,sub) ); 	// This will print Result from the two numbers: 4+3=1
console.log(cb(3,3,add())); 	// This will print cb failed, arguments do not match 
console.log(cb(3,"hh",add));	// This will print Result from the two numbers: 3+hh=3hh


//Exercises for: Callbacks (with map, filter and forEach)

//Ex 1 Declare a JavaScript array and initialize it with some names 
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
var names2 = names.filter(name => name.length <= 3);
console.log(names2);

//Ex 2 Create a new array with all names uppercased.
var upper = names.map(name => name.toUpperCase());
console.log(upper);

//Ex 3 Create a function that returns a string with the HTML for the names in an <ul>.
var html = names.map(name => "<li>" + name + "</li>");
html.join("");
html.unshift("<ul>");
html.push("</ul>");
console.log(html);

//Ex 4 JavaScript Array
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

//Ex 4 Use the filter function to get arrays with only cars newer than 1999
var cars99 = cars.filter(car => car.year > 1999);
console.log(cars99);

//Ex 4 Use the filter function to get arrays with only Volvo
var carVolvo = cars.filter(car => car.make == "Volvo");
console.log(carVolvo);

//Ex 4 Use the filter function to get arrays with only cars with a price below 5000
var car5000 = cars.filter(car => car.price < 5000);
console.log(car5000);

//Ex 4a Implement a function that will return a string with valid SQL statements
var sql = cars.map(sql => "INSERT INTO cars (id,year,make,model,price) VALUES ("
+ sql.id + "," + sql.year + ",'" + sql.make + "','" + sql.model + "','" + sql.price +"');");
console.log(sql);


//Exercises for: Asynchronous Callbacks

//Ex 1 In what order you would expect to see the outputs? A, D, F, E, B (the order was correct)
var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");


//Exercises for: this and constructor functions 

//Ex 1 Add this code and explain
/*function Person(name){
  this.name = name;
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+this.name);  //The local variable name is only available inside the function
  },2000);
}
//call it like this (do it, even if you know it’s silly ;-)
Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: "+ name);  //It says undefined because the local variable is called from outside*/

//Ex 2 Create a Person instance, rerun and explain
var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
console.log("I'm global: "+ name);  //The variable is now global and is available from outside a function

//Ex 3 Change your code to fix the problems
function Person(name){
  this.name = name;
  var self = this;
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+self.name);
  },bind(this),2000);
}

//Ex 4 Write and understand
var greeter = function(){
  console.log(this.message);
};
var comp1 = { message: "Hello World" };
var comp2 = { message: "Hi" };

var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2 );//And here another “this”
setTimeout(g1,500);
setTimeout(g2,1000);


//Exercises for: JavaScript Objects

//Ex 1 Create an object with four different properties
function Person(name, birthday, hobby, email) {
	this.name = name;
	this.birthday = birthday;
	this.hobby = hobby;
	this.email = email;
}	





