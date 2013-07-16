/*define(["jquery-ui"], function () {
}); // end of requireJS define() call 
*/

alert("From templates.js: jQuery $ is not seen in templates.js");
alert($(this).attr('title'));

alert('From templates.js: if I say define(["jquery", "jquery-ui"], function(){... myTemplates cannot be seen in "main.js". If you check Firebug, you"ll see it.');

define(["jquery-ui"], function () {
function myTemplates(){
	this.test = function(){
		alert('hey test');
		return false;
        };

	this.radio = function(choices){
		radio = '<form><div id="radio" class=".radio">';
		for (var i=0, c; c = choices[i]; i++){
			radio += '<input type="radio" id="radio' + i;
			radio += '" name="radio" />';
			radio += '<label for="radio' + i;
			radio += '"> ' + c;
			radio += ' </label>';
		};
		radio += '</div></form>';

		return radio;
        };

	this.getTemplate = function(infoHash){
		var type = infoHash['type'];

		if (type == 'radio'){
			return this.radio( infoHash['choices'] );
		}
		else {
			alert('template.js: no such template');
		}

		return false;
	};

}; // end of 'myTemplates()' constructor

});
