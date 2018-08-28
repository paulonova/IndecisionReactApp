
class IndecisionApp extends React.Component{

    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.state = {
            options: []
        };
    }

    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handlePick(){
        this.setState(() => {
            const randNumber = Math.floor(Math.random() * this.state.options.length);
            const option = this.state.options[randNumber];
            return alert(option);            
        });
    }
    
    handleAddOptions(option){
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exist!';
        };

        this.setState((prevState) => {
            return{
                options: prevState.options.concat(option)
            };
        });
        
    }

    render(){
        const title = "Indecision";
        const subtitle = 'Put your work in the hands of a computer';

        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                  hasOptions={this.state.options.length > 0}
                  handlePick = {this.handlePick}/>
                <Options 
                  options = {this.state.options}
                  handleDeleteOptions = {this.handleDeleteOptions}/>
                <AddOption 
                  handleAddOptions = {this.handleAddOptions}/>
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
                <button 
                  onClick={this.props.handlePick}
                  disabled={!this.props.hasOptions}>
                  What shoul I do?
                </button>
            </div>
        );
    }
}


class Options extends React.Component {

    render(){
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                  this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}


class Option extends React.Component{
    render(){
        return(
            <div>
                Option: {this.props.optionText}
            </div>
        )
    }
}


class AddOption extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOptionComponent = this.handleAddOptionComponent.bind(this);
        this.state={
            error: undefined
        }
    }

    handleAddOptionComponent(e) {
        e.preventDefault();
        const option = (e.target.elements.option.value).trim();
        e.target.elements.option.value = '';
        const error = this.props.handleAddOptions(option);

        this.setState(() => {
            return {
                error: error
            }
        });        
    }

    render(){        
        return (
            <div>
            <br></br>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOptionComponent}> 
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));