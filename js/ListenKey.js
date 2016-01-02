function ListenKey(){
     var reservedKeywords={
        'do':'function','if':'function','in':'keyword','for':'function','let':'keyword','new':'keyword','try':'keyword','var':'keyword',
        'case':'keyword','else':'function','enum':'keyword','eval':'keyword','null':'value','this':'keyword','true':'value','void':'keyword',
        'with':'keyword','break':'keyword','catch':'keyword','class':'keyword','const':'keyword','false':'value','super':'keyword','throw':'keyword',
        'while':'function','yield':'keyword','delete':'keyword','export':'keyword','import':'keyword','public':'modifier','return':'keyword',
        'static':'modifier','switch':'function','typeof':'keyword','default':'keyword','extends':'keyword','finally':'keyword','package':'keyword',
        'private':'modifier','continue':'keyword','debugger':'keyword','function':'keyword','arguments':'keyword','interface':'keyword',
        'protected':'modifier','implements':'keyword','instanceof':'keyword'
        
    };
    this.getChar = function(eventKeyCode) {
        if (eventKeyCode == null) {
            return String.fromCharCode(eventKeyCode) // IE
          }else if (eventKeyCode != 0) {
            return String.fromCharCode(eventKeyCode)   // the rest
          }
        else {
            return null; 
          }
    }
    this.getClassName=function(keyWord){
        var operatorPattern=/\W/;
        var whitespace=/[ ]/;
		var regexQuote=/^'/i;
        var numeric=/^[0-9]*$/;
		
        if(reservedKeywords[keyWord]){
            return reservedKeywords[keyWord];
        }else if(regexQuote.test(keyWord)){
			var className='string'
		}else if(operatorPattern.test(keyWord) && !whitespace.test(keyWord)){
            var className='operator';
            return className;
        }else if(numeric.test(keyWord) && !whitespace.test(keyWord)){
            var className="numeric";
            return className;
        }else{
            var className="simple";
            return className;
        }
        
    }
    
}