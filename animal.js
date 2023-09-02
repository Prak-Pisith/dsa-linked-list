// Singly Linked List
// Node = Element
// Element (value, nextNode)
var AnimalNode = /** @class */ (function () {
    function AnimalNode(name, next) {
        if (next === void 0) { next = null; }
        this.name = name;
        this.next = next;
    }
    return AnimalNode;
}());
var AnimalList = /** @class */ (function () {
    function AnimalList(head) {
        if (head === void 0) { head = null; }
        this.head = head;
    }
    // Add Node
    AnimalList.prototype.addAnimal = function (animal) {
        var newNode = new AnimalNode(animal);
        if (!this.head) {
            // If no head, mean it the first element
            // so make it head
            this.head = newNode;
        }
        else {
            // If head already exists
            // Need to find the last element
            // Count start from head, so current = head
            var current = this.head;
            while (current.next) {
                // Change current util last node
                // Last node must no Next
                current = current.next;
            }
            // After found last node
            // Set last node's next = new node and new node's next is null
            current.next = newNode;
        }
    };
    // Remove Node
    AnimalList.prototype.removeAnimal = function (targetAnimal) {
        var current = this.head;
        var previous = null;
        // Traverse the Linked List to find target, from head (current)
        while (current != null && current.name !== targetAnimal) {
            previous = current;
            current = current.next;
        }
        // If target animal is not found
        if (current !== null) {
            // Update the next pointer of previous node to skip target node
            if (previous !== null) {
                previous.next = current.next;
            }
            else {
                // if no previous node, mean target is head
                // Set head to next node;
                this.head = current.next;
            }
        }
    };
    // Display Node List
    AnimalList.prototype.display = function () {
        var current = this.head;
        console.log('=====> Animal List <=====');
        while (current) {
            console.log("This is ".concat(current.name));
            current = current.next;
        }
    };
    return AnimalList;
}());
var myAnimals = new AnimalList(); // Linked List of Animals
myAnimals.addAnimal('Lion');
myAnimals.addAnimal('Elephant');
myAnimals.addAnimal('Tiger');
myAnimals.display();
myAnimals.removeAnimal('Elephant');
myAnimals.display();
// const displayAnimals = (list: AnimalList) => {
//   let current = list.head;
//   while(current) {
//     console.log(`This is ${current.name}`);
//     current = current.next;
//   }
// }
// displayAnimals(myAnimals);
