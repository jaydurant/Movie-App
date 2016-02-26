
function getMenu(array1,array2,search){
	
	let menu = [...array1,...array2];
	menu = menu.map((val)=>{
		for(let elem in val){
			if(search.test(elem)){
				return val[elem];
			}
		}
	});
	return menu;
}

export default getMenu;