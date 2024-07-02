
// first step is to create a node
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        // first element of the linkied list is called as head of the linked list
        // last value of the linkied list is called as tail of the linked list
        // while creation of linked list by default the head will be pointing to null.
        this.head = null;

    }
}


// insert at the beginning of the linked list
LinkedList.prototype.insertAtDeginning = function (data) {
    const newNode = new Node(data);
    this.head = newNode;
}


// inserting at the end of the linked list.
LinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data);
    if (!this.head) {
        this.head = newNode;
        return;
    }

    // assume head is last.
    let last = this.head;
    while (last.next) { //keep dehcking if the next value of the adcent element is null ot not.
        last = last.next; //if next is null that means it will insert in that p[position]
    }

    // verify if head is last?
    last.next = newNode

}


