function TextEditor() {

	var element = document.getElementById('textarea');

	var that = this;
	var char = '';
	this.inputString = '';
	this.currentSpan;
	this.singleQuoteFlag = false;
	this.singleQuoteCount = 0;

	var keyEvent = new KeyEvent(element);
	var span = new Span(false);
	var caret = new Caret();

	this.init = function () {
		var eventKeys = [];

		that.currentSpan = span.appendSpan(span.createSpan(''));
		that.currentSpan.focus();

		element.onkeydown = function (event) {
			if(that.currentSpan.className == 'string' && that.currentSpan.innerHTML.length == 1 && event.keyCode == 8){
				that.currentSpan.className = 'simple';
				that.singleQuoteFlag = false;
				that.singleQuoteCount = 0;
			}
			eventKeys[event.keyCode] = true;
			keyEvent.checkCharacter(eventKeys, event.keyCode);
		}

		element.onkeyup = function (event) {
			eventKeys[event.keyCode] = false;
		}
	}
}

var Singleton = (function () {

	function createInstance() {
		var textEditor = new TextEditor();

		return textEditor;
	}
	var instance;
	return {
		getInstance: function () {
			if (!instance) {
				instance = createInstance();

			}

			return instance;
		}
	}
})();
