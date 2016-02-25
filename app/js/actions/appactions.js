import appConstants from '../constants/appconstants';
import appDispatcher from '../dispatcher/appdispatcher';
import xhr from '../utils/xhr';

const bookAppActions = {
	setContent(){
		xhr(JSON.parse,{url:'./json/appData.json'}).then((data)=>{
			appDispatcher.handleAction({
				actionType: appConstants.GET_DATA,
				data
			});
		},console.log.bind(console)).catch(console.log.bind(console));
	},

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