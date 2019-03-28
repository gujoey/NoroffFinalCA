import React from 'react';

export default class NavBar extends React.Component{
	render(){
		return(
			<div className="navBarComponent">
				<div className="navBarComponent__container">
					<nav className="navbar navbar-default  navbar-expand-lg navbar-light">
						<a className="navbar-brand navbar__brand" href="#/home">Card Game</a>

						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">	
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className={"navbar-nav"}>
								<li className="nav-link">
									<a className={"nav-link navbar__link " + this.props.home} href="#/home">Home</a>
								</li>
								<li className="nav-link">
									<a className={"nav-link navbar__link " + this.props.about} href="#/about">About</a>
								</li>
								<li className="nav-link">
									<a className={"nav-link navbar__link " + this.props.contact} href="#/contact">Contact</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		);
	}
}