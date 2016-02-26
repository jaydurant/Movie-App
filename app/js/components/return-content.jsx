import React from 'react';

function ReturnContent(props){

	return (
		<div className='returning-visitor content-box'>
			<div>
				<h3>Welcome Back!</h3>
				<p>It's been a while.</p>
			<p>Read any new books lately?</p>
			</div>
			<div className='button-group'>
				<button className='button-black' onClick={props.onUserClick}>NO</button><button className='button-gold' onClick={props.onUserClick}>YES</button>
			</div>
		</div>

	);

}

export default ReturnContent;