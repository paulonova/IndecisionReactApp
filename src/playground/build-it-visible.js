
class BuildItVisible extends React.Component{
    
    constructor(props){
        super(props);
        this.handleToggleVisible = this.handleToggleVisible.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisible(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        })
    }

    render(){        

        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisible}>
                {this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are some details you can now see!</p>
                    </div>
                    )}
            </div>
        );
    }
} 

ReactDOM.render(<BuildItVisible/>, document.getElementById("app"));


