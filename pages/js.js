// custom effect normal navbar
function setBgColorNormalNav(isActive) {
	var colorBackground = "rgb(63, 62, 62)";
	var colorGradientBackground = "linear-gradient(to right, #434343 0%, black 100%)";
	switch(isActive) {
		case true:
			document.getElementById("nav").style.backgroundColor = colorBackground;
			break;
		case false:
			document.getElementById("nav").style.backgroundColor = "transparent";
			break;
	}
}

function setTopNormalNav(top) {
	document.getElementById("nav").style.top = top;
}

// Custom effect floating nav
function customFloatNav() {
	document.getElementsByClassName("float-nav__list")[0].style.display = "none";
}

function setPosFloatNav() {
	var topPos = window.pageYOffset/100 + 30;
	if (topPos > 75) {
		topPos = 75;
	}
	document.getElementsByClassName("float-nav")[0].style.top = topPos + "vh";
}

function turnOnFloatNav(isTurOn) {
	//
	switch(isTurOn) {
		case true:
			document.getElementsByClassName("float-nav")[0].style.visibility = "visible";
			document.getElementsByClassName("float-nav")[0].style.opacity = "1";
			break;
		case false:
			document.getElementsByClassName("float-nav")[0].style.visibility = "hidden";
			document.getElementsByClassName("float-nav")[0].style.opacity = "0";
			break;
	}
}

// wait for loading page
setTimeout(function() {
	document.getElementsByClassName("container-fluid")[0].classList.remove("container-fluid--custom");
	document.getElementsByClassName("loading")[0].style.display = "none";
}, 10);

// On event scroll page
// var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var onScrollWidth = window.innerWidth;
	var currentScrollPos = window.pageYOffset;
	var heightOfOptionList = document.getElementById("navbar-content").offsetHeight;

	// customFloatNav();
	setPosFloatNav();

	switch(onScrollWidth < 992) {
		case true:
			if (heightOfOptionList == 0) {
				setTopNormalNav("-100px");
			}

			switch (currentScrollPos == 0 && heightOfOptionList == 0) {
				case true:
					turnOnFloatNav(false);
					setBgColorNormalNav(false);
					setTopNormalNav("0px");
					break
				case false:
					turnOnFloatNav(true);
					setBgColorNormalNav(true);
					break;
			}
			break;
		case false:
			setBgColorNormalNav(true);
			break;
	}
	// prevScrollpos = currentScrollPos;
}

// On event resize window page
window.onresize = function() {

	// waitLoadingPage(100);

	var onResizeWidth = window.innerWidth;
	var currentResizePos = window.pageYOffset;
	switch(onResizeWidth < 992) {
		case true:
			switch(currentResizePos == 0) {
				case true:
					setTopNormalNav("0px");
					break;
				case false:
					turnOnFloatNav(true);
					setTopNormalNav("-100px");
					setBgColorNormalNav(false);

					break;
			}
			if (window.pageYOffset == 0) {
				setBgColorNormalNav(false);
			}
			break;
		case false:
			turnOnFloatNav(false);
			setTopNormalNav("40px");
			setBgColorNormalNav(true);
			break;
	}
}
