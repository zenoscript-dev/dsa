class Node {
    constructor(data) {
        this.head = data;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }
}


// insert at the beginning of linkedlist 
LinkedList.prototype.insertAtBeginning = function (data) {
    const newNode = new Node(data);
    if (!this.head) {
        this.head = newNode;
    }
}

// insert at end of linkedlist.
LinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data);
    let last = this.head;

    while (last.next) {
        last = this.next;
    }

    this.next = newNode;
}
