function Span(flag) {
	var elem = document.getElementById('textarea');
	var listenKey = new ListenKey();
	var tab = new Tab();
	var caret = new Caret();
	this.createSpan = function (charString) {
		var className = listenKey.getClassName(charString);
		var span = document.createElement('span');
		var mainInstance = Singleton.getInstance();
		
		span.innerHTML = charString;
		span.setAttribute('class', className);
		span.setAttribute('contenteditable', 'true');
		span.setAttribute('display', 'inline-block');
		span.setAttribute('spellcheck','false');
		span.style.border = '1px solid transparent';
		span.addEventListener('selectstart', function () {
			var spans = document.getElementsByTagName('span');

			for (var i = 0; i < spans.length; i++) {
				spans[i].setAttribute('contenteditable', 'false');
			}
		});
		span.addEventListener('mouseup', function () {
			var spans = document.getElementsByTagName('span');
			/*if (!event.target.innerHTML == ' ') {*/
				for (var i = 0; i < spans.length; i++) {
					spans[i].setAttribute('contenteditable', 'true');
				}
				mainInstance.currentSpan = event.target;
				mainInstance.currentSpan.focus();
//			}
			
		});
		return span;

	}
	this.appendSpan = function (span) {
		var mainInstance = Singleton.getInstance();
		
		if (flag && mainInstance.currentSpan.nextSibling != null) {
			elem.insertBefore(span, mainInstance.currentSpan.nextSibling);
		} else {
			elem.appendChild(span);
			flag = 1;
		}
		span.focus();
		return span;
	}
	this.changeSpan = function (currentSpan, inputString) {
		var className = listenKey.getClassName(inputString);
		
		currentSpan.setAttribute('class', className);
		currentSpan.focus();
		return currentSpan;
	}
	this.changeLine = function () {
		var mainInstance = Singleton.getInstance();
		var lineBreak = document.createElement('br');
		
		if (mainInstance.currentSpan.nextElementSibling == null && caret.getCaretPosition() == mainInstance.currentSpan.innerHTML.length) {
			mainInstance.currentSpan = elem.appendChild(lineBreak);
			mainInstance.currentSpan.focus();
			mainInstance.currentSpan = this.appendSpan(this.createSpan(''));
			mainInstance.currentSpan.focus();
		} else if (mainInstance.currentSpan.nextElementSibling != null && caret.getCaretPosition() == mainInstance.currentSpan.innerHTML.length) {
			elem.insertBefore(lineBreak, mainInstance.currentSpan.nextSibling);
			mainInstance.currentSpan = lineBreak;
			mainInstance.currentSpan.focus();
			mainInstance.currentSpan = this.appendSpan(this.createSpan(''));
			mainInstance.currentSpan.focus();
			mainInstance.currentSpan = mainInstance.currentSpan.nextSibling;
			mainInstance.currentSpan.focus();
		} else if (caret.getCaretPosition() == 0) {
			newSpan = this.createSpan('');
			elem.insertBefore(newSpan, mainInstance.currentSpan.previousSibling);
			elem.insertBefore(lineBreak, mainInstance.currentSpan);
		} else if (caret.getCaretPosition() > 0 && caret.getCaretPosition()
				   < mainInstance.currentSpan.innerHTML.length
				   && mainInstance.currentSpan.nextElementSibling != null) {
			currentInnerHTML = mainInstance.currentSpan.innerHTML;
			var nextSpan = mainInstance.currentSpan.nextSibling;
			var firstString = currentInnerHTML.substring(0, caret.getCaretPosition());
			var secondString = currentInnerHTML.substring(caret.getCaretPosition(), currentInnerHTML.length);
			var newSpan = this.createSpan(firstString);

			mainInstance.currentSpan.remove();
			elem.insertBefore(newSpan, nextSpan);
			mainInstance.currentSpan = newSpan;
			mainInstance.currentSpan.focus();
			elem.insertBefore(lineBreak, nextSpan);
			lineBreak.focus();
			newSpan = this.createSpan(secondString);
			elem.insertBefore(newSpan, nextSpan);
			mainInstance.currentSpan = newSpan;
			mainInstance.inputString = secondString;
			mainInstance.currentSpan.focus();
		} else if (caret.getCaretPosition() > 0
				   && caret.getCaretPosition() < mainInstance.currentSpan.innerHTML.length
				   && mainInstance.currentSpan.nextElementSibling == null) {
			currentInnerHTML = mainInstance.currentSpan.innerHTML;
			var firstString = currentInnerHTML.substring(0, caret.getCaretPosition());
			var secondString = currentInnerHTML.substring(caret.getCaretPosition(), currentInnerHTML.length);
			var newSpan = this.createSpan(firstString);

			mainInstance.currentSpan.remove();
			elem.appendChild(newSpan);
			mainInstance.currentSpan = newSpan;
			mainInstance.currentSpan.focus();
			elem.appendChild(lineBreak);
			lineBreak.focus();
			newSpan = this.createSpan(secondString);
			elem.appendChild(newSpan);
			mainInstance.currentSpan = newSpan;
			mainInstance.inputString = secondString;
			mainInstance.currentSpan.focus();
		}
	}
	this.createTab = function () {
		var mainInstance = Singleton.getInstance();
		var newTab = this.createSpan(tab.getTab());
		var currentInnerHTML;
		
		if (mainInstance.currentSpan.nextElementSibling == null && caret.getCaretPosition() == mainInstance.currentSpan.innerHTML.length) {
			mainInstance.currentSpan = elem.appendChild(newTab);
			mainInstance.currentSpan.focus();
			mainInstance.currentSpan = this.appendSpan(this.createSpan(''));
			mainInstance.currentSpan.focus();
		} else if (mainInstance.currentSpan.nextElementSibling != null && caret.getCaretPosition() == mainInstance.currentSpan.innerHTML.length) {
			elem.insertBefore(newTab, mainInstance.currentSpan.nextSibling);
			mainInstance.currentSpan = newTab;
			mainInstance.currentSpan.focus();
			mainInstance.currentSpan = elem.insertBefore(this.createSpan(''), mainInstance.currentSpan.nextSibling);
			mainInstance.currentSpan.focus();
		} else if (caret.getCaretPosition() == 0) {
			elem.insertBefore(newTab, mainInstance.currentSpan);
		} else if (caret.getCaretPosition() > 0
				   && caret.getCaretPosition() < mainInstance.currentSpan.innerHTML.length
				   && mainInstance.currentSpan.nextElementSibling != null) {
			currentInnerHTML = mainInstance.currentSpan.innerHTML;
			var nextSpan = mainInstance.currentSpan.nextSibling;
			var firstString = currentInnerHTML.substring(0, caret.getCaretPosition());
			var secondString = currentInnerHTML.substring(caret.getCaretPosition(), currentInnerHTML.length);
			var newSpan = this.createSpan(firstString);

			mainInstance.currentSpan.remove();
			elem.insertBefore(newSpan, nextSpan);
			mainInstance.currentSpan = newSpan;
			mainInstance.currentSpan.focus();
			elem.insertBefore(newTab, nextSpan);
			newTab.focus();
			newSpan = this.createSpan(secondString);
			elem.insertBefore(newSpan, nextSpan);
			mainInstance.currentSpan = newSpan;
			mainInstance.inputString = secondString;
			mainInstance.currentSpan.focus();
		} else if (caret.getCaretPosition() > 0
				   && caret.getCaretPosition() < mainInstance.currentSpan.innerHTML.length
				   && mainInstance.currentSpan.nextElementSibling == null) {
			currentInnerHTML = mainInstance.currentSpan.innerHTML;
			var firstString = currentInnerHTML.substring(0, caret.getCaretPosition());
			var secondString = currentInnerHTML.substring(caret.getCaretPosition(), currentInnerHTML.length);
			var newSpan = this.createSpan(firstString);

			mainInstance.currentSpan.remove();
			elem.appendChild(newSpan);
			mainInstance.currentSpan = newSpan;
			mainInstance.currentSpan.focus();
			elem.appendChild(newTab);
			newTab.focus();
			newSpan = this.createSpan(secondString);
			elem.appendChild(newSpan);
			mainInstance.currentSpan = newSpan;
			mainInstance.inputString = secondString;
			mainInstance.currentSpan.focus();
		}

	}
	this.createSpace = function () {
		var mainInstance = Singleton.getInstance();
		mainInstance.inputString = '';
		var newSpace = this.createSpan(' ');
		var currentInnerHTML;

		if (mainInstance.currentSpan.nextElementSibling == null && caret.getCaretPosition() == mainInstance.currentSpan.innerHTML.length) {
			mainInstance.currentSpan = elem.appendChild(newSpace);
			mainInstance.currentSpan.focus();
			mainInstance.currentSpan = this.appendSpan(this.createSpan(''));
			mainInstance.currentSpan.focus();
		} else if (mainInstance.currentSpan.nextElementSibling != null && caret.getCaretPosition() == mainInstance.currentSpan.innerHTML.length) {
			elem.insertBefore(newSpace, mainInstance.currentSpan.nextSibling);
			mainInstance.currentSpan = newSpace;
			mainInstance.currentSpan.focus();
			mainInstance.currentSpan = elem.insertBefore(this.createSpan(''), mainInstance.currentSpan.nextSibling);
			mainInstance.currentSpan.focus();
		} else if (caret.getCaretPosition() == 0) {
			elem.insertBefore(newSpace, mainInstance.currentSpan);
		} else if (caret.getCaretPosition() > 0 && caret.getCaretPosition()
				   < mainInstance.currentSpan.innerHTML.length && mainInstance.currentSpan.nextElementSibling != null) {
			currentInnerHTML = mainInstance.currentSpan.innerHTML;
			var nextSpan = mainInstance.currentSpan.nextSibling;
			var firstString = currentInnerHTML.substring(0, caret.getCaretPosition());
			var secondString = currentInnerHTML.substring(caret.getCaretPosition(), currentInnerHTML.length);
			var newSpan = this.createSpan(firstString);

			mainInstance.currentSpan.remove();
			elem.insertBefore(newSpan, nextSpan);
			mainInstance.currentSpan = newSpan;
			mainInstance.currentSpan.focus();
			
			elem.insertBefore(newSpace, nextSpan);
			newSpace.focus();
			
//			newSpan = this.createSpan('');
//			elem.insertBefore(newSpan, nextSpan);
//			mainInstance.currentSpan = newSpan;
//			mainInstance.currentSpan.focus();
			
			newSpan = this.createSpan(secondString);
			elem.insertBefore(newSpan, nextSpan);
			mainInstance.currentSpan = newSpan;
			mainInstance.inputString = secondString;
			mainInstance.currentSpan.focus();
		} else if (caret.getCaretPosition() > 0 && caret.getCaretPosition()
				   < mainInstance.currentSpan.innerHTML.length && mainInstance.currentSpan.nextElementSibling == null) {
			currentInnerHTML = mainInstance.currentSpan.innerHTML;
			var firstString = currentInnerHTML.substring(0, caret.getCaretPosition());
			var secondString = currentInnerHTML.substring(caret.getCaretPosition(), currentInnerHTML.length);
			var newSpan = this.createSpan(firstString);

			mainInstance.currentSpan.remove();
			elem.appendChild(newSpan);
			mainInstance.currentSpan = newSpan;
			mainInstance.currentSpan.focus();
			
			elem.appendChild(newSpace);
			newSpace.focus();
			
//			mainInstance.currentSpan = this.appendSpan(this.createSpan(''));
//			mainInstance.currentSpan.focus();
			
			newSpan = this.createSpan(secondString);
			elem.appendChild(newSpan);
			mainInstance.currentSpan = newSpan;
			mainInstance.inputString = secondString;
			mainInstance.currentSpan.focus();
		}
	}
}
