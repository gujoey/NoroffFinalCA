import React from 'react';

export default class CardSpecificComponent extends React.Component{
	render(){
		return(
			<div className='[ row ]'>
				<div className='[ col-sm-4 ]'>
					<img className='[ img-responsive ]' src={this.props.image} alt={this.props.name}/>
				</div>

				<div className='[ col-sm-8 ]'>
					<h2>{this.props.name}</h2>
					<p>About: {this.props.about}</p>
					<p>Rarity: {this.props.rarity}</p>
					<p>Color: {this.props.color}</p>
				</div>
			</div>
		);
	}
}