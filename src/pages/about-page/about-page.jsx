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
	}
	
	loggedinValidation(){
		if (sessionStorage.getItem("AuthToken")){
			return true;
		}else{
			return false;
		}
	}
	

    render() {
		let app = this;
		const style = this.state.showMoreContent ? {display: "block"} : {display: "none"};
		const chevron = this.state.showMoreContent ? 'fa fa-chevron-up' : 'fa fa-chevron-down';
		
        return (
			<div>
				<NavBar
					home="[ nav-item  ]"
					about=" [ nav-item active ] "
					contact=" [ nav-item ] "
				></NavBar>
				<AboutComponent
					validateLoginTerm = {app.handleShowMore}
					showHideContent = {style}
					chevron = {chevron}
				></AboutComponent>
			</div>
        );
    }
}
