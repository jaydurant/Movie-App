import React from 'react';

function NavListItems(props){
	return(
		<li className="menuList-item"><a href="#">{props.linkText}</a></li>
		);
}

export default NavListItems;