import React from 'react';
import NavBar from './../../components/Navigation/Navigation-Component'
import ContactSuccessComponent from './../../components/Contact/Contact-Success-Component';

export default class ContactSuccessPage extends React.Component {	
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
        return (
			<div>
				<NavBar
					home="[ nav-item  ]"
					about=" [ nav-item ] "
					contact=" [ nav-item active ] "
				></NavBar>
		
				<ContactSuccessComponent></ContactSuccessComponent>
			</div>
        );
    }
}
