import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class InfoPanel extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-10 col-md-offset-1">
						<Panel bsStyle="primary">
							<Panel.Heading>Welcome to my app!</Panel.Heading>
							<Panel.Body>
								<p>This is a lightweight Ethereum wallet!</p> 
								<p>The backend for this application is written in Node.js, and utilizes the <a href="https://github.com/serverless/serverless">serverless framework</a> for AWS Lambda. </p>
								<p>The frontend is written with ReactJS, and uses Auth0 for authentication of users and the backend API.</p>
								<p>This is both a WIP, and a proof of concept, and is very limited in functionality. As such, <strong>it should only be used with the Ethereum testnet</strong>.</p>
								<p> Github: <a href="https://github.com/seanvm/Serverless-Ethereum-Wallet-Frontend">Frontend</a> - <a href="https://github.com/seanvm/Serverless-Ethereum-Wallet-Backend">Backend</a></p>
							</Panel.Body>
						</Panel>
					</div>
				</div>
			</div>
		);
	}
}

export default InfoPanel;
