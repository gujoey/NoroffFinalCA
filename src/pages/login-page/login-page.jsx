import React from 'react';
import LoginComponent from './../../components/Login/Login-Component';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
			isUsername: false,
			isPassword: false
		}
    }
	
	validateLogin(username, password){
		let app = this;
		console.log(app);
		console.log("input username " + username);
		console.log("input password " + password);
		
		if(localStorage.getItem("username") === username && localStorage.getItem("password") === password){
			alert("welcome back " + username);
			sessionStorage.setItem('AuthToken', 'sa6d456sd4a4ad6s');
		}
		else if(localStorage.getItem("username") !== username){
			alert("enter valid username");
			//app.setState({isUsername: false});
		}
		else if(localStorage.getItem("password") !== password){
			alert("enter valid password");
			//app.setState({isPassword: false});
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
			<LoginComponent validateLoginTerm={app.validateLogin}></LoginComponent>
        );
    }
}
