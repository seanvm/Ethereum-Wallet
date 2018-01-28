import React, { Component } from 'react';
import axios from 'axios';
import { Panel } from 'react-bootstrap';
import Auth from '../utils/AuthService';
import { PropagateLoader } from 'react-spinners';

const auth = new Auth();
const initialState = {
	balance: 'Login To View Balance',
	publicKey: 'Login To View Public Key',
	loading: false
}
const loadingState = {
	balance: '',
	publicKey: '',
	loading: true
}

class WalletBalance extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}
	
	componentDidMount() {
		this.getWalletInfo();
	}
	
	componentWillReceiveProps() {
		if(!this.state.loading){
			this.getWalletInfo();
		}
	}
	
	getWalletInfo() {
		if(this.props.auth.isAuthenticated()){
			this.setState(loadingState);
			axios.get(process.env.REACT_APP_WALLET_BALANCE, { headers: { Authorization: `Bearer ${auth.getAccessToken()}` }})
			.then(res => {
				console.log(res.data)
				var balance = res.data.balance,
						publicKey = res.data.publicKey,
						loading = false;
				this.setState({ balance, publicKey, loading });
			});
		} else {
			this.setState(initialState);
		}
	}
	
	loading(){
		return (<div className='loading'>
			<PropagateLoader
				color={'#337ab7'} 
				loading={this.state.loading} 
			/>
		</div>)
	}
	
	render() {
		return (
			<div className="row">
					<div className="col-md-5 col-md-offset-1">
						<Panel bsStyle="primary">
							<Panel.Heading>Balance</Panel.Heading>
							<Panel.Body>{this.state.loading ? this.loading() : this.state.balance}</Panel.Body>
						</Panel>
					</div>
			
					<div className="col-md-5">
						<Panel bsStyle="primary">
							<Panel.Heading>Public Key</Panel.Heading>
							<Panel.Body>{this.state.loading ? this.loading() : this.state.publicKey}</Panel.Body>
						</Panel>
					</div>
			</div>
		);
	}
}

export default WalletBalance;
