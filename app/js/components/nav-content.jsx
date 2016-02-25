import React from 'React';

function Navigation(props){

	return (
		<header className="menu">
			<div className="menu--header">
				<img className="menu--image" src="./ic_close_24px.svg" width="24" height="24" />
				<h1>My Books</h1>
			</div>
			<nav className="menuList">
				<ul>
					<li className="menuList--item">Option 1</li>
					<li className="menuList--item">Option 2</li>
					<li className="menuList--item">Option 3</li>	
				</ul>
				<div className="menu--dimmer"></div>
			</nav>	
		</header>
	);
}

export default Navigation;