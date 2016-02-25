import React from 'react';
import Navigation from './nav-content';
import AppBody from './app-body';
import FeatureBooks from './feature-books';
import FeatureArticle from './feature-article';
import appStore from '../stores/bookappstore';
import appActions from '../actions/appactions';

class AppContainer extends React.Component {


	constructor(props){
		super(props);

		this.state = {
			booksList: appStore.getBooks(),
			articlesList: appStore.getArticles()
		}
	}

	componentDidMount(){
		appStore.addChangeListener(this._onChange);
	}

	componentWillUnmount(){
		appStore.removeChangeListener(this._onChange)
	}

	addNewBook(item){
		appActions.addBook(item);
	}

	addNewArticle(item){
		appActions.addArticle(item);
	}

	_onChange(){
		this.setState({
			booksList: appStore.getBooks(),
			articlesList: appStore.getArticles()
		})
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