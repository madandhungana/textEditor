function Span(flag) {
	var elem = document.getElementById('textarea');
	var listenKey = new ListenKey();
	var caret = new Caret();
	this.createSpan = function (charString) {
		var className = listenKey.getClassName(charString);
		var span = document.createElement('span');
		var mainInstance = Singleton.getInstance();
		span.innerHTML = charString;
		span.setAttribute('class', className);
		span.setAttribute('contenteditable', 'true');
		span.setAttribute('display', 'inline-block');
		span.style.border = '1px solid transparent';
		span.addEventListener('selectstart', function () {
			var spans = document.getElementsByTagName('span');

			for (var i = 0; i < spans.length; i++) {
				spans[i].setAttribute('contenteditable', 'false');
			}

		});
		span.addEventListener('mouseup', function () {
			var spans = document.getElementsByTagName('span');
			if (!event.target.innerHTML == ' ') {
				console.log(event.target);
				for (var i = 0; i < spans.length; i++) {
					spans[i].setAttribute('contenteditable', 'true');
				}
				mainInstance.currentSpan = event.target;
				mainInstance.currentSpan.focus();
			}

		});
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
		console.log('current span before change: ', currentSpan);
		console.log(' in', inputString);
		var className = listenKey.getClassName(inputString);
		currentSpan.setAttribute('class', className);
		console.log('current span after change: ', currentSpan);
		currentSpan.focus();
		return currentSpan;
	}

	this.changeLine = function () {
		var mainInstance = Singleton.getInstance();
		var lineBreak = document.createElement('br');
		console.log('current span while '+mainInstance.currentSpan);
		console.log('current span next sibling'+mainInstance.currentSpan.nextSibling)
		if (mainInstance.currentSpan.nextSibling != null) {
			elem.insertBefore(lineBreak, mainInstance.currentSpan);
			mainInstance.currentSpan.focus();
		} else {
			mainInstance.currentSpan=elem.appendChild(lineBreak);
			mainInstance.currentSpan.focus();
			mainInstance.inputString = '';
			mainInstance.currentSpan = this.createSpan('');
			mainInstance.currentSpan.focus();
		}

	}

}
