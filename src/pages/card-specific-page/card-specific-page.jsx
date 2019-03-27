import React from 'react';
import CardSpecificComponent from './../../components/CardSpecific/Card-Specific-Component'

export default class CardSpecificPage extends React.Component{
	constructor(props){
		super(props);
		this.state={
			rickMortyObj:[],
			characterId: this.props.match.params.id
		}
	}
	
	componentDidMount(){
		const app = this;
		app.getData();
	}
	
	getData(){
		const app = this;
		console.log(app.state.characterId);
		fetch('https://api.magicthegathering.io/v1/cards/'+app.state.characterId)
		.then(response =>{
			return response.json()
		})
		.then(result =>{
			app.setState({
				rickMortyObj: result.card
			})
		});
	}
	
	
	render(){
		const app = this;
		let specificCharacter = <CardSpecificComponent 
									image={app.state.rickMortyObj.imageUrl}
									name={app.state.rickMortyObj.name}
									about={app.state.rickMortyObj.originalText}
									rarity={app.state.rickMortyObj.rarity}
									
								>
								</CardSpecificComponent>;
		
		return(
			<div className='[ row ]'>
				<div className='[ col-sm-12 ]'>
					{specificCharacter}
				</div>
			</div>
		);
	}
}