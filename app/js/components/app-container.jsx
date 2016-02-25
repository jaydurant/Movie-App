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
			articlesList: appStore.getArticles(),
			addBook:false,
			returnVisitor: true
		}
	}

	componentDidMount(){
		appStore.addChangeListener(this._onChange.bind(this));
		appActions.setContent();
	}

	componentWillUnmount(){
		appStore.removeChangeListener(this._onChange.bind(this));
	}

	_onChange(){
		this.setState({
			booksList: appStore.getBooks(),
			articlesList: appStore.getArticles()
		});
	}

	onReturnVisitorClick(event){
		if(event.target.textContent === "YES"){
			this.setState({addBook:true, returnVisitor:false});	
		}
		else{
			this.setState({returnVisitor:false});
		}
	}	


	render () {

		return(
			<div>
				<Navigation />
				<AppBody addBook={this.state.addBook}newVisitor={this.state.returnVisitor} onReturnVisitorClick={this.onReturnVisitorClick.bind(this)} >
					<FeatureBooks books={this.state.booksList} />
					<FeatureArticle articles={this.state.articlesList} />
				</ AppBody>
			</div>
			);
	}
}

export default AppContainer;