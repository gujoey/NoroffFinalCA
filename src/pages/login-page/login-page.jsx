import React from 'react';
import LoginComponent from './../../components/Login/Login-Component';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
			<LoginComponent></LoginComponent>
        );
    }
}
