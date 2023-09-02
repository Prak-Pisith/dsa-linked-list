// Doubly Linked List
// NODE => |prev| value |next|

class BookNode {
  constructor(
    public title: string,
    public next: BookNode | null = null,
    public prev: BookNode | null = null
  ) { }
}

class BookLinkedList {

  constructor(public head: BookNode | null = null) {}

  addBook(title: string) {
    const newNode = new BookNode(title);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      // After found last node = current
      // point new node's prev to current node
      // point current's next to new node
      newNode.prev = current;
      current.next = newNode;
    }
  }

  removeBook(title: string) {
    let current = this.head;

    // Find the node with the target book title
    while (current && current.title !== title) {
      current = current.next;
    }

    // If Book is found
    if (current) {
      // Update the next node's prev pointer
      if (current.next) {
        current.next.prev = current.prev;
      }
      // Update the previous node's next pointer
      if (current.prev) {
        current.prev.next = current.next;
      }
      // IF target node is the head of the list, update the head
      if (current === this.head) {
        this.head = current.next;
      }
    }

  }

  displayForward() {
    console.log('=====> Reading Book Forward  <=====');
    let current = this.head;
    while (current) {
      console.log(`Read book forward: ${current.title}`);
      current = current.next;
    }
  }

  displayBackward() {
    console.log('=====> Reading Book Backward  <=====');
    let current = this.head;
    while (current && current.next) {
      current = current.next;
    }
    // Now current is the last node
    while (current) {
      console.log(`Read book backward: ${current.title}`);
      current = current.prev;
    }
  }

}

const myBooks = new BookLinkedList();
// Add Books
myBooks.addBook('Dragon Balls');
myBooks.addBook('One Piece');
myBooks.addBook('Naruto');

myBooks.displayForward();
myBooks.displayBackward();

// Remove
myBooks.removeBook('One Piece');

myBooks.displayForward();
myBooks.displayBackward();