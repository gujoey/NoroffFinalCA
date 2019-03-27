import React from 'react';
import CardSpecificComponent from './../../components/CardSpecific/Card-Specific-Component';
import NavBar from './../../components/Navigation/Navigation-Component';

export default class CardSpecificPage extends React.Component{
	constructor(props){
		super(props);
		this.state={
			cardObj:[],
			cardId: this.props.match.params.id
		}
	}
	
	componentDidMount(){
		const app = this;
		
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
		fetch('https://api.magicthegathering.io/v1/cards/'+app.state.cardId)
		.then(response =>{
			return response.json()
		})
		.then(result =>{
			app.setState({
				cardObj: result.card
			})
		});
	}
	
	
	render(){
		const app = this;
		let card = <CardSpecificComponent 
						image={app.state.cardObj.imageUrl}
						name={app.state.cardObj.name}
						about={app.state.cardObj.originalText}
						rarity={app.state.cardObj.rarity}		
						color={app.state.cardObj.colors}		
					>
					</CardSpecificComponent>;
		
		return(
			<div>
				<NavBar
					home="[ nav-item active ]"
					about=" [ nav-item ] "
					contact=" [ nav-item ] "
				></NavBar>
				<div className='[ row ]'>
					<div className='[ col-md-12 ]'>
						{card}
					</div>
				</div>
			</div>
		);
	}
}