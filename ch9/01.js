function PersonType(name) {
  this.name = name;
}

PersonType.prototype.sayName = function () {
  console.log(this.name);
};

var person = new PersonType("Nicholas");
person.sayName(); // outputs "Nicholas"

console.log(person instanceof PersonType); // true
console.log(person instanceof Object);
