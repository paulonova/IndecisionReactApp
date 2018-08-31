import React from 'react';

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
        console.log('testing');
        
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

export default AddOption;