import React from 'react';
export default class LoginComponent extends React.Component{
	
	constructor(props){
		super(props);
		this.handleLoginTerm = this.handleLoginTerm.bind(this);
	}
	
	handleLoginTerm(){
		const app = this;
		
		let username = app.refs.username.value;
		let password = app.refs.password.value;
		
		app.props.validateLoginTerm(username, password);
	}
	
	render(){
		const app = this;
		
		return(
			<div className="[ login ]">
				<form className="[ login__form ]" ref="loginForm">
					<label className="login__label" htmlFor="username">Username</label><br/>
					<input className="[ login__input ]" type="text" name="username" ref="username" placeholder="Username"/><br />
					<span className="[ login__error ]">{this.props.usernameErr}</span><br />
					
					<label className="login__label" htmlFor="password">Password</label><br/>
					<input className="[ login__input ]" type="password" name="password" ref="password" placeholder="Password"/><br />
					<span className="[ login__error ]">{this.props.passwordErr}</span><br />
					
					<button className="[ login__button ]" type="button" onClick={app.handleLoginTerm}>Submit</button>
				</form>
			</div>
		);
	}
}