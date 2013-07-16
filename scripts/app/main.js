define(["jquery-ui", "templates"], function () {

var templates = new myTemplates();

alert( "main.js => after new myTemplates " + $().jquery);

$(document).ready(function() {

alert( "main.js => $(document).ready: " + $().jquery);

});

}); // end of requireJS define() call


