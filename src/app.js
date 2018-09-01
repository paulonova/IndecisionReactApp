import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components//IndecisionApp'


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));


class OldSyntax {

    getGreeting = ()=> {
        return this.getGreeting.bind(this);
    }

    name = 'Micke';

    getGreeting = () => {
        return `Hi. My name is ${this.name}`;
    }
}

/**TODO:
 * Pull the state out of constructor
 * convert all 4 event handlers to class properties (arrow functions)
 * delete the constructor completely
 * start with class properties and end with method
 */


const oldSyntax = new OldSyntax();
console.log(oldSyntax);
console.log(oldSyntax.getGreeting());


// ---------------------

class NewSyntax{
    name='Jen';

    getGreeting = () => {
        return `Hi. My name is ${this.name}`;
    }
}

const newSyntax = new NewSyntax();
console.log(newSyntax);
console.log(newSyntax.getGreeting());
