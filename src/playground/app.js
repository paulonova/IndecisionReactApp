
class IndecisionApp extends React.Component{

    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }

    

    /***************************************************
     * REACT COMPONENT LIFECYCLE METHODS****************/
    
    componentDidMount(){

        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({options : options}));
            }  
        } catch (e) {
            //Do nothing..
        }


              
    }

    //shows just when the props is updated..
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');
        }
          
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');        
    }    
    
     
    handleDeleteOptions(){
        this.setState(() => ({options: []}));
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState)=> ({
            options: prevState.options.filter((option) => { 
                return optionToRemove !== option ;
            })
        }))
        
    }

    handlePick(){
        const randNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNumber];
        alert(option);
    }
    
    handleAddOptions(option){
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exist!';
        };

        this.setState((prevState) => ({options: prevState.options.concat(option)}));
                
    }

    render(){
        const subtitle = 'Put your work in the hands of a computer';

        return(
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                  hasOptions={this.state.options.length > 0}
                  handlePick = {this.handlePick}/>
                <Options 
                  options = {this.state.options}
                  handleDeleteOptions = {this.handleDeleteOptions}
                  handleDeleteOption = {this.handleDeleteOption}/>
                <AddOption 
                  handleAddOptions = {this.handleAddOptions}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

// Stateless functional component
const Header = (props)=> {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}


const Action = (props) => {
    return (
        <div>
            <button 
              onClick={props.handlePick}
              disabled={!props.hasOptions}>
              What shoul I do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {props.options.map((option) => (
                <Option 
                  key={option} optionText={option}
                  handleDeleteOption={props.handleDeleteOption}/>
            ))
            }
        </div>
    );
}

const Option = (props) => {
    return(
        <div>
            * {props.optionText}<button onClick={(e) =>{
                props.handleDeleteOption(props.optionText)}}>
                Remove</button>
        </div>
    )
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
        const error = this.props.handleAddOptions(option);

        this.setState(() => ({error: error}));
        if(!error){
            e.target.elements.option.value = '';
        }

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