import React from 'react';

function ReturnContent(props){

	return (
		<div>
			<h3>Welcome Back</h3>
			<p>It's been a while.<br/>Read any new books lately?</p>
			<div className='buttonGroup'>
				<button className='button--no'>NO</button><button className='button--yes'>YES</button>
			</div>
		</div>

	);

}

export default ReturnContent;