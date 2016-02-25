import React from 'react';
import appStore from '../stores/bookappstore';
import appActions from '../actions/appactions';
import duplicateCheck from '../utils/duplicateCheck';
import Warning from './warning-content';

class NewBookForm extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			authorValue: '',
			titleValue:'',
			descriptionValue:'',
			warning:false,
			warningText:'You have already reviewed this book. Choose another book'
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
		if(duplicateCheck({author:this.state.authorValue,title:this.state.titleValue}, appStore.getBooks() ) ){
			this.setState({warning: true});
		}
		else{
			let [firstName,lastName] = this.state.authorValue.split(" ");
			let newBook = {bookAuthor: {first: firstName,last:lastName}, bookTitle:this.state.titleValue,bookDescription:this.state.descriptionValue,bookImage:'http://placehold.it/120x180'};
			this.addNewBook(newBook);
			event.preventDefault();
		}
		
	}

	handleChange(event){
		switch(event.target.name){
			case 'author':
					this.setState({authorValue: event.target.value.substr(0,100)});
				break;
			case 'title':
					this.setState({titleValue: event.target.value.substr(0,100)});
				break;
			case 'description':
					this.setState({descriptionValue: event.target.value.substr(0,200)});
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
							{this.state.warning? <Warning text={this.state.warningText} /> : null}
							<label htmlFor='title'>Title:</label>
							<input name='title' type='text' id='title' value={this.state.titleValue} onChange={this.handleChange.bind(this)} autoFocus required />
						</div>
						<div>
							<label htmlFor='author'>Author:</label>
							<input name='author' type='text' id='author' value={this.state.authorValue} onChange={this.handleChange.bind(this)} required />
						</div>
						<div>
							<label htmlFor='description'>Description:</label>
							<textarea name='description' type='text' id='description' value={this.state.descriptionValue} onChange={this.handleChange.bind(this)} row='10' cols='25'/>
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