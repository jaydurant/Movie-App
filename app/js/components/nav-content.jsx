import React from 'React';

function Navigation(props){

	return (
		<nav className="menu">
			<div className="menu--header">
				<img className="menu--image" src="./ic_close_24px.svg" width="24" height="24" />
				<a href="#menuExpand">My Books</a>
			</div>
			<div className="menuList">
				<ul>
					<li className="menusList--item">Option 1</li>
					<li className="menusList--item">Option 2</li>
					<li className="menusList--item">Option 3</li>	
				</ul>
				<div className="menu--dimmer"></div>
			</div>	
		</nav>
	);
}

export default Navigation;