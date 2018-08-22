
// function square(x){
//     return x * x;
// }
// console.log(square(8));


// const squareArrow = (x) => {
//     return x * x;
// }
// console.log(squareArrow(9));


// const additionArrow = (x) => x + x;  // if we have a single expression..
// console.log(additionArrow(250));


// Use arrow function
let name = 'Mike Smith';
const getFirstName = (fullname) => {
    return fullname.split(' ')[0];
}
console.log(getFirstName(name));

const getTheName = (firstName) => firstName.split(' ')[0];
console.log(getTheName(name));
