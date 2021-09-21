/*global console*/


var myInputOne = document.getElementById("input1"),
	
	myInputtwo = document.getElementById("input2"),
		
	myInputthree = document.getElementById("input3"),
		
	myInputfour = document.getElementById("input4"),
	
	myButton = document.getElementById("button");


window.onload = function () {
	
	"use strict";
	
	
	myInputOne.setAttribute("required", "");
	
	myInputtwo.setAttribute("required", "");
	
	myInputthree.setAttribute("required", "");
	
	myInputfour.setAttribute("required", "");

	
};



myButton.onclick = function () {
	
	'use strict';
	
	if (myInputthree.value != myInputfour.value) {
		
		alert('password not Rematch');
	}else {
		myButton.setAttribute("formaction", "../home/homepage.html");
	}
};
