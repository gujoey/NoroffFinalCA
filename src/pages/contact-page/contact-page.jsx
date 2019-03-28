import React from 'react';
import NavBar from './../../components/Navigation/Navigation-Component'
import ContactComponent from './../../components/Contact/Contact-Component';

export default class ContactPage extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
			isFirstName: false,
			isLastName: false,
			isEmail: false,
			isPhone: false,
			isMessage: false
		}
		this.validateContactTerm = this.validateContactTerm.bind(this);
		
    }
	
	validateContactTerm(contactInput){
		let app = this;
		
		//validate first name input
		if (contactInput.fName === "" || contactInput.fName === undefined){
			app.setState({isFirstName: "Please enter a valid first name"});
			return;
		}else{
			app.setState({isFirstName: false});
		}
		
		//validate lastname input
		if (contactInput.lName === "" || contactInput.lName === undefined){
			app.setState({isLastName: "Please enter a valid last name"});
			return;
		}else{
			app.setState({isLastName: false});
		}
		
		//validate email input
		let regExEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/;

		if (!regExEmail.test(contactInput.email)){
			app.setState({isEmail: "Please enter a valid e-mail adress"});
			return;
		}else{
			app.setState({isEmail: false});
		}
		
		//validate phone input
		let regExPhone = /^(\d{3}\.\d{3}\.\d{4})|(\d{3}-\d{3}-\d{4})|(\d{3}\s\d{3}\s\d{4})$/;
	
		if (!regExPhone.test(contactInput.phone)){
			app.setState({isPhone: "Please enter a valid phone number (ex: 123 123 1234 or 123.123.1234 or 123-123-1234)"});
			return;
		}else{
			app.setState({isPhone: false});
		}
		
		//redirect after validation
		app.props.history.push("/contact-success");
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
        return (
			<div>
				<NavBar
					home="[ nav-item  ]"
					about=" [ nav-item ] "
					contact=" [ nav-item active ] "
				></NavBar>
		
				<ContactComponent
					validateContactTerm={app.validateContactTerm}
					fNameErr={app.state.isFirstName}
					lNameErr={app.state.isLastName}
					emailErr={app.state.isEmail}
					phoneErr={app.state.isPhone}
					messageErr={app.state.isMessage}
				>
				</ContactComponent>
			</div>
        );
    }
}
