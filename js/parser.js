function Parser() {
	var span = new Span(true);
	var listenKey = new ListenKey();
	var caret = new Caret();
	var tab = new Tab();
	this.parseData = function (clipboardData) {
		var mainInstance = Singleton.getInstance();
		var splittedData = clipboardData.split('');
		var inputString = '';
		var regNonNumericCharacter = /\D/;
		var regWhitespace = /\s/g;
		var regSpecialCharacter = /\W/;
		var regNumericCharacter = /[0-9]/;
		if (/\n/.test(clipboardData)) {
			alert('yes it contains line space');
		}
		for (i = 0; i < splittedData.length; i++) {
			if (regNonNumericCharacter.test(splittedData[i]) && !regSpecialCharacter.test(splittedData[i])) {
				inputString = inputString.concat(splittedData[i]);
				if (i == splittedData.length - 1) {
					mainInstance.currentSpan = span.createSpan(inputString);
					mainInstance.currentSpan.focus();
					caret.setEndOfContenteditable(mainInstance.currentSpan);
					inputString = '';
				}
			} else if (regNumericCharacter.test(splittedData[i])) {
				inputString = inputString.concat(splittedData[i]);
			} else if (/\n/.test(splittedData[i])) {
				span.changeLine();
			}
			//			else if(/\t/.test(splittedData[i])){
			//				var tabs='';
			//				for(i=0;i<4;i++){
			//					tabs += ' ';
			//				}
			//				mainInstance.currentSpan=span.createSpan(tabs);
			//				mainInstance.currentSpan.focus();
			//				inputString='';
			//			}
			else if (regWhitespace.test(splittedData[i])) {
				mainInstance.currentSpan = span.createSpan(inputString);
				mainInstance.currentSpan.focus();
				inputString = ' ';
				mainInstance.currentSpan = span.createSpan(inputString);
				mainInstance.currentSpan.focus();
				inputString = '';
			} else if (regSpecialCharacter.test(splittedData[i]) && !regWhitespace.test(splittedData[i])) {
				mainInstance.currentSpan = span.createSpan(inputString);
				mainInstance.currentSpan.focus();
				inputString = splittedData[i];
				mainInstance.currentSpan = span.createSpan(inputString);
				mainInstance.currentSpan.focus();
				inputString = '';

			}


			/*var keyCode=listenKey.getKeyCode(splittedData[i]);
			alert(splittedData[i]+' '+keyCode);
			charKeyCode[keyCode]=true;
			keyEvent.checkCharacter(charKeyCode,keyCode);*/
		}
	}





}
