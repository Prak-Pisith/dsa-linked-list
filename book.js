// Doubly Linked List
// NODE => |prev| value |next|
var BookNode = /** @class */ (function () {
    function BookNode(title, next, prev) {
        if (next === void 0) { next = null; }
        if (prev === void 0) { prev = null; }
        this.title = title;
        this.next = next;
        this.prev = prev;
    }
    return BookNode;
}());
var BookLinkedList = /** @class */ (function () {
    function BookLinkedList(head) {
        if (head === void 0) { head = null; }
        this.head = head;
    }
    BookLinkedList.prototype.addBook = function (title) {
        var newNode = new BookNode(title);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            // After found last node = current
            // point new node's prev to current node
            // point current's next to new node
            newNode.prev = current;
            current.next = newNode;
        }
    };
    BookLinkedList.prototype.removeBook = function (title) {
        var current = this.head;
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
    };
    BookLinkedList.prototype.displayForward = function () {
        console.log('=====> Reading Book Forward  <=====');
        var current = this.head;
        while (current) {
            console.log("Read book forward: ".concat(current.title));
            current = current.next;
        }
    };
    BookLinkedList.prototype.displayBackward = function () {
        console.log('=====> Reading Book Backward  <=====');
        var current = this.head;
        while (current && current.next) {
            current = current.next;
        }
        // Now current is the last node
        while (current) {
            console.log("Read book backward: ".concat(current.title));
            current = current.prev;
        }
    };
    return BookLinkedList;
}());
var myBooks = new BookLinkedList();
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
