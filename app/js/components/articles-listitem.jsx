import React from 'react';

function ArticlesListItem(props){
	return(
		<li>
			<figure>
				<img src='http://placehold.it/350x100' width='350' height='100' />
				<figcaption>{props.articleTitle}</figcaption>
			</figure>
			<div>
				<h4>{props.articleCategory}</h4>
				<p>{props.articleDesc.line1}<br/>{props.articleDesc.line2}</p>
				<div>
					<button>Share</button>
					<button>Explore</button>
				</div>
			</div>
		</li>

		);
}

export default ArticlesListItem;