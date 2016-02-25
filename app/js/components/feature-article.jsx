import React from 'react';
import ArticlesListItem from './articles-listitem';

function FeatureArticle(props){
	const articlesList = props.articles.map((val,i) => <ArticlesListItem key={i} imgSrc={val.articleImage} articleTitle={val.articleTitle} articleCategory={val.articleCategory} articleDesc={val.articleDescription} />);

	return(
		<section className='articlesList'>
			<ul>
				{articlesList}
			</ul>
		</section>
	);

}

export default FeatureArticle;