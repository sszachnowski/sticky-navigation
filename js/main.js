(function() {
	"use strict"

/* This function calculates page height saccording to viewport size and sets this value into CSS.
Due to this solution content is divided through pages despite it's diplayed on single page. */
	function addPageHeight () {
		var intViewportHeight = window.innerHeight - 140;
		var pages = document.getElementsByClassName('page');
		var numberOfPages = pages.length;
		for (var i = 0; i < numberOfPages; i += 1) {
			pages[i].style.minHeight = intViewportHeight + 'px';
		}
	}

/* This function is checking element nav position and docking it if needed */
	function docking () {
		var nav = document.getElementsByTagName('nav');
		nav = nav[0];
		var elementHeight = parseInt(window.getComputedStyle(nav, null).getPropertyValue('height'), 10);
		var intViewportHeight = window.innerHeight;
		if(window.pageYOffset >= intViewportHeight - elementHeight) {
			nav.classList.add("docked");
		} else if (window.pageYOffset < intViewportHeight - elementHeight) {
			nav.classList.remove("docked");
		}
	}

	/* Event listeners go here including IE support */
	if(window.addEventListener) {
		window.addEventListener('load', addPageHeight, false);
		window.addEventListener('resize', addPageHeight, false)
		window.addEventListener('scroll', docking, false);
		window.addEventListener('resize', docking, false);
	} else {
		window.attachEvent('load', addPageHeight);
		window.attachEvent('resize', addPageHeight);
		window.attachEvent('scroll', docking);
		window.attachEvent('resize', docking);
	}		

}) ();
