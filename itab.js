window.readyHandlers = [];
window.ready = function ready(handler) {
  window.readyHandlers.push(handler);
  handleState();
};

window.handleState = function handleState () {
  if (['interactive', 'complete'].indexOf(document.readyState) > -1) {
    while(window.readyHandlers.length > 0) {
      window.readyHandlers.shift()();
    }
  }
};

document.onreadystatechange = window.handleState;
ready(function () {

	setTimeout(function(){
	document.getElementById('fountainG').style.display = "none";
	},7500);


	setTimeout(function(){
	document.getElementById('controller').style.display = "block";
	document.getElementById('weather').style.display = "block";
	document.getElementById('traffic').style.display = "block";
	document.getElementById('cams').style.display = "block";
  	document.getElementById('baseDiv').style.display = "block";
	},7500);
});



