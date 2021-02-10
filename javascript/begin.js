let n1 = 'baia baia'; //a variable with the let declaration can change the value later in the program even the type and it doesn't need to be initialized
const n2 = 0; //a variable with the const declaration can't change his value and need to be initialized 
console.log(`new form of outputing information with literal templates and String interpolation, ${n1}`);

// Declaration of the constant kelvin which store the temperature in kelving degrees
const kelvin = 200;

//Declaration of the variable celsius which store the convertion to celsius degrees from kelvin
let celsius = kelvin - 273;

//Declaration of the variable fahrenheit which store the convertion to fahrenheit degrees from celsius
let fahrenheit = Math.floor( (celsius * (9/5)) + 32);

let newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${newton} degrees Newton.`);

// let falsy 0, "", '', NaN, null, undefine -> if(falsy) === false
// let truthy other values -> if(truthy) === true

//Helper Functions
function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns){
    return monitorCount(rows, columns) * 200;
  }
  
  const totalCost = costOfMonitors(5,4);
  
  console.log(totalCost);

  /*concise functions

  const sumNumbers = number => {
    const sum = number + number;
    return number;
  };
  
  ===
  
  const sumNumbers = num => num + num;
  */


