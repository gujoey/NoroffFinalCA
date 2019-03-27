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
			sessionStorage.setItem('AuthToken', 'sa6d456sd4a4ad6s');
			app.props.history.push("/home");
		}
		if(localStorage.getItem("username") !== username){
			app.setState({isUsername: "Please enter a valid username"});
		}else{
			app.setState({isUsername: false});
		}
		if(localStorage.getItem("password") !== password){
			app.setState({isPassword: "Please enter a valid password"});
		}else{
			app.setState({isPassword: false});
		}
	}
	
	componentDidMount() {
        const app = this;
		if(app.loggedinValidation()){
			app.props.history.push("/home");
		}
    }
	
	loggedinValidation(){
		if (sessionStorage.getItem("AuthToken")){
			return true;
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
