let value1 = 'one';
let value2 = 'two';


console.log('Chưa đổi', value1);
console.log('Chưa đổi', value2);


let tempt = value1;
value1 = value2;
value2 = tempt
;

console.log('đổi', value1);
console.log('đổi', value2);