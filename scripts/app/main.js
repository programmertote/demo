/**
 * Collection of helper functions for visual effects
 */
define(["jquery-ui", "templates"], function () {

/*** Database (Db) variables ***/
var promptHeaderDb = [ 'Prompt 1', 'Prompt 2', 'Prompt 3', 'Prompt 4', 'Prompt 5',];

var promptContentDb = { 
	'Prompt 1' : ["Think of the most recent time you argued with a close friend.",
			"Content 2", "Content 3", "Content 4"],
	'Prompt 2' : ["Was that stressful? Think a bit harder about what really happened"],
	'Prompt 3' : ["Were you very mad? Can your feeling be described with three or more adjectives (like 'pissed', 'passive-aggressive', 'nonchalent')? "],
	'Prompt 4' : ["Are you guys still close friends?"],
	'Prompt 5' : ["If not, how did the argument ended?"],
	'Prompt 6' : ["Oh, how did you guys defused the situation?"],
	};

var promptResponseDb = {
	'Prompt 1' : {	'type' : "radio",
			'choices' : [	'Disagree Very Strongly', 'Disagree Strongly',
					'Disagree', 'Agree',
					'Agree Strongly', 'Agree Very Strongly']
				//'height' : "50", TODO: extend to this
			},  //, "selectBox", "menu", "textBox"
	};

var responseTemplateDb = { //TODO: remove?
}


/*** Content box related functions and variables ***/
var contentBox;
var contentBoxHeader;
var contentBoxContent;
var selectedEffect = 'drop';
var curPromptContent = '';
var curHeaderIndex = 0;

function getCurHeader(){
	return promptHeaderDb[curHeaderIndex];
}

function updatePromptHeader(direction){
	curHeaderIndex += (direction == 'next') ? 1 : -1;
	curHeaderIndex = (curHeaderIndex < 0) ? 0 : curHeaderIndex; // no negative val allowed

	contentBoxHeader.text( promptHeaderDb[curHeaderIndex] );
}

function updatePromptContent(str){
	curPromptContent = str; // set global var here
	contentBoxContent.text(str);
}

function initializePromptHeader(){
	updatePromptHeader('start');
}

function getNewRandomPrompt(prompts){
	newPromptContent = prompts[Math.floor(Math.random()*prompts.length)];

	while (curPromptContent == newPromptContent){
		newPromptContent = prompts[Math.floor(Math.random()*prompts.length)];
	}

	return newPromptContent;
}

function initializePromptContent(){
	key = getCurHeader();
	newContent = getNewRandomPrompt(promptContentDb[key]);
	updatePromptContent(newContent);
}

function tryNewPrompt(key){
	newContent = getNewRandomPrompt(promptContentDb[key]);

	contentBox.hide( selectedEffect, {direction: 'left'}, 500,
				function(){updatePromptContent(newContent)} );
	contentBox.show( selectedEffect, {direction: 'left'}, 500 );
}


/*** Response related functions and variables ***/
var responseBox;

var templates = new myTemplates();
var promptResponseDb = {
	'Prompt 1' : {	'type' : "radio",
			'choices' : [	'Disagree Very Strongly', 'Disagree Strongly',
					'Disagree', 'Agree',
					'Agree Strongly', 'Agree Very Strongly']
				//'height' : "50", TODO: extend to this
			},  //, "selectBox", "menu", "textBox"
	};
var choices;

//alert(templates.radio(choices));

function initializeResponseDiv(){
	var elementInfo = promptResponseDb[getCurHeader()];
	responseBox.append( templates.getTemplate(elementInfo) );
	var elementDiv = $('#' + elementInfo['type']);
	elementDiv.buttonset();
	//alert( templates.getTemplate(elementInfo) );
		

	return false;
}



function initializeButtons(){ // TODO: implement
	return false;
}


/*** Progress bar related functions and variables ***/
var MAX_BAR_VAL = 5;
var counter = 0;
var progressBarDiv;
var progressLabel;

function updateProgressBarLabel(counter){
	status = "Steps completed: " + counter + " out of " + MAX_BAR_VAL;
	progressLabel.text(status);
}

function updateProgressBar(){
	counter = (counter+1)%6;

	progressBarDiv.progressbar({
		value: counter
	});
}


/*** No longer in use ***/
// Bring in and out the main content TODO: remove if not used after development
function runDropEffect(direction) {
	var options = {direction: direction};

	contentBox.toggle( selectedEffect, options, 500 );
};


$(document).ready(function() {

	// Initialize global variables
	contentBox = $( "#content-box" );
	contentBoxHeader = $( "#content-box h3" );
	contentBoxContent = $( "#content p" );

	responseBox = $( "#response" );

	progressBarDiv = $( "#progressbar" );
	progressLabel = $( ".progress-label" );


	// Initialize page elements
	// Progress bar
	progressBarDiv.progressbar({
		value: counter,
		max: MAX_BAR_VAL,
		change: function() {
			updateProgressBarLabel(counter);
		}
	});

	updateProgressBarLabel(counter);


	// Initialize page contents
	// Content box
	initializePromptHeader();
	initializePromptContent();
	initializeResponseDiv();
	initializeButtons();



	// set effect from select menu value
	$( "#one" ).click(function() {
		// TODO: case statement based on which prompt I am at
		tryNewPrompt('Prompt 1');
		return false;
	});

	// enter from left if 'yes'
	$( "#three" ).click(function() {
		proceedToNextPrompt();
		//updatePromptHeader('next');
		return false;
	});

	$( "#numButton" ).click(function (){
		updateProgressBar();
	});

});

}); // end of requireJS define() call


