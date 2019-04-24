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
		if (sessionStorage.getItem("AuthToken") === "sa6d456sd4a4ad6s"){
			return true;
 		}else{
			return false;
		}
	}
	

    render() {
        return (
			<div>
				<NavBar
					contact=" [ navbar__link--active ] "
				></NavBar>
		
				<ContactSuccessComponent></ContactSuccessComponent>
			</div>
        );
    }
}
