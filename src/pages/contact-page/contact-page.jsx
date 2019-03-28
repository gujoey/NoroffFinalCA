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
		//let app = this;
		console.log(contactInput);
		
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
