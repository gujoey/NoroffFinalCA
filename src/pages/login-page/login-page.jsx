import React from 'react';
import LoginComponent from './../../components/Login/Login-Component';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
			isUsername: false,
			isPassword: false
		}
		this.validateLogin = this.validateLogin.bind(this);
		
    }
	
	validateLogin(username, password){
		let app = this;
		
		if(localStorage.getItem("username") === username && localStorage.getItem("password") === password){
			alert("welcome back " + username); //replace with routing
			sessionStorage.setItem('AuthToken', 'sa6d456sd4a4ad6s');
		}
		if(localStorage.getItem("username") !== username){
			app.setState({isUsername: "Please enter a valid username"});
		}
		if(localStorage.getItem("password") !== password){
			app.setState({isPassword: "Please enter a valid password"});
		}
	}
	
	setLoginDetails(){
		localStorage.setItem("username", "user");
		localStorage.setItem("password", "HelloWorld");
	}

    render() {
		let app = this;
		app.setLoginDetails();
		
        return (
			<LoginComponent 
				validateLoginTerm={app.validateLogin}
				usernameErr={app.state.isUsername}
				passwordErr={app.state.isPassword}
				>
			</LoginComponent>
        );
    }
}
