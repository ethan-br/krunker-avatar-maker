function skin() {
	var skinValue = document.getElementById("skinSelect");
	if (skinValue.value == "tan"){
		document.getElementById("imageSkin").src = "assets/skin/tan.png"}
	else if (skinValue.value == "sunburnt"){
		document.getElementById("imageSkin").src = "assets/skin/sunburnt.png"}
	else if (skinValue.value == "black"){
		document.getElementById("imageSkin").src = "assets/skin/black.png"}
	else if (skinValue.value == "alien"){
		document.getElementById("imageSkin").src = "assets/skin/alien.png"}
	else if (skinValue.value == "infected"){
		document.getElementById("imageSkin").src = "assets/skin/infected.png"}
	else{
		document.getElementById("imageSkin").src = "assets/skin/white.png"}
	console.log("Hair type changed to " + skinValue.value + ".")
}

function hairType() {
	var hairType = document.getElementById("hairTypeSelect");
	var hairColor = document.getElementById("hairColorSelect");
	if (hairColor.value == "black"){
		
	console.log("hair type changed")
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
