import React from 'react';

export default class HomepageComponent extends React.Component{
	constructor(props){
		super(props);
		this.handleCardSpecificTerm = this.handleCardSpecificTerm.bind(this);
	}
	
	handleCardSpecificTerm(){
		const app = this;
		let id = app.props.id;
		
		app.props.redirectCardSpecific(id);
	}
	
	render(){
		return(
			<div className='[ col-md-4 d-flex flex-column ]'>
				<div className='[ column d-flex flex-column ]'>
					<h1 className="[ column__header ]">{this.props.name}</h1>
					<img className="[ column__image ]" src={this.props.image} alt={this.props.name}/><br/>
					<button className="[ column__button align-self-end ]" type="button" onClick={this.handleCardSpecificTerm}>More Info</button>
				</div>
			</div>
		);
	}
}