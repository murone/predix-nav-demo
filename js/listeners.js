window.addEventListener("GRR", function(evt) {
	console.log("GRR");
	$('h3').html('Grove City Reman');
});

window.addEventListener("GRV", function(evt) {
	console.log("GRV");
	$('h3').html('Grove City Engine');
});

window.addEventListener("ERI", function(evt) {
	console.log("ERI");
	$('h3').html('Erie Plant');
});

window.addEventListener("TXL", function(evt) {
	console.log("TXL");
	$('h3').html('Fort Worth - Loco');
});


function doMarkSelected() {
	var appNavEl = document.querySelector('px-app-nav');
	appNavEl.markSelected(window.location.href);
}