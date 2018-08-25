class IndecisionApp extends React.Component{
    render(){
        const title = "Indecision";
        const subtitle = 'Put your work in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing four'];
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options = {options}/>
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
    handlePick(){
        alert('handlePick');
    }

    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What shoul I do?</button>
            </div>
        );
    }
}




class Options extends React.Component {
    handleRermoveAll(){
        alert('handleRermoveAll!');
    }
    render(){
        return (
            <div>
                <button onClick={this.handleRermoveAll}>Remove All</button>
                {
                  this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}

//Option -> Option component here

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
    handleAddOption(e){
        e.preventDefault();
            const option = e.target.elements.option.value;
            if(option){
                e.target.elements.option.value='';
                alert(option);
            }
    }


    render(){
        
        return (
            <div>
            <br></br>
            <form onSubmit={this.handleAddOption}> 
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));