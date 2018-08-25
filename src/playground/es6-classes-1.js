

class Person{
    constructor(name = 'Anonymous', age = 0){
        this.name = name;  
        this.age = age;      
    }

    getGrettings(){
        return `Hi, my name is ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years(s) old.`
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major         // returns false if is undefined
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }   

    //Override function fron parent
    getDescription(){
        let description = super.getDescription();

        if(this.homeLocation){
            return description += `. I´m visiting from ${this.homeLocation}.`;
        }
        return description;

    }
}

const me = new Traveler('Paulo Nova', 48, 'Frontend Developer');
console.log(me.getDescription());

const other = new Traveler();
console.log(other.getDescription());
