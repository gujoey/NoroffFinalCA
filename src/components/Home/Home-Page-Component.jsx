import React from 'react';
export default class HomepageComponent extends React.Component{
	render(){
		return(
			<div className='[ col-md-4 ]'>
					<a href={"#/character-specific/"}>

						<div>
							<h3>Name: {this.props.name}</h3>
							<img className="img-responsive" src={this.props.image} alt={this.props.name}/>
						</div>
					</a>
			</div>
		);
	}
}