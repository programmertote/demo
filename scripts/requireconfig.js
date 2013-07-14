// Ref: https://github.com/requirejs/example-jquery-shim
// https://github.com/requirejs/example-jquery-cdn
// http://requirejs.org/docs/jquery.html#shimconfig
// http://requirejs.org/docs/api.html#pathsfallbacks
// http://stackoverflow.com/questions/12113172/how-do-i-use-jquery-ui-with-requirejs
requirejs.config({

	"baseUrl": "scripts/lib",
	"paths": {
		"app": "../app",
		/*"jquery" : "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min",
		"jquery-ui" : '//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min',*/
		"jquery" : "jquery",
		"jquery-ui" : "jqueryui",

	},

	shim: {
		"jquery-ui": {
				exports: "$",
				deps: ["jquery"]
		},
	}

});

requirejs(["app/main"]);

