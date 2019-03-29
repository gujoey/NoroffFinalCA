import React from 'react';

export default class CardSpecificComponent extends React.Component{
	render(){
		return(
			<div className="[ cardSpecificComponent ]">
				<div className="[ cardSpecificComponent__container ]">
					<div className="[ row ]">
						<div className="[ col-md-12 ]">
							<div className="cardSpeficColumn">
								<h1 className="cardSpeficColumn__header">{this.props.name}</h1><br/>
								<img className='[ img-responsive cardSpeficColumn__img ]' src={this.props.image} alt={this.props.name}/>
								<p><i>{this.props.about}</i></p><br/>
								<p><strong>Rarity:</strong> <br/> {this.props.rarity}</p>
								<p><strong>Color:</strong> <br/> {this.props.color}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}