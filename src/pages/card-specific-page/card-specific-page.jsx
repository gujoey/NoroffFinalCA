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
		
		if(app.loggedinValidation()){
			app.getData();
		}else{
			app.props.history.push("/");
		}
	}
	
	loggedinValidation(){
		if (sessionStorage.getItem("AuthToken")){
			return true;
		}else{
			return false;
		}
	}
	
	getData(){
		const app = this;
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
									color={app.state.rickMortyObj.colors}		
								>
								</CardSpecificComponent>;
		
		return(
			<div className='[ row ]'>
				<div className='[ col-md-12 ]'>
					{specificCharacter}
				</div>
			</div>
		);
	}
}