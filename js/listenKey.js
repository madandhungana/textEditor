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
	var keyCode={
		0:'48',1:'49',2:'50',3:'51',4:'52',5:'53',6:'54',7:'55',8:'56',9:'57','=':'61','*':'106','+':'107','-':'109','.':'110','/':'111',';':'186',
		'=':'187',',':'188','-':'189','.':'190','/':'191','`':'192','[':'219','\\':'220',']':'221','\'':'222','a':'65','b':'66','c':'67','d':'68',
		'e':'69','f':'70','g':'71','h':'72','i':'73','j':'74','k':'75','l':'76','m':'77','n':'78','o':'79','p':'80','q':'81','r':'82','s':'83','t':'84',
		'u':'85','v':'86','w':'87','x':'88','y':'89','z':'90',
		'~':'192',')':'48','!':'49','@':'50','#':'51','$':'52','%':'53','^':'54','&':'55','*':'56','(':'57','_':'109','+':'61',
		'{':'219','}':'221','|':'220',':':'59','\"':'222','<':'188','>':'189','?':'191'
	};
    this.getChar = function(eventKeyCode) {
        if (eventKeyCode == null) {
            return String.fromCharCode(eventKeyCode) // IE
          } 
        else if (eventKeyCode != 0) {
            return String.fromCharCode(eventKeyCode)   // the rest
          }
        else {
            return null; // special key
          }
    }
	this.getKeyCode = function(charact){
		
		return keyCode[charact];
	}
      
    this.getClassName=function(keyWord){
        console.log('Key Words',keyWord)
        var operatorPattern=/\W/;
        var whitespace=/[ ]/;
        var numeric=/^[0-9]*$/;
        if(reservedKeywords[keyWord]){
            return reservedKeywords[keyWord];
        }
        else if(operatorPattern.test(keyWord) && !whitespace.test(keyWord)){
		  	console.log('Hello');
            var className='operator';
            return className;
        }
        else if(numeric.test(keyWord)){
            var className="numeric";
            return className;
			console.log('madan');
        }
        else{
            var className="simple";
            return className;
        }
        
    }
    
}