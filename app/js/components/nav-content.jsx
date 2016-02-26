import React from 'React';
import NavListItems from './nav-listitems';

function Navigation(props){
	//the following variables determine whether a user will see a expanded or closed menu in smaller browsers
	let navItems = props.linkNames.map((val,i) => <NavListItems key={i} linkText={val}/>);
	let menuStatus = props.menuOpen ? 'menuList--open':'menuList--closed';
	
	return (
		<header className='menu'>
			<div className='menu-header'>
				<img className='menu-image' src={props.menuOpen ? './ic_close_24px.svg':'./ic_menu_24px.svg'} width='24' height='24' onClick={props.toggleMenu}/>
				<h1>My books</h1>
			</div>
			<nav className={`menuList ${menuStatus}`}>
				<ul>
					{navItems}
				</ul>
				<div className='menu-dimmer'></div>
			</nav>	
		</header>
	);
}

export default Navigation;