import appDispatcher from '../dispatcher/appdispatcher';
import appConstants from '../constants/appconstants';
import objectAssign from 'react/lib/Object.assign';
import getMenu from '../utils/getmenu';
import {EventEmitter} from 'events';


const CHANGE_EVENT = 'change';

let _store = {
	books : [],
	articles:[]
}

function addBookList(newBook){
	_store.books.unshift(newBook);
}

function addArticlesList(newArticle){
	_store.articles.unshift(newArticle);
}

function setStoreData(data){
	_store = data;
	_store.menu = getMenu(data.books,data.articles,/title/i);
	
}

const bookAppStore = objectAssign({},EventEmitter.prototype,{
	
	addChangeListener(callback){
		this.on(CHANGE_EVENT,callback);
	},

	removeChangeListener(callback){
		this.removeListener(CHANGE_EVENT,callback);
	},

	getBooks(){
		return _store.books;
	},

	getArticles(){
		return _store.articles;
	},
	getMenu(){
		return _store.menu;
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
		case appConstants.GET_DATA:
			setStoreData(action.data);
			bookAppStore.emit(CHANGE_EVENT);
			break;
	}
})

export default bookAppStore;