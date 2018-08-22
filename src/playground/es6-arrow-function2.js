// Arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);    
    return a + b;
}

console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Paulo',
    cities: ['Stockholm', 'Malmö', 'Skåne'],
    // printPlacesLived: function(){
    printPlacesLived(){
        return this.cities.map((city) =>  this.name + ' has lived in ' + city);

        // this.cities.forEach( (city) => {
        //     console.log(this.name + ' has lived in ' + city);
            
        // });
    
    }
};

// console.log(user.printPlacesLived());

//Challange!

const multiplier = {
    numbers: [2, 6, 9],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}
 
console.log(multiplier.multiply());

