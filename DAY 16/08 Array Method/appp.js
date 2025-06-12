let marks=[29,49,48,76,54];
console.log(marks.indexOf(49));
console.log(marks.indexOf(19));

console.log(marks.includes(34));
console.log(marks.includes(48));

let marks2=[34,87,90,76,45];
let marks3= marks.concat(marks2);
console.log(marks3);

console.log(marks3.reverse());

console.log(marks3.slice(3));

console.log(marks3.slice(3,7));
console.log(marks3.slice(-3));
let marks4=[39,45,98,67,54];
console.log(marks4.splice(4));
console.log(marks4);
console.log(marks4.splice(0,2,32,67));
console.log(marks4);
marks.sort();
console.log(marks);
