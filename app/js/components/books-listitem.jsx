import React from 'react';

function BooksListItem(props){
	return(
				<li>
					<div className="bookList-item">
						<img className='bookList-image' src='http://placehold.it/120x180' width='120' height='180'/>
						<div className='bookList-description'>
							<div className='bookList-itemText'>
								<h3>{props.bookTitle}</h3>
								<p>By {props.bookAuthor}</p>
							</div>
							<div className='bookList-itemOptions'>
								<button>Free Sample</button>
								<button>Review</button>
							</div>
						</div>
					</div>
				</li>
			);
}

export default BooksListItem;