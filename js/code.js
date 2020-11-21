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
	var clothesTypeValue = document.getElementById("clothesTypeSelect").value;
	var clothesColorValue = document.getElementById("clothesColorSelect").value;
	var accentColorValue = document.getElementById("accentColorSelect").value;
	if (clothesTypeValue == "hunter") {
		accentColor()
		imageHair.style.visibility = 'visible';
		imageHat.style.visibility = 'visible';
		if (clothesColorValue == "brown") {
			document.getElementById("imageClothes").src = "assets/clothes/hunter/brown.png"
		}
		else if (clothesColorValue == "blue") {
			document.getElementById("imageClothes").src = "assets/clothes/hunter/blue.png"
		}
		else if (clothesColorValue == "green") {
			document.getElementById("imageClothes").src = "assets/clothes/hunter/green.png"
		}
		else if (clothesColorValue == "darkBlue") {
			document.getElementById("imageClothes").src = "assets/clothes/hunter/dark_blue.png"
		}
		else if (clothesColorValue == "lightBrown") {
			document.getElementById("imageClothes").src = "assets/clothes/hunter/light_brown.png"
		}
		else if (clothesColorValue == "darkGray") {
			document.getElementById("imageClothes").src = "assets/clothes/hunter/dark_gray.png"
		}
		else if (clothesColorValue == "yellow") {
			document.getElementById("imageClothes").src = "assets/clothes/hunter/yellow.png"
		}
		else if (clothesColorValue == "lightGray") {
			document.getElementById("imageClothes").src = "assets/clothes/hunter/light_gray.png"
		}
		else if (clothesColorValue == "white") {
			document.getElementById("imageClothes").src = "assets/clothes/hunter/white.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/hunter/black.png"
		}
	}
	else if (clothesTypeValue == "runNGun") {
		accentColor()
		imageHair.style.visibility = 'visible';
		imageHat.style.visibility = 'visible';
		if (clothesColorValue == "brown") {
			document.getElementById("imageClothes").src = "assets/clothes/run_n_gun/brown.png"
		}
		else if (clothesColorValue == "blue") {
			document.getElementById("imageClothes").src = "assets/clothes/run_n_gun/blue.png"
		}
		else if (clothesColorValue == "green") {
			document.getElementById("imageClothes").src = "assets/clothes/run_n_gun/green.png"
		}
		else if (clothesColorValue == "darkBlue") {
			document.getElementById("imageClothes").src = "assets/clothes/run_n_gun/dark_blue.png"
		}
		else if (clothesColorValue == "lightBrown") {
			document.getElementById("imageClothes").src = "assets/clothes/run_n_gun/light_brown.png"
		}
		else if (clothesColorValue == "darkGray") {
			document.getElementById("imageClothes").src = "assets/clothes/run_n_gun/dark_gray.png"
		}
		else if (clothesColorValue == "yellow") {
			document.getElementById("imageClothes").src = "assets/clothes/run_n_gun/yellow.png"
		}
		else if (clothesColorValue == "lightGray") {
			document.getElementById("imageClothes").src = "assets/clothes/run_n_gun/light_gray.png"
		}
		else if (clothesColorValue == "white") {
			document.getElementById("imageClothes").src = "assets/clothes/run_n_gun/white.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/run_n_gun/black.png"
		}
	}
	else if (clothesTypeValue == "sprayNPray") {
		accentColor()
		imageHair.style.visibility = 'visible';
		imageHat.style.visibility = 'visible';
		if (clothesColorValue == "brown") {
			document.getElementById("imageClothes").src = "assets/clothes/spray_n_pray/brown.png"
		}
		else if (clothesColorValue == "blue") {
			document.getElementById("imageClothes").src = "assets/clothes/spray_n_pray/blue.png"
		}
		else if (clothesColorValue == "green") {
			document.getElementById("imageClothes").src = "assets/clothes/spray_n_pray/green.png"
		}
		else if (clothesColorValue == "darkBlue") {
			document.getElementById("imageClothes").src = "assets/clothes/spray_n_pray/dark_blue.png"
		}
		else if (clothesColorValue == "lightBrown") {
			document.getElementById("imageClothes").src = "assets/clothes/spray_n_pray/light_brown.png"
		}
		else if (clothesColorValue == "darkGray") {
			document.getElementById("imageClothes").src = "assets/clothes/spray_n_pray/dark_gray.png"
		}
		else if (clothesColorValue == "yellow") {
			document.getElementById("imageClothes").src = "assets/clothes/spray_n_pray/yellow.png"
		}
		else if (clothesColorValue == "lightGray") {
			document.getElementById("imageClothes").src = "assets/clothes/spray_n_pray/light_gray.png"
		}
		else if (clothesColorValue == "white") {
			document.getElementById("imageClothes").src = "assets/clothes/spray_n_pray/white.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/spray_n_pray/black.png"
		}
	}
	else if (clothesTypeValue == "vince") {
		accentColor()
		imageHair.style.visibility = 'visible';
		imageHat.style.visibility = 'visible';
		if (clothesColorValue == "brown") {
			document.getElementById("imageClothes").src = "assets/clothes/vince/brown.png"
		}
		else if (clothesColorValue == "blue") {
			document.getElementById("imageClothes").src = "assets/clothes/vince/blue.png"
		}
		else if (clothesColorValue == "green") {
			document.getElementById("imageClothes").src = "assets/clothes/vince/green.png"
		}
		else if (clothesColorValue == "darkBlue") {
			document.getElementById("imageClothes").src = "assets/clothes/vince/dark_blue.png"
		}
		else if (clothesColorValue == "lightBrown") {
			document.getElementById("imageClothes").src = "assets/clothes/vince/light_brown.png"
		}
		else if (clothesColorValue == "darkGray") {
			document.getElementById("imageClothes").src = "assets/clothes/vince/dark_gray.png"
		}
		else if (clothesColorValue == "yellow") {
			document.getElementById("imageClothes").src = "assets/clothes/vince/yellow.png"
		}
		else if (clothesColorValue == "lightGray") {
			document.getElementById("imageClothes").src = "assets/clothes/vince/light_gray.png"
		}
		else if (clothesColorValue == "white") {
			document.getElementById("imageClothes").src = "assets/clothes/vince/white.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/vince/black.png"
		}
	}
	else if (clothesTypeValue == "detective") {
		accentColor()
		imageHair.style.visibility = 'visible';
		imageHat.style.visibility = 'visible';
		if (clothesColorValue == "brown") {
			document.getElementById("imageClothes").src = "assets/clothes/detective/brown.png"
		}
		else if (clothesColorValue == "blue") {
			document.getElementById("imageClothes").src = "assets/clothes/detective/blue.png"
		}
		else if (clothesColorValue == "green") {
			document.getElementById("imageClothes").src = "assets/clothes/detective/green.png"
		}
		else if (clothesColorValue == "darkBlue") {
			document.getElementById("imageClothes").src = "assets/clothes/detective/dark_blue.png"
		}
		else if (clothesColorValue == "lightBrown") {
			document.getElementById("imageClothes").src = "assets/clothes/detective/light_brown.png"
		}
		else if (clothesColorValue == "darkGray") {
			document.getElementById("imageClothes").src = "assets/clothes/detective/dark_gray.png"
		}
		else if (clothesColorValue == "yellow") {
			document.getElementById("imageClothes").src = "assets/clothes/detective/yellow.png"
		}
		else if (clothesColorValue == "lightGray") {
			document.getElementById("imageClothes").src = "assets/clothes/detective/light_gray.png"
		}
		else if (clothesColorValue == "white") {
			document.getElementById("imageClothes").src = "assets/clothes/detective/white.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/detective/black.png"
		}
	}
	else if (clothesTypeValue == "marksman") {
		accentColor()
		imageHair.style.visibility = 'visible';
		imageHat.style.visibility = 'visible';
		if (clothesColorValue == "brown") {
			document.getElementById("imageClothes").src = "assets/clothes/marksman/brown.png"
		}
		else if (clothesColorValue == "blue") {
			document.getElementById("imageClothes").src = "assets/clothes/marksman/blue.png"
		}
		else if (clothesColorValue == "green") {
			document.getElementById("imageClothes").src = "assets/clothes/marksman/green.png"
		}
		else if (clothesColorValue == "darkBlue") {
			document.getElementById("imageClothes").src = "assets/clothes/marksman/dark_blue.png"
		}
		else if (clothesColorValue == "lightBrown") {
			document.getElementById("imageClothes").src = "assets/clothes/marksman/light_brown.png"
		}
		else if (clothesColorValue == "darkGray") {
			document.getElementById("imageClothes").src = "assets/clothes/marksman/dark_gray.png"
		}
		else if (clothesColorValue == "yellow") {
			document.getElementById("imageClothes").src = "assets/clothes/marksman/yellow.png"
		}
		else if (clothesColorValue == "lightGray") {
			document.getElementById("imageClothes").src = "assets/clothes/marksman/light_gray.png"
		}
		else if (clothesColorValue == "white") {
			document.getElementById("imageClothes").src = "assets/clothes/marksman/white.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/marksman/black.png"
		}
	}
	else if (clothesTypeValue == "rocketeer") {
		accentColor()
		imageHair.style.visibility = 'visible';
		imageHat.style.visibility = 'visible';
		if (clothesColorValue == "brown") {
			document.getElementById("imageClothes").src = "assets/clothes/rocketeer/brown.png"
		}
		else if (clothesColorValue == "blue") {
			document.getElementById("imageClothes").src = "assets/clothes/rocketeer/blue.png"
		}
		else if (clothesColorValue == "green") {
			document.getElementById("imageClothes").src = "assets/clothes/rocketeer/green.png"
		}
		else if (clothesColorValue == "darkBlue") {
			document.getElementById("imageClothes").src = "assets/clothes/rocketeer/dark_blue.png"
		}
		else if (clothesColorValue == "lightBrown") {
			document.getElementById("imageClothes").src = "assets/clothes/rocketeer/light_brown.png"
		}
		else if (clothesColorValue == "darkGray") {
			document.getElementById("imageClothes").src = "assets/clothes/rocketeer/dark_gray.png"
		}
		else if (clothesColorValue == "yellow") {
			document.getElementById("imageClothes").src = "assets/clothes/rocketeer/yellow.png"
		}
		else if (clothesColorValue == "lightGray") {
			document.getElementById("imageClothes").src = "assets/clothes/rocketeer/light_gray.png"
		}
		else if (clothesColorValue == "white") {
			document.getElementById("imageClothes").src = "assets/clothes/rocketeer/white.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/rocketeer/black.png"
		}
	}
	else if (clothesTypeValue == "agent") {
		accentColor()
		imageHair.style.visibility = 'visible';
		imageHat.style.visibility = 'visible';
		if (clothesColorValue == "brown") {
			document.getElementById("imageClothes").src = "assets/clothes/agent/brown.png"
		}
		else if (clothesColorValue == "blue") {
			document.getElementById("imageClothes").src = "assets/clothes/agent/blue.png"
		}
		else if (clothesColorValue == "green") {
			document.getElementById("imageClothes").src = "assets/clothes/agent/green.png"
		}
		else if (clothesColorValue == "darkBlue") {
			document.getElementById("imageClothes").src = "assets/clothes/agent/dark_blue.png"
		}
		else if (clothesColorValue == "lightBrown") {
			document.getElementById("imageClothes").src = "assets/clothes/agent/light_brown.png"
		}
		else if (clothesColorValue == "darkGray") {
			document.getElementById("imageClothes").src = "assets/clothes/agent/dark_gray.png"
		}
		else if (clothesColorValue == "yellow") {
			document.getElementById("imageClothes").src = "assets/clothes/agent/yellow.png"
		}
		else if (clothesColorValue == "lightGray") {
			document.getElementById("imageClothes").src = "assets/clothes/agent/light_gray.png"
		}
		else if (clothesColorValue == "white") {
			document.getElementById("imageClothes").src = "assets/clothes/agent/white.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/agent/black.png"
		}
	}
	else if (clothesTypeValue == "commando") {
		accentColor()
		imageHair.style.visibility = 'visible';
		imageHat.style.visibility = 'visible';
		if (clothesColorValue == "brown") {
			document.getElementById("imageClothes").src = "assets/clothes/commando/brown.png"
		}
		else if (clothesColorValue == "blue") {
			document.getElementById("imageClothes").src = "assets/clothes/commando/blue.png"
		}
		else if (clothesColorValue == "green") {
			document.getElementById("imageClothes").src = "assets/clothes/commando/green.png"
		}
		else if (clothesColorValue == "darkBlue") {
			document.getElementById("imageClothes").src = "assets/clothes/commando/dark_blue.png"
		}
		else if (clothesColorValue == "lightBrown") {
			document.getElementById("imageClothes").src = "assets/clothes/commando/light_brown.png"
		}
		else if (clothesColorValue == "darkGray") {
			document.getElementById("imageClothes").src = "assets/clothes/commando/dark_gray.png"
		}
		else if (clothesColorValue == "yellow") {
			document.getElementById("imageClothes").src = "assets/clothes/commando/yellow.png"
		}
		else if (clothesColorValue == "lightGray") {
			document.getElementById("imageClothes").src = "assets/clothes/commando/light_gray.png"
		}
		else if (clothesColorValue == "white") {
			document.getElementById("imageClothes").src = "assets/clothes/commando/white.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/commando/black.png"
		}
	}
	else if (clothesTypeValue == "bowman") {
		accentColor()
		imageHair.style.visibility = 'visible';
		imageHat.style.visibility = 'visible';
		if (clothesColorValue == "brown") {
			document.getElementById("imageClothes").src = "assets/clothes/bowman/brown.png"
		}
		else if (clothesColorValue == "blue") {
			document.getElementById("imageClothes").src = "assets/clothes/bowman/blue.png"
		}
		else if (clothesColorValue == "green") {
			document.getElementById("imageClothes").src = "assets/clothes/bowman/green.png"
		}
		else if (clothesColorValue == "darkBlue") {
			document.getElementById("imageClothes").src = "assets/clothes/bowman/dark_blue.png"
		}
		else if (clothesColorValue == "lightBrown") {
			document.getElementById("imageClothes").src = "assets/clothes/bowman/light_brown.png"
		}
		else if (clothesColorValue == "darkGray") {
			document.getElementById("imageClothes").src = "assets/clothes/bowman/dark_gray.png"
		}
		else if (clothesColorValue == "yellow") {
			document.getElementById("imageClothes").src = "assets/clothes/bowman/yellow.png"
		}
		else if (clothesColorValue == "lightGray") {
			document.getElementById("imageClothes").src = "assets/clothes/bowman/light_gray.png"
		}
		else if (clothesColorValue == "white") {
			document.getElementById("imageClothes").src = "assets/clothes/bowman/white.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/bowman/black.png"
		}
	}
	else if (clothesTypeValue == "deagler") {
		accentColor()
		imageHair.style.visibility = 'visible';
		imageHat.style.visibility = 'visible';
		if (clothesColorValue == "brown") {
			document.getElementById("imageClothes").src = "assets/clothes/deagler/brown.png"
		}
		else if (clothesColorValue == "blue") {
			document.getElementById("imageClothes").src = "assets/clothes/deagler/blue.png"
		}
		else if (clothesColorValue == "green") {
			document.getElementById("imageClothes").src = "assets/clothes/deagler/green.png"
		}
		else if (clothesColorValue == "darkBlue") {
			document.getElementById("imageClothes").src = "assets/clothes/deagler/dark_blue.png"
		}
		else if (clothesColorValue == "lightBrown") {
			document.getElementById("imageClothes").src = "assets/clothes/deagler/light_brown.png"
		}
		else if (clothesColorValue == "darkGray") {
			document.getElementById("imageClothes").src = "assets/clothes/deagler/dark_gray.png"
		}
		else if (clothesColorValue == "yellow") {
			document.getElementById("imageClothes").src = "assets/clothes/deagler/yellow.png"
		}
		else if (clothesColorValue == "lightGray") {
			document.getElementById("imageClothes").src = "assets/clothes/deagler/light_gray.png"
		}
		else if (clothesColorValue == "white") {
			document.getElementById("imageClothes").src = "assets/clothes/deagler/white.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/deagler/black.png"
		}
	}
	else if (clothesTypeValue == "runner") {
		accentColor()
		imageHair.style.visibility = 'visible';
		imageHat.style.visibility = 'visible';
		if (clothesColorValue == "brown") {
			document.getElementById("imageClothes").src = "assets/clothes/runner/brown.png"
		}
		else if (clothesColorValue == "blue") {
			document.getElementById("imageClothes").src = "assets/clothes/runner/blue.png"
		}
		else if (clothesColorValue == "green") {
			document.getElementById("imageClothes").src = "assets/clothes/runner/green.png"
		}
		else if (clothesColorValue == "darkBlue") {
			document.getElementById("imageClothes").src = "assets/clothes/runner/dark_blue.png"
		}
		else if (clothesColorValue == "lightBrown") {
			document.getElementById("imageClothes").src = "assets/clothes/runner/light_brown.png"
		}
		else if (clothesColorValue == "darkGray") {
			document.getElementById("imageClothes").src = "assets/clothes/runner/dark_gray.png"
		}
		else if (clothesColorValue == "yellow") {
			document.getElementById("imageClothes").src = "assets/clothes/runner/yellow.png"
		}
		else if (clothesColorValue == "lightGray") {
			document.getElementById("imageClothes").src = "assets/clothes/runner/light_gray.png"
		}
		else if (clothesColorValue == "white") {
			document.getElementById("imageClothes").src = "assets/clothes/runner/white.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/runner/black.png"
		}
	}
	else if (clothesTypeValue == "trooper") {
		accentColor()
		imageHair.style.visibility = 'hidden';
		imageHat.style.visibility = 'hidden';
		if (clothesColorValue == "brown") {
			document.getElementById("imageClothes").src = "assets/clothes/trooper/brown.png"
		}
		else if (clothesColorValue == "blue") {
			document.getElementById("imageClothes").src = "assets/clothes/trooper/blue.png"
		}
		else if (clothesColorValue == "green") {
			document.getElementById("imageClothes").src = "assets/clothes/trooper/green.png"
		}
		else if (clothesColorValue == "darkBlue") {
			document.getElementById("imageClothes").src = "assets/clothes/trooper/dark_blue.png"
		}
		else if (clothesColorValue == "lightBrown") {
			document.getElementById("imageClothes").src = "assets/clothes/trooper/light_brown.png"
		}
		else if (clothesColorValue == "darkGray") {
			document.getElementById("imageClothes").src = "assets/clothes/trooper/dark_gray.png"
		}
		else if (clothesColorValue == "yellow") {
			document.getElementById("imageClothes").src = "assets/clothes/trooper/yellow.png"
		}
		else if (clothesColorValue == "lightGray") {
			document.getElementById("imageClothes").src = "assets/clothes/trooper/light_gray.png"
		}
		else if (clothesColorValue == "white") {
			document.getElementById("imageClothes").src = "assets/clothes/trooper/white.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/trooper/black.png"
		}
	}
	else {
		accentColor()
		if (clothesColorValue == "brown") {
			document.getElementById("imageClothes").src = "assets/clothes/triggerman/brown.png"
		}
		else if (clothesColorValue == "blue") {
			document.getElementById("imageClothes").src = "assets/clothes/triggerman/blue.png"
		}
		else if (clothesColorValue == "green") {
			document.getElementById("imageClothes").src = "assets/clothes/triggerman/green.png"
		}
		else if (clothesColorValue == "darkBlue") {
			document.getElementById("imageClothes").src = "assets/clothes/triggerman/dark_blue.png"
		}
		else if (clothesColorValue == "lightBrown") {
			document.getElementById("imageClothes").src = "assets/clothes/triggerman/light_brown.png"
		}
		else if (clothesColorValue == "darkGray") {
			document.getElementById("imageClothes").src = "assets/clothes/triggerman/dark_gray.png"
		}
		else if (clothesColorValue == "yellow") {
			document.getElementById("imageClothes").src = "assets/clothes/triggerman/yellow.png"
		}
		else if (clothesColorValue == "lightGray") {
			document.getElementById("imageClothes").src = "assets/clothes/triggerman/light_gray.png"
		}
		else if (clothesColorValue == "white") {
			document.getElementById("imageClothes").src = "assets/clothes/triggerman/white.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/triggerman/black.png"
		}
	}
	console.log("Clothes type changed to " + clothesTypeValue + ".")
}

function clothesColor() {
	var clothesColorValue = document.getElementById("clothesColorSelect").value;
	var clothesTypeValue = document.getElementById("clothesTypeSelect").value;
	if (clothesColorValue == "brown") {
		if (clothesTypeValue == "hunter") {
			document.getElementById("imageClothes").src = "assets/clothes/hunter/brown.png"
		}
		else if (clothesTypeValue == "runNGun") {
			document.getElementById("imageClothes").src = "assets/clothes/run_n_gun/brown.png"
		}
		else if (clothesTypeValue == "sprayNPray") {
			document.getElementById("imageClothes").src = "assets/clothes/spray_n_pray/brown.png"
		}
		else if (clothesTypeValue == "vince") {
			document.getElementById("imageClothes").src = "assets/clothes/vince/brown.png"
		}
		else if (clothesTypeValue == "detective") {
			document.getElementById("imageClothes").src = "assets/clothes/detective/brown.png"
		}
		else if (clothesTypeValue == "marksman") {
			document.getElementById("imageClothes").src = "assets/clothes/marksman/brown.png"
		}
		else if (clothesTypeValue == "rocketeer") {
			document.getElementById("imageClothes").src = "assets/clothes/rocketeer/brown.png"
		}
		else if (clothesTypeValue == "agent") {
			document.getElementById("imageClothes").src = "assets/clothes/agent/brown.png"
		}
		else if (clothesTypeValue == "commando") {
			document.getElementById("imageClothes").src = "assets/clothes/commando/brown.png"
		}
		else if (clothesTypeValue == "bowman") {
			document.getElementById("imageClothes").src = "assets/clothes/bowman/brown.png"
		}
		else if (clothesTypeValue == "deagler") {
			document.getElementById("imageClothes").src = "assets/clothes/deagler/brown.png"
		}
		else if (clothesTypeValue == "runner") {
			document.getElementById("imageClothes").src = "assets/clothes/runner/brown.png"
		}
		else if (clothesTypeValue == "trooper") {
			document.getElementById("imageClothes").src = "assets/clothes/trooper/brown.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/triggerman/brown.png"
		}
	}
	else if (clothesColorValue == "blue") {
		if (clothesTypeValue == "hunter") {
			document.getElementById("imageClothes").src = "assets/clothes/hunter/blue.png"
		}
		else if (clothesTypeValue == "runNGun") {
			document.getElementById("imageClothes").src = "assets/clothes/run_n_gun/blue.png"
		}
		else if (clothesTypeValue == "sprayNPray") {
			document.getElementById("imageClothes").src = "assets/clothes/spray_n_pray/blue.png"
		}
		else if (clothesTypeValue == "vince") {
			document.getElementById("imageClothes").src = "assets/clothes/vince/blue.png"
		}
		else if (clothesTypeValue == "detective") {
			document.getElementById("imageClothes").src = "assets/clothes/detective/blue.png"
		}
		else if (clothesTypeValue == "marksman") {
			document.getElementById("imageClothes").src = "assets/clothes/marksman/blue.png"
		}
		else if (clothesTypeValue == "rocketeer") {
			document.getElementById("imageClothes").src = "assets/clothes/rocketeer/blue.png"
		}
		else if (clothesTypeValue == "agent") {
			document.getElementById("imageClothes").src = "assets/clothes/agent/blue.png"
		}
		else if (clothesTypeValue == "commando") {
			document.getElementById("imageClothes").src = "assets/clothes/commando/blue.png"
		}
		else if (clothesTypeValue == "bowman") {
			document.getElementById("imageClothes").src = "assets/clothes/bowman/blue.png"
		}
		else if (clothesTypeValue == "deagler") {
			document.getElementById("imageClothes").src = "assets/clothes/deagler/blue.png"
		}
		else if (clothesTypeValue == "runner") {
			document.getElementById("imageClothes").src = "assets/clothes/runner/blue.png"
		}
		else if (clothesTypeValue == "trooper") {
			document.getElementById("imageClothes").src = "assets/clothes/trooper/blue.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/triggerman/blue.png"
		}
	}
	else if (clothesColorValue == "green") {
		if (clothesTypeValue == "hunter") {
			document.getElementById("imageClothes").src = "assets/clothes/hunter/green.png"
		}
		else if (clothesTypeValue == "runNGun") {
			document.getElementById("imageClothes").src = "assets/clothes/run_n_gun/green.png"
		}
		else if (clothesTypeValue == "sprayNPray") {
			document.getElementById("imageClothes").src = "assets/clothes/spray_n_pray/green.png"
		}
		else if (clothesTypeValue == "vince") {
			document.getElementById("imageClothes").src = "assets/clothes/vince/green.png"
		}
		else if (clothesTypeValue == "detective") {
			document.getElementById("imageClothes").src = "assets/clothes/detective/green.png"
		}
		else if (clothesTypeValue == "marksman") {
			document.getElementById("imageClothes").src = "assets/clothes/marksman/green.png"
		}
		else if (clothesTypeValue == "rocketeer") {
			document.getElementById("imageClothes").src = "assets/clothes/rocketeer/green.png"
		}
		else if (clothesTypeValue == "agent") {
			document.getElementById("imageClothes").src = "assets/clothes/agent/green.png"
		}
		else if (clothesTypeValue == "commando") {
			document.getElementById("imageClothes").src = "assets/clothes/commando/green.png"
		}
		else if (clothesTypeValue == "bowman") {
			document.getElementById("imageClothes").src = "assets/clothes/bowman/green.png"
		}
		else if (clothesTypeValue == "deagler") {
			document.getElementById("imageClothes").src = "assets/clothes/deagler/green.png"
		}
		else if (clothesTypeValue == "runner") {
			document.getElementById("imageClothes").src = "assets/clothes/runner/green.png"
		}
		else if (clothesTypeValue == "trooper") {
			document.getElementById("imageClothes").src = "assets/clothes/trooper/green.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/triggerman/green.png"
		}
	}
	else if (clothesColorValue == "darkBlue") {
		if (clothesTypeValue == "hunter") {
			document.getElementById("imageClothes").src = "assets/clothes/hunter/dark_blue.png"
		}
		else if (clothesTypeValue == "runNGun") {
			document.getElementById("imageClothes").src = "assets/clothes/run_n_gun/dark_blue.png"
		}
		else if (clothesTypeValue == "sprayNPray") {
			document.getElementById("imageClothes").src = "assets/clothes/spray_n_pray/dark_blue.png"
		}
		else if (clothesTypeValue == "vince") {
			document.getElementById("imageClothes").src = "assets/clothes/vince/dark_blue.png"
		}
		else if (clothesTypeValue == "detective") {
			document.getElementById("imageClothes").src = "assets/clothes/detective/dark_blue.png"
		}
		else if (clothesTypeValue == "marksman") {
			document.getElementById("imageClothes").src = "assets/clothes/marksman/dark_blue.png"
		}
		else if (clothesTypeValue == "rocketeer") {
			document.getElementById("imageClothes").src = "assets/clothes/rocketeer/dark_blue.png"
		}
		else if (clothesTypeValue == "agent") {
			document.getElementById("imageClothes").src = "assets/clothes/agent/dark_blue.png"
		}
		else if (clothesTypeValue == "commando") {
			document.getElementById("imageClothes").src = "assets/clothes/commando/dark_blue.png"
		}
		else if (clothesTypeValue == "bowman") {
			document.getElementById("imageClothes").src = "assets/clothes/bowman/dark_blue.png"
		}
		else if (clothesTypeValue == "deagler") {
			document.getElementById("imageClothes").src = "assets/clothes/deagler/dark_blue.png"
		}
		else if (clothesTypeValue == "runner") {
			document.getElementById("imageClothes").src = "assets/clothes/runner/dark_blue.png"
		}
		else if (clothesTypeValue == "trooper") {
			document.getElementById("imageClothes").src = "assets/clothes/trooper/dark_blue.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/triggerman/dark_blue.png"
		}
	}
	else if (clothesColorValue == "lightBrown") {
		if (clothesTypeValue == "hunter") {
			document.getElementById("imageClothes").src = "assets/clothes/hunter/light_brown.png"
		}
		else if (clothesTypeValue == "runNGun") {
			document.getElementById("imageClothes").src = "assets/clothes/run_n_gun/light_brown.png"
		}
		else if (clothesTypeValue == "sprayNPray") {
			document.getElementById("imageClothes").src = "assets/clothes/spray_n_pray/light_brown.png"
		}
		else if (clothesTypeValue == "vince") {
			document.getElementById("imageClothes").src = "assets/clothes/vince/light_brown.png"
		}
		else if (clothesTypeValue == "detective") {
			document.getElementById("imageClothes").src = "assets/clothes/detective/light_brown.png"
		}
		else if (clothesTypeValue == "marksman") {
			document.getElementById("imageClothes").src = "assets/clothes/marksman/light_brown.png"
		}
		else if (clothesTypeValue == "rocketeer") {
			document.getElementById("imageClothes").src = "assets/clothes/rocketeer/light_brown.png"
		}
		else if (clothesTypeValue == "agent") {
			document.getElementById("imageClothes").src = "assets/clothes/agent/light_brown.png"
		}
		else if (clothesTypeValue == "commando") {
			document.getElementById("imageClothes").src = "assets/clothes/commando/light_brown.png"
		}
		else if (clothesTypeValue == "bowman") {
			document.getElementById("imageClothes").src = "assets/clothes/bowman/light_brown.png"
		}
		else if (clothesTypeValue == "deagler") {
			document.getElementById("imageClothes").src = "assets/clothes/deagler/light_brown.png"
		}
		else if (clothesTypeValue == "runner") {
			document.getElementById("imageClothes").src = "assets/clothes/runner/light_brown.png"
		}
		else if (clothesTypeValue == "trooper") {
			document.getElementById("imageClothes").src = "assets/clothes/trooper/light_brown.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/triggerman/light_brown.png"
		}
	}
	else if (clothesColorValue == "darkGray") {
		if (clothesTypeValue == "hunter") {
			document.getElementById("imageClothes").src = "assets/clothes/hunter/dark_gray.png"
		}
		else if (clothesTypeValue == "runNGun") {
			document.getElementById("imageClothes").src = "assets/clothes/run_n_gun/dark_gray.png"
		}
		else if (clothesTypeValue == "sprayNPray") {
			document.getElementById("imageClothes").src = "assets/clothes/spray_n_pray/dark_gray.png"
		}
		else if (clothesTypeValue == "vince") {
			document.getElementById("imageClothes").src = "assets/clothes/vince/dark_gray.png"
		}
		else if (clothesTypeValue == "detective") {
			document.getElementById("imageClothes").src = "assets/clothes/detective/dark_gray.png"
		}
		else if (clothesTypeValue == "marksman") {
			document.getElementById("imageClothes").src = "assets/clothes/marksman/dark_gray.png"
		}
		else if (clothesTypeValue == "rocketeer") {
			document.getElementById("imageClothes").src = "assets/clothes/rocketeer/dark_gray.png"
		}
		else if (clothesTypeValue == "agent") {
			document.getElementById("imageClothes").src = "assets/clothes/agent/dark_gray.png"
		}
		else if (clothesTypeValue == "commando") {
			document.getElementById("imageClothes").src = "assets/clothes/commando/dark_gray.png"
		}
		else if (clothesTypeValue == "bowman") {
			document.getElementById("imageClothes").src = "assets/clothes/bowman/dark_gray.png"
		}
		else if (clothesTypeValue == "deagler") {
			document.getElementById("imageClothes").src = "assets/clothes/deagler/dark_gray.png"
		}
		else if (clothesTypeValue == "runner") {
			document.getElementById("imageClothes").src = "assets/clothes/runner/dark_gray.png"
		}
		else if (clothesTypeValue == "trooper") {
			document.getElementById("imageClothes").src = "assets/clothes/trooper/dark_gray.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/triggerman/dark_gray.png"
		}
	}
	else if (clothesColorValue == "yellow") {
		if (clothesTypeValue == "hunter") {
			document.getElementById("imageClothes").src = "assets/clothes/hunter/yellow.png"
		}
		else if (clothesTypeValue == "runNGun") {
			document.getElementById("imageClothes").src = "assets/clothes/run_n_gun/yellow.png"
		}
		else if (clothesTypeValue == "sprayNPray") {
			document.getElementById("imageClothes").src = "assets/clothes/spray_n_pray/yellow.png"
		}
		else if (clothesTypeValue == "vince") {
			document.getElementById("imageClothes").src = "assets/clothes/vince/yellow.png"
		}
		else if (clothesTypeValue == "detective") {
			document.getElementById("imageClothes").src = "assets/clothes/detective/yellow.png"
		}
		else if (clothesTypeValue == "marksman") {
			document.getElementById("imageClothes").src = "assets/clothes/marksman/yellow.png"
		}
		else if (clothesTypeValue == "rocketeer") {
			document.getElementById("imageClothes").src = "assets/clothes/rocketeer/yellow.png"
		}
		else if (clothesTypeValue == "agent") {
			document.getElementById("imageClothes").src = "assets/clothes/agent/yellow.png"
		}
		else if (clothesTypeValue == "commando") {
			document.getElementById("imageClothes").src = "assets/clothes/commando/yellow.png"
		}
		else if (clothesTypeValue == "bowman") {
			document.getElementById("imageClothes").src = "assets/clothes/bowman/yellow.png"
		}
		else if (clothesTypeValue == "deagler") {
			document.getElementById("imageClothes").src = "assets/clothes/deagler/yellow.png"
		}
		else if (clothesTypeValue == "runner") {
			document.getElementById("imageClothes").src = "assets/clothes/runner/yellow.png"
		}
		else if (clothesTypeValue == "trooper") {
			document.getElementById("imageClothes").src = "assets/clothes/trooper/yellow.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/triggerman/yellow.png"
		}
	}
	else if (clothesColorValue == "lightGray") {
		if (clothesTypeValue == "hunter") {
			document.getElementById("imageClothes").src = "assets/clothes/hunter/light_gray.png"
		}
		else if (clothesTypeValue == "runNGun") {
			document.getElementById("imageClothes").src = "assets/clothes/run_n_gun/light_gray.png"
		}
		else if (clothesTypeValue == "sprayNPray") {
			document.getElementById("imageClothes").src = "assets/clothes/spray_n_pray/light_gray.png"
		}
		else if (clothesTypeValue == "vince") {
			document.getElementById("imageClothes").src = "assets/clothes/vince/light_gray.png"
		}
		else if (clothesTypeValue == "detective") {
			document.getElementById("imageClothes").src = "assets/clothes/detective/light_gray.png"
		}
		else if (clothesTypeValue == "marksman") {
			document.getElementById("imageClothes").src = "assets/clothes/marksman/light_gray.png"
		}
		else if (clothesTypeValue == "rocketeer") {
			document.getElementById("imageClothes").src = "assets/clothes/rocketeer/light_gray.png"
		}
		else if (clothesTypeValue == "agent") {
			document.getElementById("imageClothes").src = "assets/clothes/agent/light_gray.png"
		}
		else if (clothesTypeValue == "commando") {
			document.getElementById("imageClothes").src = "assets/clothes/commando/light_gray.png"
		}
		else if (clothesTypeValue == "bowman") {
			document.getElementById("imageClothes").src = "assets/clothes/bowman/light_gray.png"
		}
		else if (clothesTypeValue == "deagler") {
			document.getElementById("imageClothes").src = "assets/clothes/deagler/light_gray.png"
		}
		else if (clothesTypeValue == "runner") {
			document.getElementById("imageClothes").src = "assets/clothes/runner/light_gray.png"
		}
		else if (clothesTypeValue == "trooper") {
			document.getElementById("imageClothes").src = "assets/clothes/trooper/light_gray.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/triggerman/light_gray.png"
		}
	}
	else if (clothesColorValue == "white") {
		if (clothesTypeValue == "hunter") {
			document.getElementById("imageClothes").src = "assets/clothes/hunter/white.png"
		}
		else if (clothesTypeValue == "runNGun") {
			document.getElementById("imageClothes").src = "assets/clothes/run_n_gun/white.png"
		}
		else if (clothesTypeValue == "sprayNPray") {
			document.getElementById("imageClothes").src = "assets/clothes/spray_n_pray/white.png"
		}
		else if (clothesTypeValue == "vince") {
			document.getElementById("imageClothes").src = "assets/clothes/vince/white.png"
		}
		else if (clothesTypeValue == "detective") {
			document.getElementById("imageClothes").src = "assets/clothes/detective/white.png"
		}
		else if (clothesTypeValue == "marksman") {
			document.getElementById("imageClothes").src = "assets/clothes/marksman/white.png"
		}
		else if (clothesTypeValue == "rocketeer") {
			document.getElementById("imageClothes").src = "assets/clothes/rocketeer/white.png"
		}
		else if (clothesTypeValue == "agent") {
			document.getElementById("imageClothes").src = "assets/clothes/agent/white.png"
		}
		else if (clothesTypeValue == "commando") {
			document.getElementById("imageClothes").src = "assets/clothes/commando/white.png"
		}
		else if (clothesTypeValue == "bowman") {
			document.getElementById("imageClothes").src = "assets/clothes/bowman/white.png"
		}
		else if (clothesTypeValue == "deagler") {
			document.getElementById("imageClothes").src = "assets/clothes/deagler/white.png"
		}
		else if (clothesTypeValue == "runner") {
			document.getElementById("imageClothes").src = "assets/clothes/runner/white.png"
		}
		else if (clothesTypeValue == "trooper") {
			document.getElementById("imageClothes").src = "assets/clothes/trooper/white.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/triggerman/white.png"
		}
	}
	else {
		if (clothesTypeValue == "hunter") {
			document.getElementById("imageClothes").src = "assets/clothes/hunter/black.png"
		}
		else if (clothesTypeValue == "runNGun") {
			document.getElementById("imageClothes").src = "assets/clothes/run_n_gun/black.png"
		}
		else if (clothesTypeValue == "sprayNPray") {
			document.getElementById("imageClothes").src = "assets/clothes/spray_n_pray/black.png"
		}
		else if (clothesTypeValue == "vince") {
			document.getElementById("imageClothes").src = "assets/clothes/vince/black.png"
		}
		else if (clothesTypeValue == "detective") {
			document.getElementById("imageClothes").src = "assets/clothes/detective/black.png"
		}
		else if (clothesTypeValue == "marksman") {
			document.getElementById("imageClothes").src = "assets/clothes/marksman/black.png"
		}
		else if (clothesTypeValue == "rocketeer") {
			document.getElementById("imageClothes").src = "assets/clothes/rocketeer/black.png"
		}
		else if (clothesTypeValue == "agent") {
			document.getElementById("imageClothes").src = "assets/clothes/agent/black.png"
		}
		else if (clothesTypeValue == "commando") {
			document.getElementById("imageClothes").src = "assets/clothes/commando/black.png"
		}
		else if (clothesTypeValue == "bowman") {
			document.getElementById("imageClothes").src = "assets/clothes/bowman/black.png"
		}
		else if (clothesTypeValue == "deagler") {
			document.getElementById("imageClothes").src = "assets/clothes/deagler/black.png"
		}
		else if (clothesTypeValue == "runner") {
			document.getElementById("imageClothes").src = "assets/clothes/runner/black.png"
		}
		else if (clothesTypeValue == "trooper") {
			document.getElementById("imageClothes").src = "assets/clothes/trooper/black.png"
		}
		else {
			document.getElementById("imageClothes").src = "assets/clothes/triggerman/black.png"
		}
	}
	console.log("Clothes color changed to " + clothesColorValue + ".")
}

function accentColor() {
	var accentColorValue = document.getElementById("accentColorSelect").value;
	var clothesTypeValue = document.getElementById("clothesTypeSelect").value;
	if (clothesTypeValue == "triggerman") {
		if (accentColorValue == "red") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/triggerman/red.png"
		}
		else if (accentColorValue == "lime") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/triggerman/lime.png"
		}
		else if (accentColorValue == "black") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/triggerman/black.png"
		}
		else if (accentColorValue == "blue") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/triggerman/blue.png"
		}
		else if (accentColorValue == "cyan") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/triggerman/cyan.png"
		}
	}
	else if (clothesTypeValue == "hunter") {
		if (accentColorValue == "red") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/hunter/red.png"
		}
		else if (accentColorValue == "lime") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/hunter/lime.png"
		}
		else if (accentColorValue == "black") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/hunter/black.png"
		}
		else if (accentColorValue == "blue") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/hunter/blue.png"
		}
		else if (accentColorValue == "cyan") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/hunter/cyan.png"
		}
	}
	else if (clothesTypeValue == "sprayNPray") {
		if (accentColorValue == "red") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/spray_n_pray/red.png"
		}
		else if (accentColorValue == "lime") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/spray_n_pray/lime.png"
		}
		else if (accentColorValue == "black") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/spray_n_pray/black.png"
		}
		else if (accentColorValue == "blue") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/spray_n_pray/blue.png"
		}
		else if (accentColorValue == "cyan") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/spray_n_pray/cyan.png"
		}
	}
	else if (clothesTypeValue == "marksman") {
		if (accentColorValue == "red") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/marksman/red.png"
		}
		else if (accentColorValue == "lime") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/marksman/lime.png"
		}
		else if (accentColorValue == "black") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/marksman/black.png"
		}
		else if (accentColorValue == "blue") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/marksman/blue.png"
		}
		else if (accentColorValue == "cyan") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/marksman/cyan.png"
		}
	}
	else if (clothesTypeValue == "commando") {
		if (accentColorValue == "red") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/commando/red.png"
		}
		else if (accentColorValue == "lime") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/commando/lime.png"
		}
		else if (accentColorValue == "black") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/commando/black.png"
		}
		else if (accentColorValue == "blue") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/commando/blue.png"
		}
		else if (accentColorValue == "cyan") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/commando/cyan.png"
		}
	}
	else if (clothesTypeValue == "bowman") {
		if (accentColorValue == "red") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/bowman/red.png"
		}
		else if (accentColorValue == "lime") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/bowman/lime.png"
		}
		else if (accentColorValue == "black") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/bowman/black.png"
		}
		else if (accentColorValue == "blue") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/bowman/blue.png"
		}
		else if (accentColorValue == "cyan") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/bowman/cyan.png"
		}
	}
	else if (clothesTypeValue == "trooper") {
		if (accentColorValue == "red") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/trooper/red.png"
		}
		else if (accentColorValue == "lime") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/trooper/lime.png"
		}
		else if (accentColorValue == "black") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/trooper/black.png"
		}
		else if (accentColorValue == "blue") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/trooper/blue.png"
		}
		else if (accentColorValue == "cyan") {
			imageAccent.style.visibility = 'visible';
			document.getElementById("imageAccent").src = "assets/accent/trooper/cyan.png"
		}
	}
	else {
		imageAccent.style.visibility = 'hidden';
	}
	console.log("Accent color changed to " + accentColorValue +  ".")
}
