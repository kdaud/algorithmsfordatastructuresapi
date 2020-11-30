var myMap = new Map();
myMap.set(1, 'Security');
myMap.set(2, 'Linux');
myMap.set(3, 'Repair');
myMap.set(4, 'Operating System')

// console.log(myMap);
// console.log('***************');
// console.log(myMap.get(4,2));

// for (let key of myMap.keys()) {
//     console.log(`${key}`);
// }

// for (let values of myMap.values()) {
//     console.log(`Values is ${values}`);
// }

// for (let [K, B] of myMap) {
//     console.log(`Key is ${K} and Value is ${B}`);
// };

// myMap.forEach([key] => console.log(`${key}`));

myMap.forEach((L, M) => { console.log(`${L} and the Key is ${M}`);
    
});