function TextEditor() {

	var element = document.getElementById('textarea');

	var that = this;
	var char = '';
	this.inputString = '';
	this.currentSpan;

	var keyEvent = new KeyEvent(element);
	var span = new Span(false);
	var caret = new Caret();

	this.init = function () {
		var eventKeys = [];

		that.currentSpan = span.appendSpan(span.createSpan(''));
		that.currentSpan.focus();

		element.onkeydown = function (event) {
			eventKeys[event.keyCode] = true;
			keyEvent.checkCharacter(eventKeys, event.keyCode);
		}

		element.onkeyup = function (event) {
			eventKeys[event.keyCode] = false;
		}

		element.onclick = function (e) {
			var eventId = e.target.id;
			console.log(e);

			if (!eventId.localeCompare("textarea")) {

			} else {
				that.currentSpan = e.target;
				var caretPosition = caret.getCaretPosition(that.currentSpan);
				that.currentSpan.focus();
				inputString = e.target.innerHTML;
				console.log(that.currentSpan);
			}
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