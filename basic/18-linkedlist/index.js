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

	insertLast(data){
		let node = this.head;
		while(node.next){
			node = node.next;
		}
		
		let newNode = new Node(data, null);
		node.next = newNode;
	}

	size(){
		let size = 0;
		let node =this.head;
		while(node!=null){
			size++;
			node = node.next;
		}
		 return size;
	}

	getFirst(){
		return this.head;
	}

	getLast(){
		let node = this.head;
		while(node.next!=null){
			node = node.next;
		}
		return node;
	}

	clear(){
		this.head = null;
	}

	removeFirst(){
		if(!this.head){
			return;
		}
		this.head = this.head.next;
	}

	removeLast(){
		if(!this.head){
			return;
		}
		if(this.head.next == null){
			this.head = null;
		} else{
			let node = this.head;
			while(node.next.next!=null){
				node = node.next;
			}
			node.next = null;
		}	
	}
}

module.exports = { Node, LinkedList };
