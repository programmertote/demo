/*define(["jquery-ui"], function () {
}); // end of requireJS define() call 
*/

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


