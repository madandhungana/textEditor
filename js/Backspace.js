function Backspace(elem) {
	var span = new Span();
	var caret = new Caret();
	var tab = new Tab();

	this.deleteOnBackspace = function () {
		var newSpan;
		var textEditorInstance = Singleton.getInstance();
		var caretpos = caret.getCaretPosition();

		if (textEditorInstance.currentSpan.innerHTML == '' && caretpos == 0) {
			event.preventDefault();
			var previousSpan = textEditorInstance.currentSpan;
			var flag =0;
			if (textEditorInstance.currentSpan.previousSibling.tagName == 'BR') {
				textEditorInstance.currentSpan = textEditorInstance.currentSpan.previousSibling.previousSibling;
				var br = document.getElementsByTagName('BR');
				var length = br.length;
				br[length - 1].parentNode.removeChild(br[length - 1]);
				previousSpan.remove();
				flag =1;
			} else if (textEditorInstance.currentSpan.previousSibling == document.getElementsByTagName('span')[0].previousSibling) {
				textEditorInstance.currentSpan.focus();
			} else if (textEditorInstance.currentSpan.previousSibling.innerHTML == tab.getTab()
					   || textEditorInstance.currentSpan.previousSibling.innerHTML == ' ') {
				textEditorInstance.currentSpan.previousSibling.remove();
				textEditorInstance.currentSpan = textEditorInstance.currentSpan.previousSibling;
				previousSpan.remove();
			}
			textEditorInstance.currentSpan.focus();
			if(flag==0){
				caret.setEndOfContenteditable(textEditorInstance.currentSpan);
			}
			textEditorInstance.inputString = textEditorInstance.currentSpan.innerHTML;
		} else if (textEditorInstance.currentSpan.innerHTML != '' && caretpos == 0) {
			event.preventDefault();
			var nextSpan = textEditorInstance.currentSpan.nextSibling;
			var flag = 0;
			if (textEditorInstance.currentSpan.previousSibling.tagName == 'BR') {
				var br = document.getElementsByTagName('BR');
				var length = br.length;
				br[length - 1].parentNode.removeChild(br[length - 1]);
				flag = 1;
			} else if (textEditorInstance.currentSpan.previousSibling == document.getElementsByTagName('span')[0].previousSibling) {
				textEditorInstance.currentSpan.focus();

			} else if (textEditorInstance.currentSpan.previousSibling.innerHTML == tab.getTab()
					   || textEditorInstance.currentSpan.previousSibling.innerHTML == ' ') {
				console.log(textEditorInstance.currentSpan.previousSibling);
				textEditorInstance.currentSpan.previousSibling.remove();
			}
			var firstString = textEditorInstance.currentSpan.previousSibling.innerHTML;
			var secondString = textEditorInstance.currentSpan.innerHTML;
			var newSpanInnerHTML = firstString.concat(secondString);
			textEditorInstance.currentSpan.previousSibling.remove();
			textEditorInstance.currentSpan.remove();
			newSpan = span.createSpan(newSpanInnerHTML);
			elem.insertBefore(newSpan, nextSpan);
			textEditorInstance.currentSpan = newSpan;
			textEditorInstance.currentSpan.focus();
			if(flag==0){
				caret.setEndOfContenteditable(textEditorInstance.currentSpan);
			}			
		} else if (caretpos != 0) {
			textEditorInstance.inputString = textEditorInstance.currentSpan.innerHTML;
			var firstString = textEditorInstance.inputString.substring(0, caretpos - 1);
			var secondString = textEditorInstance.inputString.substring(caretpos, textEditorInstance.inputString.length);
			textEditorInstance.inputString = firstString.concat(secondString);
			textEditorInstance.currentSpan = span.changeSpan(event.target, textEditorInstance.inputString);
			textEditorInstance.currentSpan.focus();
		}

	}

}
