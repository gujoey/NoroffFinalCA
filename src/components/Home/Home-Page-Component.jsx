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
			<div className='[ col-md-4 pb-4 ]'>
				<div className='[ column ]'>
					<h3>Name: {this.props.name}</h3>
					<img className="img-responsive" src={this.props.image} alt={this.props.name}/><br/>
					<button type="button" onClick={this.handleCardSpecificTerm}>More Info</button>
				</div>
			</div>
		);
	}
}