class Person {
  constructor(name ='Anon', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi! My name is ${this.name}`
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major){
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;      
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, home) {
    super(name, age);
    this.home = home;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if(this.home){
      greeting += ` I am visiting from ${this.home}!`
    } 
    return greeting;
  }
}

const me = new Student('Peva Jee', 31, 'History');
console.log(me.getDescription())
const other = new Traveler();
console.log(other.getGreeting())

const voyage = new Traveler('Julle Jelli',  31, 'Phuket');
console.log(voyage.getGreeting());