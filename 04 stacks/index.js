const Stack = require('./Stack');

const stack = new Stack();
stack.push('David');
stack.push('Raymond');
stack.push('Bryan');

console.log('length: ' + stack.length);
console.log(stack.peek());

const popped = stack.pop();
console.log('The popped element is: ' + popped);
console.log(stack.peek());

stack.push('Cynthia');
console.log(stack.peek());

stack.clear();
console.log('length: ' + stack.length);
console.log(stack.peek());

stack.push('Clayton');
console.log(stack.peek());
