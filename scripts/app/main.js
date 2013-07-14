define(["jquery", "jquery-ui"], function () {

$('#demo').append("<p> added by jQuery before $(document).ready </p>");

$(document).ready(function() {

$('#demo').append("<p> added by jQuery inside $(document).ready </p>");

});

}); // end of requireJS call


