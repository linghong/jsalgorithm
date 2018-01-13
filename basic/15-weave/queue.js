// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.push(record);
  }

  remove() {
  	let removed = this.data[0];
  	this.data.splice(0, 1);
    return removed;
  }

  peek(){
    return this.data[0];
  }
}

module.exports = Queue;
