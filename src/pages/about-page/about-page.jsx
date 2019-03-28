import React from 'react';
import NavBar from './../../components/Navigation/Navigation-Component'
import AboutComponent from './../../components/About/About-Component';

export default class AboutPage extends React.Component {
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
        return (
			<div>
				<NavBar
					home="[ nav-item  ]"
					about=" [ nav-item active ] "
					contact=" [ nav-item ] "
				></NavBar>
				<AboutComponent></AboutComponent>
			</div>
        );
    }
}
