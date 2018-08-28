

class Header extends React.Component{

    constructor(props){
        super(props);
        this.doSomethig = this.doSomethig.bind(this);
        this.state={
            name: 'Paulo',
            list: []
        }
    }

    doSomethig(){

    }

    render(){
        return(
            <div>
                <Footer doSomethig = {this.doSomethig}/>
            </div>
        );
    }
}


class Footer extends React.Component{

}