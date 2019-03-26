import React from 'react';
export default class LoginComponent extends React.Component{
	render(){
		return(
			<div className="[ login ]">
				<form className="[ login__form ]">
					<input className="[ login__input ]" type="text" placeholder="Please enter a username"/><br />
					<span className="[ login--errors ]">Please enter a correct username</span><br />
					<input className="[ login__input ]" type="password" placeholder="Please enter a password"/><br />
					<span className="[ login--errors ]">Please enter a correct Password</span><br />
					<button className="[ login__button ]" type="Submit">Submit</button>
				</form>
			</div>
		);
	}
}