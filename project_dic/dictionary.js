/* Top btn 클릭 시 최상단으로 이동 */
scrollTop('js-button', 500);
function scrollTop(elem,duration) {
	let target = document.getElementById(elem);

	target.addEventListener('click', function() {
		let currentY = window.pageYOffset; 
		let step = duration/currentY > 1 ? 10 : 100;
		let timeStep = duration/currentY * step;
		let intervalID = setInterval(scrollUp, timeStep);

		function scrollUp(){
			currentY = window.pageYOffset;
			if(currentY === 0) {
				clearInterval(intervalID);
			} else {
				scrollBy( 0, -step );
			}
		}
	});
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