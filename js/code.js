console.log("Window has loaded.");
var hairTypeValue = document.getElementById("hairTypeSelect").value;
var hairColorValue = document.getElementById("hairColorSelect").value;
var beardTypeValue = document.getElementById("beardTypeSelect").value;
var beatdColorValue = document.getElementById("beardColorSelect").value;
var hatTypeValue = document.getElementById("hatTypeSelect").value;
var hatColorValue = document.getElementById("hatColorSelect").value;
var clothesTypeValue = document.getElementById("clothesTypeSelect").value;
var clothesColorValue = document.getElementById("clothesColorSelect").value;
var accentColorValue = document.getElementById("accentColorSelect").value;

function skin() {
	var skinValue = document.getElementById("skinSelect").value;
	if (skinValue == "tan"){
		document.getElementById("imageSkin").src = "assets/skin/tan.png"
	}
	else if (skinValue == "sunburnt"){
		document.getElementById("imageSkin").src = "assets/skin/sunburnt.png"
	}
	else if (skinValue == "black"){
		document.getElementById("imageSkin").src = "assets/skin/black.png"
	}
	else if (skinValue == "alien"){
		document.getElementById("imageSkin").src = "assets/skin/alien.png"
	}
	else if (skinValue == "infected"){
		document.getElementById("imageSkin").src = "assets/skin/infected.png"
	}
	else{
		document.getElementById("imageSkin").src = "assets/skin/white.png"
	}
	console.log("Skin changed to " + skinValue + ".")
}

function hairType() {
	var hairTypeValue = document.getElementById("hairTypeSelect").value;
	var hairColorValue = document.getElementById("hairColorSelect").value;
	if (hairTypeValue == "trim"){
		if (hairColorValue == "black"){
			document.getElementById("imageHair").src = "assets/hair/trim/black.png"
		}
		else if (hairColorValue == "ginger"){
			document.getElementById("imageHair").src = "assets/hair/trim/ginger.png"
		}
		else if (hairColorValue == "gray"){
			document.getElementById("imageHair").src = "assets/hair/trim/gray.png"
		}
		else if (hairColorValue == "darkGray"){
			document.getElementById("imageHair").src = "assets/hair/trim/dark_gray.png"
		}
		else if (hairColorValue == "blond"){
			document.getElementById("imageHair").src = "assets/hair/trim/blond.png"
		}
		else{
			document.getElementById("imageHair").src = "assets/hair/trim/brown.png"
		}
	}
	else if (hairTypeValue == "tall"){
		if (hairColorValue == "black"){
			document.getElementById("imageHair").src = "assets/hair/tall/black.png"
		}
		else if (hairColorValue == "ginger"){
			document.getElementById("imageHair").src = "assets/hair/tall/ginger.png"
		}
		else if (hairColorValue == "gray"){
			document.getElementById("imageHair").src = "assets/hair/tall/gray.png"
		}
		else if (hairColorValue == "darkGray"){
			document.getElementById("imageHair").src = "assets/hair/tall/dark_gray.png"
		}
		else if (hairColorValue == "blond"){
			document.getElementById("imageHair").src = "assets/hair/tall/blond.png"
		}
		else{
			document.getElementById("imageHair").src = "assets/hair/tall/brown.png"
		}
	}
	else if (hairTypeValue == "afro"){
		if (hairColorValue == "black"){
			document.getElementById("imageHair").src = "assets/hair/afro/black.png"
		}
		else if (hairColorValue == "ginger"){
			document.getElementById("imageHair").src = "assets/hair/afro/ginger.png"
		}
		else if (hairColorValue == "gray"){
			document.getElementById("imageHair").src = "assets/hair/afro/gray.png"
		}
		else if (hairColorValue == "darkGray"){
			document.getElementById("imageHair").src = "assets/hair/afro/dark_gray.png"
		}
		else if (hairColorValue == "blond"){
			document.getElementById("imageHair").src = "assets/hair/afro/blond.png"
		}
		else{
			document.getElementById("imageHair").src = "assets/hair/afro/brown.png"
		}
	}
	else{
		if (hairColorValue == "black"){
			document.getElementById("imageHair").src = "assets/hair/puff/black.png"
		}
		else if (hairColorValue == "ginger"){
			document.getElementById("imageHair").src = "assets/hair/puff/ginger.png"
		}
		else if (hairColorValue == "gray"){
			document.getElementById("imageHair").src = "assets/hair/puff/gray.png"
		}
		else if (hairColorValue == "darkGray"){
			document.getElementById("imageHair").src = "assets/hair/puff/dark_gray.png"
		}
		else if (hairColorValue == "blond"){
			document.getElementById("imageHair").src = "assets/hair/puff/blond.png"
		}
		else{
			document.getElementById("imageHair").src = "assets/hair/puff/brown.png"
		}
	}
	console.log("Hair type changed to " + hairTypeValue + ".")
}

function hairColor() {
	var hairColorValue = document.getElementById("hairColorSelect").value;
	var hairTypeValue = document.getElementById("hairTypeSelect").value;
	if (hairColorValue == "black"){
		if (hairTypeValue == "trim"){
			document.getElementById("imageHair").src = "assets/hair/trim/black.png"
		}
		else if (hairTypeValue == "tall"){
			document.getElementById("imageHair").src = "assets/hair/tall/black.png"
		}
		else if (hairTypeValue == "afro"){
			document.getElementById("imageHair").src = "assets/hair/afro/black.png"
		}
		else{
			document.getElementById("imageHair").src = "assets/hair/puff/black.png"
		}
		document.getElementById("imageBackHair").src = "assets/hair/back/black.png"
	}
	else if (hairColorValue == "ginger"){
		if (hairTypeValue == "trim"){
			document.getElementById("imageHair").src = "assets/hair/trim/ginger.png"
		}
		else if (hairTypeValue == "tall"){
			document.getElementById("imageHair").src = "assets/hair/tall/ginger.png"
		}
		else if (hairTypeValue == "afro"){
			document.getElementById("imageHair").src = "assets/hair/afro/ginger.png"
		}
		else{
			document.getElementById("imageHair").src = "assets/hair/puff/ginger.png"
		}
		document.getElementById("imageBackHair").src = "assets/hair/back/ginger.png"
	}
	else if (hairColorValue == "gray"){
		if (hairTypeValue == "trim"){
			document.getElementById("imageHair").src = "assets/hair/trim/gray.png"
		}
		else if (hairTypeValue == "tall"){
			document.getElementById("imageHair").src = "assets/hair/tall/gray.png"
		}
		else if (hairTypeValue == "afro"){
			document.getElementById("imageHair").src = "assets/hair/afro/gray.png"
		}
		else{
			document.getElementById("imageHair").src = "assets/hair/puff/gray.png"
		}
		document.getElementById("imageBackHair").src = "assets/hair/back/gray.png"
	}
	else if (hairColorValue == "darkGray"){
		if (hairTypeValue == "trim"){
			document.getElementById("imageHair").src = "assets/hair/trim/dark_gray.png"
		}
		else if (hairTypeValue == "tall"){
			document.getElementById("imageHair").src = "assets/hair/tall/dark_gray.png"
		}
		else if (hairTypeValue == "afro"){
			document.getElementById("imageHair").src = "assets/hair/afro/dark_gray.png"
		}
		else{
			document.getElementById("imageHair").src = "assets/hair/puff/dark_gray.png"
		}
		document.getElementById("imageBackHair").src = "assets/hair/back/dark_gray.png"
	}
	else if (hairColorValue == "blond"){
		if (hairTypeValue == "trim"){
			document.getElementById("imageHair").src = "assets/hair/trim/blond.png"
		}
		else if (hairTypeValue == "tall"){
			document.getElementById("imageHair").src = "assets/hair/tall/blond.png"
		}
		else if (hairTypeValue == "afro"){
			document.getElementById("imageHair").src = "assets/hair/afro/blond.png"
		}
		else{
			document.getElementById("imageHair").src = "assets/hair/puff/blond.png"
		}
		document.getElementById("imageBackHair").src = "assets/hair/back/blond.png"
	}
	else{
		if (hairTypeValue == "trim"){
			document.getElementById("imageHair").src = "assets/hair/trim/brown.png"
		}
		else if (hairTypeValue == "tall"){
			document.getElementById("imageHair").src = "assets/hair/tall/brown.png"
		}
		else if (hairTypeValue == "afro"){
			document.getElementById("imageHair").src = "assets/hair/afro/brown.png"
		}
		else{
			document.getElementById("imageHair").src = "assets/hair/puff/brown.png"
		}
		document.getElementById("imageBackHair").src = "assets/hair/back/brown.png"
	}
	console.log("Hair color changed to " + hairColorValue + ".")
}

function backHair() {
	var hairColorValue = document.getElementById("hairColorSelect").value;
	if(document.getElementById('yesTickBox').checked) {
		var imageBackHair = document.getElementById('imageBackHair');
		imageBackHair.style.visibility = 'visible';
		console.log("Back hair turned on.")
	}
	else if(document.getElementById('noTickBox').checked) {
		var imageBackHair = document.getElementById('imageBackHair');
		imageBackHair.style.visibility = 'hidden';
		console.log("Back hair turned off.")
	}
	else{
		var imageBackHair = document.getElementById('imageBackHair');
		imageBackHair.style.visibility = 'visible';
		console.log("Back hair turned on.")
	}
}

function beardType() {
	console.log("beard type changed")
}

function beardColor() {
	console.log("beard color changed")
}

function hatType() {
	console.log("hat type changed")
}

function hatColor() {
	console.log("hat color changed")
}

function clothesType() {
	console.log("clothes type changed")
}

function clothesColor() {
	console.log("clothes color changed")
}

function accentColor() {
	console.log("accent changed")
}
