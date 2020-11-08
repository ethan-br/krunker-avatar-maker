console.log("window has loaded");
var hairTypeValue = document.getElementById("hairTypeSelect").value;
var hairColorValue = document.getElementById("hairColorSelect").value;
var backHairValue = document.getElementById("___").value;
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
	console.log("hair color changed")
}

function backHair() {
	console.log("back hair changed")
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
