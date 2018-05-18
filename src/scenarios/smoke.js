////////////////////////////////////////////////////////////////////////////////
// The purpose of this is to show how and when events fire, considering 5 steps
// happening as follows:
//
//      1. Load URL
//      2. Load same URL, but adding an internal FRAGMENT to it
//      3. Click on an internal Link, that points to another internal FRAGMENT
//      4. Click on an external Link, that will send the page somewhere else
//      5. Close page
//
// Take particular care when going through the output, to understand when
// things happen (and in which order). Particularly, notice what DOESN'T
// happen during step 3.
//
// If invoked with "-v" it will print out the Page Resources as they are
// Requested and Received.
//
// NOTE.1: The "onConsoleMessage/onAlert/onPrompt/onConfirm" events are
// registered but not used here. This is left for you to have fun with.
// NOTE.2: This script is not here to teach you ANY JavaScript. It's aweful!
// NOTE.3: Main audience for this are people new to PhantomJS.
"use strict";

var system = require("system"),
    page = require("webpage").create(), 
    utils = require('./../helpers/agent.utils'),
    logResources = true;
  
////////////////////////////////////////////////////////////////////////////////

page.onInitialized = function() { 
    utils.logger.log('events', {event: "page.onInitialized", timestamp: utils.getUnix()}); 
};
page.onLoadStarted = function() {
    utils.logger.log('events', {event: "page.onLoadStarted", timestamp: utils.getUnix()}); 
};
page.onLoadFinished = function() {
    utils.logger.log('events', {event: "page.onLoadFinished", timestamp: utils.getUnix()}); 
};
page.onUrlChanged = function() {
    utils.logger.log('events', {event: "page.onUrlChanged",  timestamp: utils.getUnix()}); 
};
page.onNavigationRequested = function() {
    utils.logger.log('events', {event: "page.onNavigationRequested",  timestamp: utils.getUnix()}); 
};
page.onRepaintRequested = function() {
    utils.logger.log('events', {event: "page.onRepaintRequested",  timestamp: utils.getUnix()}); 
};

if (logResources === true) {
    page.onResourceRequested = function() {
        utils.logger.log('events', {event: "page.onResourceReceived",  timestamp: utils.getUnix()}); 
    };
    page.onResourceReceived = function() {
        utils.logger.log('events', {event: "page.onResourceReceived",  timestamp: utils.getUnix()}); 
    };
}

page.onClosing = function() {
    utils.logger.log('events', {event: "page.onClosing",  timestamp: utils.getUnix()}); 
};

// window.console.log(msg);
page.onConsoleMessage = function() {
    utils.logger.log('events', {event: "page.onConsoleMessage",  timestamp: utils.getUnix()}); 
};

// window.alert(msg);
page.onAlert = function() {
    utils.logger.log('events', {event: "page.onAlert",  timestamp: utils.getUnix()}); 
};
// var confirmed = window.confirm(msg);
page.onConfirm = function() {
    utils.logger.log('events', {event: "page.onConfirm",  timestamp: utils.getUnix()}); 
};
// var user_value = window.prompt(msg, default_value);
page.onPrompt = function() {
    utils.logger.log('events', {event: "page.onPrompt",  timestamp: utils.getUnix()}); 
};

var globals = {
    baseUrl: system.args[1]
};
////////////////////////////////////////////////////////////////////////////////  
utils.logger.log('activity', "### STEP 1: Load '" + globals.baseUrl + "'");

page.open(globals.baseUrl);


utils.logger.log('events', "page.close");
page.close();
phantom.exit();