import appConstants from '../constants/appconstants';
import appDispatcher from '../dispatcher/appdispatcher';

const bookAppActions = {
	addBook(item){
		appDispatcher.handleAction({
			actionType: appConstants.ADD_BOOK,
			data:item
		})
	},

	addArticle(item){
		appDispatcher.handleAction({
			actionType: appConstants.ADD_Article,
			data:item
		})
	}
}

export default bookAppActions;