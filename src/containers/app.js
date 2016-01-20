'use strict'

import Auth1 from '../components/auth1.js'
import Auth2 from '../components/auth2.js'

var React = require('react-native');

var {
	Navigator
} = React;

//class medme2app extends React.Component 

class App extends React.Component {
	choose_renderScene(route, navigator) {
		if (route.id == 'auth1') {
			return <Auth1 navigator = {navigator} />
		} else if (route.id == 'auth2') {
			return <Auth2 navigator = {navigator} />
		}
	}

	render() {
		return (
			<Navigator 
				initialRoute = {{id: 'auth1'}}
				renderScene = {this.choose_renderScene}
			/>
		)
	}
}

export default App;