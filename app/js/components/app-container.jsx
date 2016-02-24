import React from 'react';
import Navigation from './nav-content';
import AppBody from './app-body';
import FeatureBooks from './feature-books';
import FeatureArticle from './feature-article';

class AppContainer extends React.Component {


	constructor(props){
		super(props);

		this.state = {

		}
	}

	componentDidMount(){

	}

	render () {

		return(
			<div>
				<Navigation />
				<AppBody>
					<FeatureBooks />
					<FeatureArticle />
				</ AppBody>
			</div>
			);
	}
}

export default AppContainer;