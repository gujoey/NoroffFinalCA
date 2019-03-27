import React from 'react';

export default class NavBar extends React.Component{
	render(){
		return(
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand" href="#/home">Card Game</a>
					
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">	
						<span className="navbar-toggler-icon"></span>
					</button>
					
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className={"navbar-nav"}>
							<li className={this.props.home}>
								<a className={"nav-link"} href="#/home">Home <span className="sr-only">(current)</span></a>
							</li>
							<li className={this.props.about}>
								<a className="nav-link" href="#/about">About</a>
							</li>
							<li className={this.props.contact}>
								<a className="nav-link" href="#/contact">Contact</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}