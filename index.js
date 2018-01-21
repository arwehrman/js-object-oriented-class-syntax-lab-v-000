class BoardMember {
  constructor(name, homestate, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
