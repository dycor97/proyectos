//destructuring arrays
let cars = ['ferrari', 'tesla', 'cadillac'];
let [car1, car2, car3] = cars;
console.log(car1, car2, car3); // Prints: ferrari tesla cadillac

//destructuring objects
let destinations = { x: 'LA', y: 'NYC', z: 'MIA' };
let { x, y, z } = destinations;
console.log(x, y, z); // Prints LA NYC MIA

//destructuring function parameters
let truck = {
  model: '1977 Mustang convertible',
  maker: 'Ford',
  city: 'Detroit',
  year: '1977',
  convertible: true
};
 
const printCarInfo = ({model, maker, city}) => {
  console.log(`The ${model}, or ${maker}, is in the city ${city}.`);
};
 
printCarInfo(truck);
// Prints: The 1977 Mustang convertible, or Ford, is in the city Detroit.