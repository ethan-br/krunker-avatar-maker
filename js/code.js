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
	var hatTypeValue = document.getElementById("hatTypeSelect").value;
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
	var beardTypeValue = document.getElementById("beardTypeSelect").value;
	var beardColorValue = document.getElementById("beardColorSelect").value;
	if (beardTypeValue == "trim") {
		if (beardColorValue == "black") {
			document.getElementById("imageBeard").src = "assets/beard/trim/black.png"
		}
		else if (beardColorValue == "ginger") {
			document.getElementById("imageBeard").src = "assets/beard/trim/ginger.png"
		}
		else if (beardColorValue == "gray") {
			document.getElementById("imageBeard").src = "assets/beard/trim/gray.png"
		}
		else if (beardColorValue == "darkGray") {
			document.getElementById("imageBeard").src = "assets/beard/trim/dark_gray.png"
		}
		else if (beardColorValue == "blond") {
			document.getElementById("imageBeard").src = "assets/beard/trim/blond.png"
		}
		else {
			document.getElementById("imageBeard").src = "assets/beard/trim/brown.png"
		}
	}
	else if (beardTypeValue == "full") {
		if (beardColorValue == "black") {
			document.getElementById("imageBeard").src = "assets/beard/full/black.png"
		}
		else if (beardColorValue == "ginger") {
			document.getElementById("imageBeard").src = "assets/beard/full/ginger.png"
		}
		else if (beardColorValue == "gray") {
			document.getElementById("imageBeard").src = "assets/beard/full/gray.png"
		}
		else if (beardColorValue == "darkGray") {
			document.getElementById("imageBeard").src = "assets/beard/full/dark_gray.png"
		}
		else if (beardColorValue == "blond") {
			document.getElementById("imageBeard").src = "assets/beard/full/blond.png"
		}
		else {
			document.getElementById("imageBeard").src = "assets/beard/full/brown.png"
		}
	}
	else if (beardTypeValue == "goatie") {
		if (beardColorValue == "black") {
			document.getElementById("imageBeard").src = "assets/beard/goatie/black.png"
		}
		else if (beardColorValue == "ginger") {
			document.getElementById("imageBeard").src = "assets/beard/goatie/ginger.png"
		}
		else if (beardColorValue == "gray") {
			document.getElementById("imageBeard").src = "assets/beard/goatie/gray.png"
		}
		else if (beardColorValue == "darkGray") {
			document.getElementById("imageBeard").src = "assets/beard/goatie/dark_gray.png"
		}
		else if (beardColorValue == "blond") {
			document.getElementById("imageBeard").src = "assets/beard/goatie/blond.png"
		}
		else {
			document.getElementById("imageBeard").src = "assets/beard/goatie/brown.png"
		}
	}
	else {
		document.getElementById("imageBeard").src = "assets/none.png"
	}
	console.log("Beard type changed to " + beardTypeValue + ".")
}

function beardColor() {
	var beardColorValue = document.getElementById("beardColorSelect").value;
	var beardTypeValue = document.getElementById("beardTypeSelect").value;
	if (beardColorValue == "black") {
		if (beardTypeValue == "trim") {
			document.getElementById("imageBeard").src = "assets/beard/trim/black.png"
		}
		else if (beardTypeValue == "full") {
			document.getElementById("imageBeard").src = "assets/beard/full/black.png"
		}
		else if (beardTypeValue == "goatie") {
			document.getElementById("imageBeard").src = "assets/beard/goatie/black.png"
		}
		else {
			document.getElementById("imageBeard").src = "assets/none.png"
		}
	}
	else if (beardColorValue == "ginger") {
		if (beardTypeValue == "trim") {
			document.getElementById("imageBeard").src = "assets/beard/trim/ginger.png"
		}
		else if (beardTypeValue == "full") {
			document.getElementById("imageBeard").src = "assets/beard/full/ginger.png"
		}
		else if (beardTypeValue == "goatie") {
			document.getElementById("imageBeard").src = "assets/beard/goatie/ginger.png"
		}
		else {
			document.getElementById("imageBeard").src = "assets/none.png"
		}
	}
	else if (beardColorValue == "gray") {
		if (beardTypeValue == "trim") {
			document.getElementById("imageBeard").src = "assets/beard/trim/gray.png"
		}
		else if (beardTypeValue == "full") {
			document.getElementById("imageBeard").src = "assets/beard/full/gray.png"
		}
		else if (beardTypeValue == "goatie") {
			document.getElementById("imageBeard").src = "assets/beard/goatie/gray.png"
		}
		else {
			document.getElementById("imageBeard").src = "assets/none.png"
		}
	}
	else if (beardColorValue == "darkGray") {
		if (beardTypeValue == "trim") {
			document.getElementById("imageBeard").src = "assets/beard/trim/dark_gray.png"
		}
		else if (beardTypeValue == "full") {
			document.getElementById("imageBeard").src = "assets/beard/full/dark_gray.png"
		}
		else if (beardTypeValue == "goatie") {
			document.getElementById("imageBeard").src = "assets/beard/goatie/dark_gray.png"
		}
		else {
			document.getElementById("imageBeard").src = "assets/none.png"
		}
	}
	else if (beardColorValue == "blond") {
		if (beardTypeValue == "trim") {
			document.getElementById("imageBeard").src = "assets/beard/trim/blond.png"
		}
		else if (beardTypeValue == "full") {
			document.getElementById("imageBeard").src = "assets/beard/full/blond.png"
		}
		else if (beardTypeValue == "goatie") {
			document.getElementById("imageBeard").src = "assets/beard/goatie/blond.png"
		}
		else {
			document.getElementById("imageBeard").src = "assets/none.png"
		}
	}
	else {
		if (beardTypeValue == "trim") {
			document.getElementById("imageBeard").src = "assets/beard/trim/brown.png"
		}
		else if (beardTypeValue == "full") {
			document.getElementById("imageBeard").src = "assets/beard/full/brown.png"
		}
		else if (beardTypeValue == "goatie") {
			document.getElementById("imageBeard").src = "assets/beard/goatie/brown.png"
		}
		else {
			document.getElementById("imageBeard").src = "assets/none.png"
		}
	}
	console.log("Beard color changed to " + beardColorValue + ".")
}

function hatType() {
	var hatTypeValue = document.getElementById("hatTypeSelect").value;
	var hatColorValue = document.getElementById("hatColorSelect").value;
	var hairTypeValue = document.getElementById("hairTypeSelect").value;
	if (hairTypeValue != "none") {
		imageHat.style.visibility = 'visible';
		if (hatTypeValue == "classic") {
			if (hairTypeValue == "puff" || "afro") {
				imageHair.style.visibility = 'hidden';
			}
			else {
				imageHair.style.visibility = 'visible';
			}
			if (hatColorValue == "blue") {
				document.getElementById("imageHat").src = "assets/hat/classic/blue.png"
			}
			else if (hatColorValue == "brown") {
				document.getElementById("imageHat").src = "assets/hat/classic/brown.png"
			}
			else if (hatColorValue == "darkBrown") {
				document.getElementById("imageHat").src = "assets/hat/classic/dark_brown.png"
			}
			else if (hatColorValue == "gray") {
				document.getElementById("imageHat").src = "assets/hat/classic/gray.png"
			}
			else if (hatColorValue == "green") {
				document.getElementById("imageHat").src = "assets/hat/classic/green.png"
			}
			else if (hatColorValue == "lightBrown") {
				document.getElementById("imageHat").src = "assets/hat/classic/light_brown.png"
			}
			else if (hatColorValue == "yellow") {
				document.getElementById("imageHat").src = "assets/hat/classic/yellow.png"
			}
			else {
				document.getElementById("imageHat").src = "assets/hat/classic/black.png"
			}
		}
		else if (hatTypeValue == "long") {
			if (hairTypeValue == "puff" || "afro") {
				imageHair.style.visibility = 'hidden';
			}
			else {
				imageHair.style.visibility = 'visible';
			}
			if (hatColorValue == "blue") {
				document.getElementById("imageHat").src = "assets/hat/long/blue.png"
			}
			else if (hatColorValue == "brown") {
				document.getElementById("imageHat").src = "assets/hat/long/brown.png"
			}
			else if (hatColorValue == "darkBrown") {
				document.getElementById("imageHat").src = "assets/hat/long/dark_brown.png"
			}
			else if (hatColorValue == "gray") {
				document.getElementById("imageHat").src = "assets/hat/long/gray.png"
			}
			else if (hatColorValue == "green") {
				document.getElementById("imageHat").src = "assets/hat/long/green.png"
			}
			else if (hatColorValue == "lightBrown") {
				document.getElementById("imageHat").src = "assets/hat/long/light_brown.png"
			}
			else if (hatColorValue == "yellow") {
				document.getElementById("imageHat").src = "assets/hat/long/yellow.png"
			}
			else {
				document.getElementById("imageHat").src = "assets/hat/long/black.png"
			}
		}
		else if (hatTypeValue == "cap") {
			if (hairTypeValue == "puff" || "afro") {
				imageHair.style.visibility = 'hidden';
			}
			else {
				imageHair.style.visibility = 'visible';
			}
			if (hatColorValue == "blue") {
				document.getElementById("imageHat").src = "assets/hat/cap/blue.png"
			}
			else if (hatColorValue == "brown") {
				document.getElementById("imageHat").src = "assets/hat/cap/brown.png"
			}
			else if (hatColorValue == "darkBrown") {
				document.getElementById("imageHat").src = "assets/hat/cap/dark_brown.png"
			}
			else if (hatColorValue == "gray") {
				document.getElementById("imageHat").src = "assets/hat/cap/gray.png"
			}
			else if (hatColorValue == "green") {
				document.getElementById("imageHat").src = "assets/hat/cap/green.png"
			}
			else if (hatColorValue == "lightBrown") {
				document.getElementById("imageHat").src = "assets/hat/cap/light_brown.png"
			}
			else if (hatColorValue == "yellow") {
				document.getElementById("imageHat").src = "assets/hat/cap/yellow.png"
			}
			else {
				document.getElementById("imageHat").src = "assets/hat/cap/black.png"
			}
		}
		else if (hatTypeValue == "bandana") {
			if (hairTypeValue == "puff" || "afro") {
				imageHair.style.visibility = 'hidden';
			}
			else {
				imageHair.style.visibility = 'visible';
			}
			if (hatColorValue == "blue") {
				document.getElementById("imageHat").src = "assets/hat/bandana/blue.png"
			}
			else if (hatColorValue == "brown") {
				document.getElementById("imageHat").src = "assets/hat/bandana/brown.png"
			}
			else if (hatColorValue == "darkBrown") {
				document.getElementById("imageHat").src = "assets/hat/bandana/dark_brown.png"
			}
			else if (hatColorValue == "gray") {
				document.getElementById("imageHat").src = "assets/hat/bandana/gray.png"
			}
			else if (hatColorValue == "green") {
				document.getElementById("imageHat").src = "assets/hat/bandana/green.png"
			}
			else if (hatColorValue == "lightBrown") {
				document.getElementById("imageHat").src = "assets/hat/bandana/light_brown.png"
			}
			else if (hatColorValue == "yellow") {
				document.getElementById("imageHat").src = "assets/hat/bandana/yellow.png"
			}
			else {
				document.getElementById("imageHat").src = "assets/hat/bandana/black.png"
			}
		}
		else if (hatTypeValue == "headband") {
			if (hatColorValue == "blue") {
				document.getElementById("imageHat").src = "assets/hat/headband/blue.png"
			}
			else if (hatColorValue == "brown") {
				document.getElementById("imageHat").src = "assets/hat/headband/brown.png"
			}
			else if (hatColorValue == "darkBrown") {
				document.getElementById("imageHat").src = "assets/hat/headband/dark_brown.png"
			}
			else if (hatColorValue == "gray") {
				document.getElementById("imageHat").src = "assets/hat/headband/gray.png"
			}
			else if (hatColorValue == "green") {
				document.getElementById("imageHat").src = "assets/hat/headband/green.png"
			}
			else if (hatColorValue == "lightBrown") {
				document.getElementById("imageHat").src = "assets/hat/headband/light_brown.png"
			}
			else if (hatColorValue == "yellow") {
				document.getElementById("imageHat").src = "assets/hat/headband/yellow.png"
			}
			else {
				document.getElementById("imageHat").src = "assets/hat/headband/black.png"
			}
		}
		else {
			document.getElementById("imageHat").src = "assets/none.png"
			imageHair.style.visibility = 'visible';
		}
	}
	else {
		imageHat.style.visibility = 'hidden';
	}
	console.log("Hat type changed to " + hatTypeValue + ".")
}

function hatColor() {
	var hatColorValue = document.getElementById("hatColorSelect").value;
	var hatTypeValue = document.getElementById("hatTypeSelect").value;
	var hairTypeValue = document.getElementById("hairTypeSelect").value;
	if (hatTypeValue != "none") {
		imageHair.style.visibility = 'visible';
		if (hatColorValue == "blue") {
			if (hatTypeValue == "long") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/long/blue.png"
			}
			else if (hatTypeValue == "cap") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/cap/blue.png"
			}
			else if (hatTypeValue == "bandana") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/bandana/blue.png"
			}
			else if (hatTypeValue == "headband") {
				document.getElementById("imageHat").src = "assets/hat/headband/blue.png"
			}
			else {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/classic/blue.png"
			}
		}
		else if (hatColorValue == "brown") {
			if (hatTypeValue == "long") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/long/brown.png"
			}
			else if (hatTypeValue == "cap") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/cap/brown.png"
			}
			else if (hatTypeValue == "bandana") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/bandana/brown.png"
			}
			else if (hatTypeValue == "headband") {
				document.getElementById("imageHat").src = "assets/hat/headband/brown.png"
			}
			else {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/classic/brown.png"
			}
		}
		else if (hatColorValue == "darkBrown") {
			if (hatTypeValue == "long") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/long/dark_brown.png"
			}
			else if (hatTypeValue == "cap") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/cap/dark_brown.png"
			}
			else if (hatTypeValue == "bandana") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/bandana/dark_brown.png"
			}
			else if (hatTypeValue == "headband") {
				document.getElementById("imageHat").src = "assets/hat/headband/dark_brown.png"
			}
			else {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/classic/dark_brown.png"
			}
		}
		else if (hatColorValue == "gray") {
			if (hatTypeValue == "long") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/long/gray.png"
			}
			else if (hatTypeValue == "cap") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/cap/gray.png"
			}
			else if (hatTypeValue == "bandana") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/bandana/gray.png"
			}
			else if (hatTypeValue == "headband") {
				document.getElementById("imageHat").src = "assets/hat/headband/gray.png"
			}
			else {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/classic/gray.png"
			}
		}
		else if (hatColorValue == "green") {
			if (hatTypeValue == "long") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/long/green.png"
			}
			else if (hatTypeValue == "cap") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/cap/green.png"
			}
			else if (hatTypeValue == "bandana") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/bandana/green.png"
			}
			else if (hatTypeValue == "headband") {
				document.getElementById("imageHat").src = "assets/hat/headband/green.png"
			}
			else {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/classic/green.png"
			}
		}
		else if (hatColorValue == "lightBrown") {
			if (hatTypeValue == "long") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/long/light_brown.png"
			}
			else if (hatTypeValue == "cap") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/cap/light_brown.png"
			}
			else if (hatTypeValue == "bandana") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/bandana/light_brown.png"
			}
			else if (hatTypeValue == "headband") {
				document.getElementById("imageHat").src = "assets/hat/headband/light_brown.png"
			}
			else {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/classic/light_brown.png"
			}
		}
		else if (hatColorValue == "yellow") {
			if (hatTypeValue == "long") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/long/yellow.png"
			}
			else if (hatTypeValue == "cap") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/cap/yellow.png"
			}
			else if (hatTypeValue == "bandana") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/bandana/yellow.png"
			}
			else if (hatTypeValue == "headband") {
				document.getElementById("imageHat").src = "assets/hat/headband/yellow.png"
			}
			else {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/classic/yellow.png"
			}
		}
		else {
			if (hatTypeValue == "long") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/long/black.png"
			}
			else if (hatTypeValue == "cap") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/cap/black.png"
			}
			else if (hatTypeValue == "bandana") {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/bandana/black.png"
			}
			else if (hatTypeValue == "headband") {
				document.getElementById("imageHat").src = "assets/hat/headband/black.png"
			}
			else {
				if (hairTypeValue ==  "puff" || "afro") {
					imageHair.style.visibility = 'hidden';
				}
				else {
					imageHair.style.visibility = 'visible';
				}
				document.getElementById("imageHat").src = "assets/hat/classic/black.png"
			}
		}
	}
	else {
		imageHat.style.visibility = 'hidden';
	}
	console.log("Hat color changed to " + hatColorValue + ".")
}

function clothesType() {
	console.log("Clothes type changed to " + clothesTypeValue + ".")
}

function clothesColor() {
	console.log("Clothes color changed to " + clothesColorValue + ".")
}

function accentColor() {
	console.log("Accent color changed to " + accentColorValue +  ".")
}
