define(["jquery-ui"], function () {

alert( "templates.js => proof that jQuery is loaded. " + $().jquery);

function myTemplates(){
	this.test = function(){
		alert('test');
		return false;
        };
}; // end of 'myTemplates()' constructor

});
