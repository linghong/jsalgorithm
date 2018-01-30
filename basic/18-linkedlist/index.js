// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null){
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor(){
		this.head = null;
	}

	insertFirst(data){
		this.head = new Node(data, this.head);
	}

	size(){
		let size = 0;
		while(this.head!=null){
			size++;
			this.head = this.head.next;
		}
		 return size;
	}
}

module.exports = { Node, LinkedList };
