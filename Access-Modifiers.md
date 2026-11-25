Title :

Access Modifiers in TypeScript OOP

Introduction :

Access modifiers in TypeScript control the accessibility properties and methods of a class. For some modifiers the sub-class got the access of parent class's property automatically and some times it does not.

Detailed Body :

1.Public Modifier

The public modifier allows properties and methods accessable from anywhere. It is the default access modifier in TypeScript means we can access it very easyly.


class Person {
  public name = "Rahim"
}

const person = new Person()
console.log(person.name) -----> here Rahim will be consoled


2.Private Modifier

The private modifier allows us to access any property only within the class where it is declared. It prevents external code from directly accessing or modifying the property.


class Person {
  private name = "Rahim"
}

const person = new Person()
console.log(person.name) -----> here Rahim will not be consoled


3.Protected Modifier

The protected modifier allows access within the declaring class and its subclasses, but not from outside this two type of classes.


class Animal {
  protected sound = "berking"
}

class Dog extends Animal {
  showSound() {
    return this.sound
  } ------> here the property name sound from Animal class is accessable fron it's subclass Dog.
}


Readonly Modifier

The readonly modifier prevents a property from being reassigned after initialization. It is useful for values that has no need to be changed.


class Student {
  readonly id = 101
}

const student = new Student()
student.id = 202  -----> here 101 will never be change to 202. Because it is readonly.


Conclusion :

Access modifiers help make TypeScript applications more secure and organized. public -- allows access from anywhere, private -- restricts access to the declaring class, protected -- allows access to subclasses, and readonly -- prevents reassignment. They are important for implementing OOP in exact manner.