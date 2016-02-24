import React from 'react';
import ReturnContent from './return-content';

function AppBody(props){
	
	return(
		<div>	
			{2}
			{props.children[0]}
			{props.children[1]}
		</div>
	);
}

export default AppBody;