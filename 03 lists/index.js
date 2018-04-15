const List = require('./List');

const list = new List();
list.append(1).append(2).append(3);

console.log(list.length, list.toString())

for(list.front(); list.currPos < list.length; list.next()) {
  console.log(list.getElement())
}

for(list.end(); list.currPos >= 0; list.prev()) {
  console.log(list.getElement())
}
