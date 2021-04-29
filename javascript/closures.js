//closures
function makeAdder(a) {
  return function(b) {
    return a + b;
  };
}
var add5 = makeAdder(5);
var add20 = makeAdder(20);
add5(6); // ?
add20(7); // ?

/*A closure is the combination of a function and the scope object in which it was created. 
Closures let you save state — as such, they can often be used in place of objects. */

function createGreeting(greeting) { 
 return function(name) { 
   console.log(greeting + ' ' + name) 
 } 
} 
var sayHi = createGreeting('Hi') 
sayHi('Jack') // “Hi Jack” 
var sayHello = createGreeting('Hello') 
sayHello('Jack') // “Hello Jack”