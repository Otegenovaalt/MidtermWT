import React, { Component } from 'react';
import './navig.css';
import NavigList from './NavigList';


class Navig extends Component{
	constructor(props){
		super(props);

		this.state = {
			items: ["Home", "About", "Contact"]
		}
	}


	render(){
			return(
				
				<div className='buttons'>
				<h1 className='hh'>My Navigation Menu</h1>
				{
					this.state.items.map((item, index) => 
						{
							return <NavigList key={index} name={item}/>	
						}														
					)
				}
				</div>
			);
		}
	}

export default Navig;

