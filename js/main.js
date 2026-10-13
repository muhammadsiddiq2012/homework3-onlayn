let student = {
  firstName: "bir qosim shox",
  lastName: "sakrab sanchaarov",
  age: 19,
  course: 2,
  isGrant: true,
  subjects: ["Matematika", "Fizika", "JavaScript", "Ingliz tili"],
  phone: null
};

console.log(student);

console.log(student.firstName);
console.log(student.age);
console.log(student.isGrant);
console.log(student.subjects);

console.log(typeof student.firstName);
console.log(typeof student.age);
console.log(typeof student.isGrant);
console.log(typeof student.subjects);

console.log(student.subjects[0]);
console.log(student.subjects[1]);
console.log(student.subjects[student.subjects.length - 1]);

let email;
console.log(email);
console.log(typeof email);
let product = {
  name: "iPhone 15 Pro",
  brand: "Apple",
  price: 1200,
  quantity: 15,
  isAvailable: true,
  colors: ["qora", "oq", "ko'k"],
  description: null
};

console.log(product);

console.log(product.name);
console.log(product.price);
console.log(product.isAvailable);
console.log(product.colors);

console.log(product.colors[0]);
console.log(product.colors[1]);
console.log(product.colors[product.colors.length - 1]);

console.log(typeof product.name);
console.log(typeof product.price);
console.log(typeof product.isAvailable);
console.log(typeof product.colors);
console.log(typeof product.description);

let currentPrice = product.price;
console.log(currentPrice);
console.log(typeof currentPrice);