import React from 'react';

function BooksListItem(props){
	return(
				<li className='content-box'>
					<div className='bookList-item'>
						<div className='bookList-image-container'>
							<img className='bookList-image' src={props.imgSrc} width='120' height='180' alt={props.bookTitle}/>
						</div>
						<div className='bookList-description'>
							<div className='bookList-itemText'>
								<h3>{props.bookTitle}</h3>
								<p>By {props.bookAuthor}</p>
							</div>
							<div className='bookList-itemOptions'>
								<button className='button-black'>FREE SAMPLE</button>
								<button className='button-gold'>REVIEW</button>
							</div>
						</div>
					</div>
				</li>
			);
}

export default BooksListItem;