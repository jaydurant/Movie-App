import appDispatcher from '../dispatcher/appdispatcher';
import appConstants from '../constants/appconstants';
import objectAssign from 'react/lib/Object.assign';
import {EventEmitter} from 'events';


const CHANGE_EVENT = 'change';

const _store = {
	bookList : [],
	articlesList:[]
}

function addBookList(newBook){
	_store.bookList.unshift(newBook);
}

function addArticlesList(newArticle){
	_store.articlesList.unshift(newArticle);
}

const bookAppStore = objectAssign({},EventEmiiter.prototype,{
	
	addChangeListener(callback){
		this.on(CHANGE_EVENT,cb);
	},

	removeChangeListener(callback){
		this.removeListener(CHANGE_EVENT,cb);
	},

	getBooks(){
		return _store.bookList;
	},

	getArticles(){
		return _store.articlesList;
	}

});


appDispatcher.register((payload) => {
	let action = payload.action;

	switch(action.actionType){
		case appConstants.ADD_BOOK:
			addBookList(action.data);
			bookAppStore.emit(CHANGE_EVENT);
			break;
		case appConstants.ADD_ARTICLE:
			addArticlesList(action.data);
			bookAppStore.emit(CHANGE_EVENT);
			break;
	}
})

export default bookAppStore;