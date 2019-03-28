import React from 'react';
import HomepageComponent from './../../components/Home/Home-Page-Component';
import Search from './../../components/Search/Search';
import NavBar from './../../components/Navigation/Navigation-Component';


export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardsObj: [],
			cardsSerachObj: [],
			cardsSearch: false,
            cards: []
        }
        this.getData = this.getData.bind(this);
        this.handleSearchTerm = this.handleSearchTerm.bind(this);
		this.redirectCardSpecific = this.redirectCardSpecific.bind(this);
    }

    componentDidMount() {
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

    getData() {
        const app = this;
        fetch('https://api.magicthegathering.io/v1/cards')
        .then(response => {
            return response.json()
        })
        .then(result => {
            app.setState({
                cardsObj: result.cards
            });
        });
    }

    handleSearchTerm(searchTerm) {
        const app = this;
        let characterObj = app.state.cardsObj;
		
        let characters = characterObj.filter((character) => {
            return character.name.indexOf(searchTerm) !== -1;
        });
		
        app.setState({
            cards: [],
			cardsSerachObj: characters,
			cardsSearch: true
        },app.createCards());
    }
	
	redirectCardSpecific(id){
		let app = this;
		app.props.history.push("/card-specific/"+id);
	}

    createCards(){
        const app = this;

		let rickMortyArray;
		let search = app.state.cardsSearch;
		
		if(!search){
			rickMortyArray = app.state.cardsObj;
		}else{
			rickMortyArray = app.state.cardsSerachObj;
		}
		
        rickMortyArray.forEach((value, key) => {
			if(value.imageUrl){
				app.state.cards.push(
					<HomepageComponent
						redirectCardSpecific={app.redirectCardSpecific}
						name={value.name}
						image={value.imageUrl}
						id={value.id}
						key={key}
					>
					</HomepageComponent>
				);
			}
        });
    }

    render() {
        const app = this;
        app.createCards();
        return (
			<div>
				<NavBar
					home="[ navbar__link--active ]"
				></NavBar>
				
				<div className="[ row ]">
					<div className="[ col-md-12 ]">
						<h1 className='[ column__header column__header--white ]'>
							Cards
						</h1><br/>
					</div>

					<div className="[ col-sm-12 ]">
						<Search onSearchTerm={app.handleSearchTerm}></Search>
					</div>

					<div className="[ col-md-12 ]">
						<div className="[ row row-eq-height ]">
							{app.state.cards}
						</div>
					</div>
				</div>
			</div>
        );
    }
}
