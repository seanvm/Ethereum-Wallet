import './App.css';

import React, { Component } from 'react';
import Header from './components/Header';
import InfoPanel from './components/InfoPanel';
import WalletBalance from './components/WalletBalance';

class App extends Component {
	goTo(route) {
		this.props.history.replace(`/${route}`)
	}
	
	render() {
		return (
			<div className="App bg">
				<Header auth={this.props.auth} />
				<InfoPanel />
				<WalletBalance auth={this.props.auth} />
			</div>
		);
	}
}

export default App;
