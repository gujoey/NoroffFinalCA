import React from 'react';
import HomepageComponent from './../../components/Home/Home-Page-Component';
import Search from './../../components/Search/Search';


export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rickMortyObj: [],
			rickMortySerachObj: [],
			rickMortySearch: false,
            rickMortyCards: []
        }
        this.getData = this.getData.bind(this);
        this.handleSearchTerm = this.handleSearchTerm.bind(this);
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
                rickMortyObj: result.cards
            });
        });
    }

    handleSearchTerm(searchTerm) {
        const app = this;
        let characterObj = app.state.rickMortyObj;
		
        let characters = characterObj.filter((character) => {
            return character.name.indexOf(searchTerm) !== -1;
        });
		
        app.setState({
            rickMortyCards: [],
			rickMortySerachObj: characters,
			rickMortySearch: true
        },app.createCards());
    }

    createCards(){
        const app = this;

		let rickMortyArray;
		let search = app.state.rickMortySearch;
		
		if(!search){
			rickMortyArray = app.state.rickMortyObj;
		}else{
			rickMortyArray = app.state.rickMortySerachObj;
		}
		
        rickMortyArray.forEach((value, key) => {
			if(value.imageUrl){
				app.state.rickMortyCards.push(
					<HomepageComponent
						name={value.name}
						image={value.imageUrl}
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
            <div className="[ row ]">
                <div className="[ col-md-12 ]">
                    <h1 className='[ text-center ]'>
                        Rick and Morty characters
                    </h1><br/>
                </div>
				
				<div className="[ col-sm-12 ]">
                    <Search onSearchTerm={app.handleSearchTerm}></Search>
                </div>
               
                <div className="[ col-md-12 ]">
					<div className="[ row row-eq-height ]">
                    	{app.state.rickMortyCards}
					</div>
                </div>
            </div>
        );
    }
}
