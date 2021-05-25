/* Top btn 클릭 시 최상단으로 이동 */
function clickme(){
	window.scrollTo({top:0, left:0, behavior:'smooth'});
}

/* Tab menu 클릭 시 해당 내용 보여주기*/
function onTabClick(event){
	let activeTabs=document.querySelectorAll('.active');
		activeTabs.forEach(function(tab){
		tab.className=tab.className.replace('active','');
	});

	//activate new tab and panel
	event.target.parentElement.className += 'active';
	document.getElementById(event.target.href.split('#')[1]).className += 'active';
}

const element=document.getElementById('gnb');

element.addEventListener('click', onTabClick, false);