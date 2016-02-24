import React from 'react';
import ReturnContent from './return-content';

function AppBody(props){
	
	return(
		<div>
			<div>	
				<ReturnContent />
				{props.children[0]}
			</div>
			<div>
				{props.children[1]}
			</div>
		</div>
	);
}

export default AppBody;