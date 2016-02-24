import React from 'react';

function FeatureBooks(props){

	return(
		<div className="bookList">
			<ul>
				<li>
					<div className="bookList-item">
						<img className='bookList-image'src='http://placehold.it/100x150'/>
						<div className='bookList-description'>
							<div className='bookList-itemText'>
								<h3>El Pooch</h3>
								<p>By Alex Nelson</p>
							</div>
							<div className='bookList-itemOptions'>
								<button>Free Sample</button>
								<button>Review</button>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);

}

export default FeatureBooks;
