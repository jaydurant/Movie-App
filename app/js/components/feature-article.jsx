import React from 'react';

function FeatureArticle(props){

	return(
		<section>
			<figure>
				<img src='http://placehold.it/350x100' width='350' height='100' />
				<figcaption>Top 10 Australia Beaches</figcaption>
			</figure>
			<div>
				<h4>Number 10</h4>
				<p>Whitehaven Beach<br/>Whitsunday Island, Whitesunday Islands</p>
				<div>
					<button>Share</button>
					<button>Explore</button>
				</div>
			</div>
			
		</section>
	);

}

export default FeatureArticle;