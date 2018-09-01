import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component{

    state = {
        options: [],
        selectedOption: undefined
    }

    handleModalClose = () =>{
        this.setState(() => ({selectedOption: undefined}));
    }

    handleDeleteOptions = () => {
        return this.setState(() => ({options: []}));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState)=> ({
            options: prevState.options.filter((option) => { 
                return optionToRemove !== option ;
            })
        }))
    }

    handleAddOptions = (option) => {
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exist!';
        };

        this.setState((prevState) => ({options: prevState.options.concat(option)}));                
    }

    handlePick = () => {
        const randNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNumber];
        this.setState(() => ({selectedOption: option}));
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
                <OptionModal 
                selectedOption = {this.state.selectedOption}
                handleModalClose = {this.handleModalClose}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp;