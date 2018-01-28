import React, { Component } from 'react';
import Auth from '../utils/AuthService';
import { Button, Navbar } from 'react-bootstrap';
import axios from 'axios';

const auth = new Auth();

class Header extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			picture: '',
			email: '',
			loading: false
		};
	}
	
	login() {
		this.props.auth.login();
	}

	logout() {
		this.props.auth.logout();
	}
	
	getUserInfo() {
		if(this.props.auth.isAuthenticated()){
			this.setState({loading: true});
			axios.get(process.env.REACT_APP_USER_GET, { headers: { Authorization: `Bearer ${auth.getAccessToken()}` }})
			.then(res => {
				var picture = res.data.user.picture,
						email = res.data.email,
						loading = false;
				this.setState({ email, picture, loading });
			});
		}
	}
	
	componentDidMount(){
		this.getUserInfo();
	}
	
	componentWillReceiveProps(){
		if(!this.state.loading){
			this.getUserInfo();
		}
	}
	
	navBarText() {
		const { isAuthenticated } = this.props.auth;
		
		if(isAuthenticated()){
			return <Navbar.Text> Signed in as: <Navbar.Link href="#">{this.state.email}</Navbar.Link></Navbar.Text>
		} else {
			return <Navbar.Text> This is an Ethereum Wallet! </Navbar.Text>
		}
	}
	
	render() {
		const { isAuthenticated } = this.props.auth;

		return (
			<Navbar>
				<Navbar.Header>
					{ isAuthenticated() && (<Navbar.Brand><img alt="gravatar" src={this.state.picture} /></Navbar.Brand>)}
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					{this.navBarText()}
					<Navbar.Form pullRight> 
							{!isAuthenticated() && (<Button bsStyle="primary" id="LoginBtn" onClick={this.login.bind(this)}>Log In</Button>)}
							{ isAuthenticated() && (<Button bsStyle="primary" id="LoginBtn" onClick={this.logout.bind(this)}>Log Out</Button>)}
					</Navbar.Form>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
