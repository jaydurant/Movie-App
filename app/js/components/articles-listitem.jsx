import React from 'react';

function ArticlesListItem(props){
	return(
		<li className='content-box article'>
			<div className='article-image'>
				<img src={props.imgSrc} width='350' height='250' alt={props.articleTitle} />
			</div>
			<div className='article-textcaption'>
				<div className='article-description'>
					<h4>{props.articleCategory}</h4>
					<p>{props.articleDesc.line1}<br/>{props.articleDesc.line2}</p>
				</div>
				<div className='article-itemOptions'>
					<button className='button-black'>Share</button>
					<button className='button-gold'>Explore</button>
				</div>
			</div>
		</li>

		);
}

export default ArticlesListItem;