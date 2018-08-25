class IndecisionApp extends React.Component{
    render(){
        const title = "Indecision";
        const subtitle = 'Put your work in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing four'];
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options = {options.length}/>
                <AddOption/>
            </div>
        );
    }

}


class Header extends React.Component {
    render(){         
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render(){
        return (
            <div>
                <button>What shoul I do?</button>
            </div>
        );
    }
}




class Options extends React.Component {
    render(){
        return (
            <div>
                <p>{'N. ' + this.props.options}</p>
                <Option/>
            </div>
        );
    }
}

//Option -> Option component here

class Option extends React.Component{
    render(){
        return(
            <div>
                <p>Option component here</p>
            </div>
        )
    }
}


class AddOption extends React.Component {
    render(){
        return (
            <div>
                <input type="text" placeholder="add options"></input>
                <button>Add Option</button>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));