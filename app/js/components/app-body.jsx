import React from 'react';
import ReturnContent from './return-content';
import NewBookForm  from './newbook-form';

function AppBody(props){
	//the following variables represent a condition which will decide whether a user will view the form or return visitor component
	let newVisitor = props.newVisitor ? <ReturnContent onUserClick={props.onReturnVisitorClick} /> : null;
	let newBookForm = props.addBook ? <NewBookForm clicks='hey' />: false;

	return(
		<div className="app-body container">
			<div className="half-width-m">	
				{newVisitor || newBookForm}
				{props.children[0]}
			</div>
			<div className="half-width-m">
				{props.children[1]}
			</div>
		</div>
	);
}

export default AppBody;