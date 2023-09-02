// Singly Linked List

// Node = Element
// Element (value, nextNode)
class AnimalNode {
  constructor(public name: string, public next: AnimalNode | null = null) {}
}

class AnimalList {

  constructor(public head: AnimalNode | null = null) {}

  // Add Node
  addAnimal(animal: string) {
    const newNode = new AnimalNode(animal);

    if (!this.head) {
      // If no head, mean it the first element
      // so make it head
      this.head = newNode;
    } else {
      // If head already exists
      // Need to find the last element
      // Count start from head, so current = head
      let current = this.head;
      while (current.next) {
        // Change current util last node
        // Last node must no Next
        current = current.next;
      }
      // After found last node
      // Set last node's next = new node and new node's next is null
      current.next = newNode;
    }
  }

  // Remove Node
  removeAnimal(targetAnimal: string) {
    let current = this.head;
    let previous: AnimalNode | null = null;

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
      } else {
        // if no previous node, mean target is head
        // Set head to next node;
        this.head = current.next;
      }
    }
  }

  // Display Node List
  display() {
    let current = this.head;
    console.log('=====> Animal List <=====')
    while (current) {
      console.log(`This is ${current.name}`);
      current = current.next;
    }
  }
}

const myAnimals = new AnimalList(); // Linked List of Animals
myAnimals.addAnimal('Lion');
myAnimals.addAnimal('Elephant');
myAnimals.addAnimal('Tiger');

myAnimals.display();

myAnimals.removeAnimal('Elephant');

myAnimals.display();

