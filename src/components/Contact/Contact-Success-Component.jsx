import React from 'react';
export default class ContactSuccessComponent extends React.Component{
	
	render(){		
		return(
			<div className="contactSuccessComponent">
				<div className="contactSuccessComponent__container">
					<div className="contactSuccess">
						<h1 className="contactSuccess__header">Message sent</h1>
						<p>Thank you for your inquiry. We'll answer it as soon as possible</p>
					</div>
				</div>
			</div>
		);
	}
}