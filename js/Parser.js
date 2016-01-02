function Parser() {
	var span = new Span(true);
	var listenKey = new ListenKey();
	var caret = new Caret();
	
	this.parseData = function (clipboardData) {
		var mainInstance = Singleton.getInstance();
		var splittedData = clipboardData.split('');
		var inputString = '';
		var regNonNumericCharacter = /\D/;
		var regSpecialCharacter = /\W/;
		var regNumericCharacter = /[0-9]/;
		
		for (i = 0; i < splittedData.length; i++) {
			if (regNonNumericCharacter.test(splittedData[i]) && !regSpecialCharacter.test(splittedData[i])) {
				inputString = inputString.concat(splittedData[i]);
				if (i == splittedData.length - 1) {
					newSpan = span.createSpan(inputString);
					mainInstance.currentSpan = span.appendSpan(newSpan);
					mainInstance.currentSpan.focus();
					caret.setEndOfContenteditable(mainInstance.currentSpan);
					inputString = '';
				}
			} else if (regNumericCharacter.test(splittedData[i])) {
				inputString = inputString.concat(splittedData[i]);
			} else if (/\n/.test(splittedData[i])) {
				span.changeLine();
			} else if (/\t/.test(splittedData[i])) {
				var tabs = '';
				
				for (var j = 0; j < 4; j++) {
					tabs += ' ';
				}
				newSpan = span.createSpan(inputString);
				mainInstance.currentSpan = span.appendSpan(newSpan);
				mainInstance.currentSpan.focus();
				inputString = '';
				
				newSpan = span.createSpan(inputString);
				mainInstance.currentSpan = span.appendSpan(newSpan);
				mainInstance.currentSpan.focus();
			} else if (splittedData[i] == ' ') {
				newSpan = span.createSpan(inputString);
				mainInstance.currentSpan = span.appendSpan(newSpan);
				mainInstance.currentSpan.focus();
				inputString = ' ';
				
				newSpan = span.createSpan(inputString);
				mainInstance.currentSpan = span.appendSpan(newSpan);
				mainInstance.currentSpan.focus();
				inputString = '';
			} else if (regSpecialCharacter.test(splittedData[i]) && splittedData[i] != ' ') {
				newSpan = span.createSpan(inputString);
				mainInstance.currentSpan = span.appendSpan(newSpan);
				mainInstance.currentSpan.focus();
				inputString = splittedData[i];
				
				newSpan = span.createSpan(inputString);
				mainInstance.currentSpan = span.appendSpan(newSpan);
				mainInstance.currentSpan.focus();
				inputString = '';
			}
		}
	}
}
