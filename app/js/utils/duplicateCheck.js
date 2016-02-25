function duplicateCheck({author,title},currentlist){
	author = author.split(" ").map((val) => val.toLowerCase());
	title = title.toLowerCase();
	return currentlist.some( (val) => {
		if(author[0] === val.bookAuthor.first.toLowerCase() && author[1] === val.bookAuthor.last.toLowerCase() && title === val.bookTitle.toLowerCase()){
			return true;
		}
	} ) ;
}

export default duplicateCheck;

