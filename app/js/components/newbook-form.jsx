import React from 'react';
import appStore from '../stores/bookappstore';
import appActions from '../actions/appactions';

class NewBookForm extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			authorValue: '',
			titleValue:'',
		};
	}

	componentDidMount(){
		window.addEventListener('submit',(event) =>{
			event.preventDefault();
		})
	}

	addNewBook(item){
		appActions.addBook(item);
	}

	addNewArticle(item){
		appActions.addArticle(item);
	}

	onFormSubmission(event){
		console.log('hey1');
		let newBook = {author: this.state.authorValue, title:this.state.titleValue};
		this.addNewBook(newBook);
		event.preventDefault();
		
		debugger;
		
	}

	handleChange(event){
		switch(event.target.name){
			case 'author':
					this.setState({authorValue: event.target.value.substr(0,100)});
				break;
			case 'title':
					this.setState({titleValue: event.target.value.substr(0,100)});
				break;
		}
		
	}


	render(){

		return(
			<section>
				<form name='addBookForm' method='GET'>
					<fieldset>
						<legend>Then Add the Book!</legend>
						<div>
							<label htmlFor='title'>Book Title:</label>
							<input ref={(node) => this.title = node} name='title' type='text' id='titleValue' value={this.state.titleValue} onChange={this.handleChange.bind(this)}/>
						</div>
						<div>
							<label htmlFor='author'>Author:</label>
							<input ref={(node) => this.author = node} name='author' type='text' id='authorValue' value={this.state.authorValue} onChange={this.handleChange.bind(this)}/>
						</div>
						<div>
							<button onClick={this.onFormSubmission.bind(this)}>Add the Book</button>
						</div>
					</fieldset>
				</form>
			</section>
			);
	}


}

export default NewBookForm;