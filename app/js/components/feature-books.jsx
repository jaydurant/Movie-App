import React from 'react';
import ListItem from './books-listitem';

function FeatureBooks(props){
	const booksList = props.books.map((val,i) => <ListItem key={i} imgSrc={val.bookImage} bookAuthor={`${val.bookAuthor.first} ${val.bookAuthor.last}`} bookTitle={val.bookTitle} />);

	return(
		<section className="bookList">
			<ul>
				{booksList}
			</ul>
		</section>
	);

}

export default FeatureBooks;
