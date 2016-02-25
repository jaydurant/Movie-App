import React from 'React';
import NavListItems from './nav-listitems';

function Navigation(props){
	let navItems = props.linkNames.map((val,i) => <NavListItems key={i} linkText={val}/>);

	return (
		<header className="menu">
			<div className="menu--header">
				<img className="menu--image" src="./ic_close_24px.svg" width="24" height="24" />
				<h1>My Books</h1>
			</div>
			<nav className="menuList">
				<ul>
					{navItems}
				</ul>
				<div className="menu--dimmer"></div>
			</nav>	
		</header>
	);
}

export default Navigation;