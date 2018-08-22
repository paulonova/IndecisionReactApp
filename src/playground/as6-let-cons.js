
var nameVar = 'PAulo';
var nameVar = 'Pedro';

console.log('nameVar:', nameVar);

let nameLet = 'Jen';
nameLet = 'Jen';
console.log('nameLet', nameLet);


const nameConst = 'Frank';
console.log('nameConst', nameConst);


//Block scoping

const fullName = 'Paulo Nova';
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);    
}

console.log(firstName); 