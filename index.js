// Object - wire

let wire = {
    color: "red",
    gauge: 5
};


// Dot Notation - wire.color

let wire = {
    color: "red",
    gauge: 5
  };
console.log(wire.color);


// Method - sayColor

let wire = {
    color: "red",
    gauge: 5,
    sayColor: function() {return "The wire color is " + wire.color + ".";}
}
  wire.sayColor();


//   Reuseable Keyword - this

let wire = {
    color: "red",
    gauge: 5,
    sayColor: function() {return "The wire color is " + this.color + ".";}
};


// Constructor Function - Cars

function Cars() {
    this.name = "Mustang";
    this.year = 2018;
    this.color = "white";
};


// Constructor Creating Objects - chevyCars

function Cars() {
    this.name = "Mustang";
    this.year = 2018;
    this.color = "white";
    }
let chevyCars = new Cars();


// Extend Constructors to Receive Arguments -

function Cars(name, year, color) {
    this.name = name;
    this.year = year;
    this.color = color;
    
  }
  let chevy = new Cars("Mustang", 2018, "white");


// instanceof -  return true

function Cars(name, year, color) {
    this.name = name;
    this.year = year;
    this.color = color;
    
  }
  let chevy = new Cars("Mustang", 2018, "white");


  chevy instanceof Cars;


// 
function Cars(name) {
    this.name = name;
    this.year = year;
    this.color = color;
    
  }
  let chevy = new Cars("Mustang");
  let honda = new Cars("Civic");

let ownProps = [];

for (let property in honda) {
  if(honda.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);


// Prototype Properties to Reduce Duplicate Code

Cars.prototype.numWheels = 4;

console.log(chevy.numLegs);
console.log(honda.numLegs);