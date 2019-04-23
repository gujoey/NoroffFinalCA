import React from 'react';
import NavBar from './../../components/Navigation/Navigation-Component'
import AboutComponent from './../../components/About/About-Component';

export default class AboutPage extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			showMoreContent: false
		}
		
		this.handleShowMore = this.handleShowMore.bind(this);
	}
	
	handleShowMore(){
		let app = this;
		
		if(app.state.showMoreContent){
			app.setState({showMoreContent: false});
		}else{
			app.setState({showMoreContent: true});
		}	
	}
	
	componentDidMount() {
		const app = this;
		if(!app.loggedinValidation()){
			app.props.history.push("/")
		}
		app.replaceText();
	}
	
	loggedinValidation(){
		if (sessionStorage.getItem("AuthToken")){
			return true;
		}else{
			return false;
		}
	}
	
	replaceText(){
		let text, newText, aboutText;

		text = document.getElementById("aboutText").innerHTML;
		newText = text.replace(/Magic/g, "Something");
		aboutText = document.getElementById("aboutText");

		aboutText.innerHTML = newText;
	}

    render() {
		let app = this;
		const style = this.state.showMoreContent ? {display: "block"} : {display: "none"};
		const chevron = this.state.showMoreContent ? 'fa fa-chevron-up' : 'fa fa-chevron-down';
		
        return (
			<div>
				<NavBar about=" [ navbar__link--active ] "></NavBar>
				<AboutComponent
					validateLoginTerm = {app.handleShowMore}
					showHideContent = {style}
					chevron = {chevron}
				></AboutComponent>
			</div>
        );
    }
}
