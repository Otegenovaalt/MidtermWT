import React, { Component } from 'react';

class navigList extends Component {
    constructor(){
        super()

        this.state = {
            button: false
        }
    }

    btnClicked = () => {
        this.setState({
            button: !this.state.button
        })
    }

    render(){
        
        if(this.state.button){
            return(
                <button className='btn1' onClick={this.btnClicked}> {this.props.name} </button>
                )
        }else{
            return(
                <button className='btn2' onClick={this.btnClicked}> {this.props.name} </button>
              )
        }
    }
  }

export default navigList;