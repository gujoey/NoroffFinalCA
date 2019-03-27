import React from 'react';

export default class Search extends React.Component{
	constructor(props){
		super(props);
		this.handleCharacterSearchTerm = this.handleCharacterSearchTerm.bind(this);
	}
	
	handleCharacterSearchTerm(){
		const app = this;
		let phrase = app.refs.searchTerm.value;
		app.props.onSearchTerm(phrase);
	}
	
	render(){
		const app = this;
		
		return(
			<div className='[ search ]'>
				<input 
					type="text" 
					ref="searchTerm"
					onChange={app.handleCharacterSearchTerm}
					className="form-control search__input"
					placeholder="Search for a card"
				/>
			</div>
		);
	}
} 