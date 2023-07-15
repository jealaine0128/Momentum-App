const player = {
    name: 'James Bond',
    codeName: 007,
    age: 32,
    address: {
    city: 'London'
    }
};

const {name, codeName, age, address: {city}} = player;

console.table({name, codeName, age, city});