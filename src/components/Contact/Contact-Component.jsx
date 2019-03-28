import React from 'react';
export default class ContactComponent extends React.Component{
	
	constructor(props){
		super(props);
		this.handleContactTerm = this.handleContactTerm.bind(this);
	}
	
	handleContactTerm(){
		const app = this;
		
		let contactInput = {
			fName: app.refs.fName.value,
			lName: app.refs.lName.value,
			email: app.refs.email.value,
			phone: app.refs.phone.value,
			message: app.refs.message.value
		}
		
		
		app.props.validateContactTerm(contactInput);
	}
	
	render(){
		const app = this;
		
		return(
			<div className="[ contactComponent ]">
				<div className="[ contactComponent__container ]">
					<h1 className="[ header ]">Contact us</h1>
					<div className="[ contact ]">
						<form className="[ contact__form ]" ref="loginForm">
							<label className="contact__label" htmlFor="fName">First name</label><br/>
							<input className="[ contact__input ]" type="text" name="fName" ref="fName" placeholder="first name"/><br />
							<span className="[ contact__error ]">{this.props.fNameErr}</span><br />

							<label className="[ contact__label ]" htmlFor="lName">Last name</label><br/>
							<input className="[ contact__input ]" type="text" name="lName" ref="lName" placeholder="last name"/><br />
							<span className="[ contact__error ]">{this.props.lNameErr}</span><br />

							<label className="[ contact__label ]" htmlFor="email">E-mail</label><br/>
							<input className="[ contact__input ]" type="email" name="email" ref="email" placeholder="e-mail"/><br />
							<span className="[ contact__error ]">{this.props.emailErr}</span><br />

							<label className="[ contact__label ]" htmlFor="phone">Phone number</label><br/>
							<input className="[ contact__input ]" type="tel" name="phone" ref="phone" placeholder="phone number"/><br />
							<span className="[ contact__error ]">{this.props.phoneErr}</span><br />

							<label className="[ contact__label ]" htmlFor="message">Message</label><br/>
							<textarea className="[ contact__input contact__input--message ]" name = "message" placeholder="message" ref="message"></textarea><br/>

							<span className="[ contact__error ]">{this.props.messageErr}</span><br />
							
							<button className="[ contact__button ]" type="button" onClick={app.handleContactTerm}>Send</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}