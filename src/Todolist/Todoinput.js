import React, { Component } from 'react';

export default class Todoinput extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list:[]
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleGetItem = this.handleGetItem.bind(this);       
    }
    render(){      
        return (
            <div style={{
                marginBottom:'20px'
            }}>
                <label style={{
                    color:this.state.n1+this.state.n2>10?'red':'green',
                    fontSize:50
                  }} htmlFor="inp">ToDoList </label>
                <input id="inputArea" className="test" value={this.state.inputValue} onChange={this.handleInput} onKeyDown={this.handleKeyDown} style={{
                  width:'300px',
                  height:'45px'
                }} autoFocus/>           
            </div>
        )
    }
    
    handleInput(e) {
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))
    }
    handleKeyDown(e) {
        if (e.keyCode === 13)
            this.handleGetItem();
    }
    handleGetItem() {    
        this.props.parent.getChildrenMsg(this, this.state.inputValue);
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: '',
        }))
    }

}

   
  