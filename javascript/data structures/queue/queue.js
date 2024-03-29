const LinkedList = require('../lists/linkedList.js');

class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }

  hasRoom() {
    if(this.size < this.maxSize){
      return true;
    } 
    return false;
    
  }

  isEmpty() {
    if(this.size === 0) {
      return true;
    }
    return false;
  }

  enqueue(data) {
    if(!this.hasRoom()){
        throw Error('The Queue is full!');
    }
    this.queue.addToTail(data);
    this.size++;
    console.log(`Added ${data} to queue! Queue size is now ${this.size}.`);
  }

  dequeue() {
    if(this.isEmpty()){
        throw Error('The Queue is empty!');
    }
    const data = this.queue.removeHead();
    this.size--;
    console.log(`Removed ${data}! Queue size is ${this.size}.`);
    return data;
  }
}

module.exports = Queue;

const restaurantOrder = new Queue();
restaurantOrder.enqueue('apple pie');
restaurantOrder.enqueue('roast chicken');
restaurantOrder.enqueue('quinoa salad');
console.log('\nFood preparing...\n')
restaurantOrder.dequeue();
restaurantOrder.dequeue();
restaurantOrder.dequeue();
console.log('All orders ready!')