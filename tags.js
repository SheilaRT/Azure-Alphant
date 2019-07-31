var section = document.querySelector('section');
window.addEventListener('DOMContentLoaded', (event) => {
    showCodepoints(Array);
});

function showCodepoints(arrayObj) {
var codepoints = [
{"g" : "\u{E0001}", "n" : "LANGUAGE TAG", "h" : "E0001"},

{"g" : "\u{E0020}", "n" : "TAG SPACE", "h" : "E0020"},
{"g" : "\u{E0021}", "n" : "TAG EXCLAMATION MARK", "h" : "E0021"},
{"g" : "\u{E0022}", "n" : "TAG QUOTATION MARK", "h" : "E0022"},
{"g" : "\u{E0023}", "n" : "TAG NUMBER SIGN", "h" : "E0023"},
{"g" : "\u{E0024}", "n" : "TAG DOLLAR SIGN", "h" : "E0024"},
{"g" : "\u{E0025}", "n" : "TAG PERCENT SIGN", "h" : "E0025"},
{"g" : "\u{E0026}", "n" : "TAG AMPERSAND", "h" : "E0026"},
{"g" : "\u{E0027}", "n" : "TAG APOSTROPHE", "h" : "E0027"},
{"g" : "\u{E0028}", "n" : "TAG LEFT PARENTHESIS", "h" : "E0028"},
{"g" : "\u{E0029}", "n" : "TAG RIGHT PARENTHESIS", "h" : "E0029"},
{"g" : "\u{E002A}", "n" : "TAG ASTERISK", "h" : "E002A"},
{"g" : "\u{E002B}", "n" : "TAG PLUS SIGN", "h" : "E002B"},
{"g" : "\u{E002C}", "n" : "TAG COMMA", "h" : "E002C"},
{"g" : "\u{E002D}", "n" : "TAG HYPHEN-MINUS", "h" : "E002D"},
{"g" : "\u{E002E}", "n" : "TAG FULL STOP", "h" : "E002E"},
{"g" : "\u{E002F}", "n" : "TAG SOLIDUS", "h" : "E002F"},
{"g" : "\u{E0030}", "n" : "TAG DIGIT ZERO", "h" : "E0030"},
{"g" : "\u{E0031}", "n" : "TAG DIGIT ONE", "h" : "E0031"},
{"g" : "\u{E0032}", "n" : "TAG DIGIT TWO", "h" : "E0032"},
{"g" : "\u{E0033}", "n" : "TAG DIGIT THREE", "h" : "E0033"},
{"g" : "\u{E0034}", "n" : "TAG DIGIT FOUR", "h" : "E0034"},
{"g" : "\u{E0035}", "n" : "TAG DIGIT FIVE", "h" : "E0035"},
{"g" : "\u{E0036}", "n" : "TAG DIGIT SIX", "h" : "E0036"},
{"g" : "\u{E0037}", "n" : "TAG DIGIT SEVEN", "h" : "E0037"},
{"g" : "\u{E0038}", "n" : "TAG DIGIT EIGHT", "h" : "E0038"},
{"g" : "\u{E0039}", "n" : "TAG DIGIT NINE", "h" : "E0039"},
{"g" : "\u{E003A}", "n" : "TAG COLON", "h" : "E003A"},
{"g" : "\u{E003B}", "n" : "TAG SEMICOLON", "h" : "E003B"},
{"g" : "\u{E003C}", "n" : "TAG LESS-THAN SIGN", "h" : "E003C"},
{"g" : "\u{E003D}", "n" : "TAG EQUALS SIGN", "h" : "E003D"},
{"g" : "\u{E003E}", "n" : "TAG GREATER-THAN SIGN", "h" : "E003E"},
{"g" : "\u{E003F}", "n" : "TAG QUESTION MARK", "h" : "E003F"},
{"g" : "\u{E0040}", "n" : "TAG COMMERCIAL AT", "h" : "E0040"},
{"g" : "\u{E0041}", "n" : "TAG LATIN CAPITAL LETTER A", "h" : "E0041"},
{"g" : "\u{E0042}", "n" : "TAG LATIN CAPITAL LETTER B", "h" : "E0042"},
{"g" : "\u{E0043}", "n" : "TAG LATIN CAPITAL LETTER C", "h" : "E0043"},
{"g" : "\u{E0044}", "n" : "TAG LATIN CAPITAL LETTER D", "h" : "E0044"},
{"g" : "\u{E0045}", "n" : "TAG LATIN CAPITAL LETTER E", "h" : "E0045"},
{"g" : "\u{E0046}", "n" : "TAG LATIN CAPITAL LETTER F", "h" : "E0046"},
{"g" : "\u{E0047}", "n" : "TAG LATIN CAPITAL LETTER G", "h" : "E0047"},
{"g" : "\u{E0048}", "n" : "TAG LATIN CAPITAL LETTER H", "h" : "E0048"},
{"g" : "\u{E0049}", "n" : "TAG LATIN CAPITAL LETTER I", "h" : "E0049"},
{"g" : "\u{E004A}", "n" : "TAG LATIN CAPITAL LETTER J", "h" : "E004A"},
{"g" : "\u{E004B}", "n" : "TAG LATIN CAPITAL LETTER K", "h" : "E004B"},
{"g" : "\u{E004C}", "n" : "TAG LATIN CAPITAL LETTER L", "h" : "E004C"},
{"g" : "\u{E004D}", "n" : "TAG LATIN CAPITAL LETTER M", "h" : "E004D"},
{"g" : "\u{E004E}", "n" : "TAG LATIN CAPITAL LETTER N", "h" : "E004E"},
{"g" : "\u{E004F}", "n" : "TAG LATIN CAPITAL LETTER O", "h" : "E004F"},
{"g" : "\u{E0050}", "n" : "TAG LATIN CAPITAL LETTER P", "h" : "E0050"},
{"g" : "\u{E0051}", "n" : "TAG LATIN CAPITAL LETTER Q", "h" : "E0051"},
{"g" : "\u{E0052}", "n" : "TAG LATIN CAPITAL LETTER R", "h" : "E0052"},
{"g" : "\u{E0053}", "n" : "TAG LATIN CAPITAL LETTER S", "h" : "E0053"},
{"g" : "\u{E0054}", "n" : "TAG LATIN CAPITAL LETTER T", "h" : "E0054"},
{"g" : "\u{E0055}", "n" : "TAG LATIN CAPITAL LETTER U", "h" : "E0055"},
{"g" : "\u{E0056}", "n" : "TAG LATIN CAPITAL LETTER V", "h" : "E0056"},
{"g" : "\u{E0057}", "n" : "TAG LATIN CAPITAL LETTER W", "h" : "E0057"},
{"g" : "\u{E0058}", "n" : "TAG LATIN CAPITAL LETTER X", "h" : "E0058"},
{"g" : "\u{E0059}", "n" : "TAG LATIN CAPITAL LETTER Y", "h" : "E0059"},
{"g" : "\u{E005A}", "n" : "TAG LATIN CAPITAL LETTER Z", "h" : "E005A"},
{"g" : "\u{E005B}", "n" : "TAG LEFT SQUARE BRACKET", "h" : "E005B"},
{"g" : "\u{E005C}", "n" : "TAG REVERSE SOLIDUS", "h" : "E005C"},
{"g" : "\u{E005D}", "n" : "TAG RIGHT SQUARE BRACKET", "h" : "E005D"},
{"g" : "\u{E005E}", "n" : "TAG CIRCUMFLEX ACCENT", "h" : "E005E"},
{"g" : "\u{E005F}", "n" : "TAG LOW LINE", "h" : "E005F"},
{"g" : "\u{E0060}", "n" : "TAG GRAVE ACCENT", "h" : "E0060"},
{"g" : "\u{E0061}", "n" : "TAG LATIN SMALL LETTER A", "h" : "E0061"},
{"g" : "\u{E0062}", "n" : "TAG LATIN SMALL LETTER B", "h" : "E0062"},
{"g" : "\u{E0063}", "n" : "TAG LATIN SMALL LETTER C", "h" : "E0063"},
{"g" : "\u{E0064}", "n" : "TAG LATIN SMALL LETTER D", "h" : "E0064"},
{"g" : "\u{E0065}", "n" : "TAG LATIN SMALL LETTER E", "h" : "E0065"},
{"g" : "\u{E0066}", "n" : "TAG LATIN SMALL LETTER F", "h" : "E0066"},
{"g" : "\u{E0067}", "n" : "TAG LATIN SMALL LETTER G", "h" : "E0067"},
{"g" : "\u{E0068}", "n" : "TAG LATIN SMALL LETTER H", "h" : "E0068"},
{"g" : "\u{E0069}", "n" : "TAG LATIN SMALL LETTER I", "h" : "E0069"},
{"g" : "\u{E006A}", "n" : "TAG LATIN SMALL LETTER J", "h" : "E006A"},
{"g" : "\u{E006B}", "n" : "TAG LATIN SMALL LETTER K", "h" : "E006B"},
{"g" : "\u{E006C}", "n" : "TAG LATIN SMALL LETTER L", "h" : "E006C"},
{"g" : "\u{E006D}", "n" : "TAG LATIN SMALL LETTER M", "h" : "E006D"},
{"g" : "\u{E006E}", "n" : "TAG LATIN SMALL LETTER N", "h" : "E006E"},
{"g" : "\u{E006F}", "n" : "TAG LATIN SMALL LETTER O", "h" : "E006F"},
{"g" : "\u{E0070}", "n" : "TAG LATIN SMALL LETTER P", "h" : "E0070"},
{"g" : "\u{E0071}", "n" : "TAG LATIN SMALL LETTER Q", "h" : "E0071"},
{"g" : "\u{E0072}", "n" : "TAG LATIN SMALL LETTER R", "h" : "E0072"},
{"g" : "\u{E0073}", "n" : "TAG LATIN SMALL LETTER S", "h" : "E0073"},
{"g" : "\u{E0074}", "n" : "TAG LATIN SMALL LETTER T", "h" : "E0074"},
{"g" : "\u{E0075}", "n" : "TAG LATIN SMALL LETTER U", "h" : "E0075"},
{"g" : "\u{E0076}", "n" : "TAG LATIN SMALL LETTER V", "h" : "E0076"},
{"g" : "\u{E0077}", "n" : "TAG LATIN SMALL LETTER W", "h" : "E0077"},
{"g" : "\u{E0078}", "n" : "TAG LATIN SMALL LETTER X", "h" : "E0078"},
{"g" : "\u{E0079}", "n" : "TAG LATIN SMALL LETTER Y", "h" : "E0079"},
{"g" : "\u{E007A}", "n" : "TAG LATIN SMALL LETTER Z", "h" : "E007A"},
{"g" : "\u{E007B}", "n" : "TAG LEFT CURLY BRACKET", "h" : "E007B"},
{"g" : "\u{E007C}", "n" : "TAG VERTICAL LINE", "h" : "E007C"},
{"g" : "\u{E007D}", "n" : "TAG RIGHT CURLY BRACKET", "h" : "E007D"},
{"g" : "\u{E007E}", "n" : "TAG TILDE", "h" : "E007E"},
{"g" : "\u{E007F}", "n" : "CANCEL TAG", "h" : "E007F"}
];
      
  for (var i = 0; i < codepoints.length; i++) {
	var myArticle = document.createElement('article');
	var glyph = codepoints[i].g;
	var name = codepoints[i].n;
	var hex = codepoints[i].h;
    	var myPara1 = document.createElement('p');
    	var myPara2 = document.createElement('p');
    	var myPara3 = document.createElement('p');
		  var myPara4 = document.createElement('p');
		  var myPara5 = document.createElement('p');
		  var myPara6 = document.createElement('p');

    	myPara1.textContent = glyph;
    	myPara2.textContent = name;
    	myPara3.textContent = 'U+' + hex;
		  myPara4.textContent = '&#x' + hex + ';';
		  myPara5.textContent = '&#' + parseInt(hex, 16) + ';';
		  myPara6.textContent = '\\' + 'u' + hex;

    	myArticle.appendChild(myPara1);
    	myArticle.appendChild(myPara2);
    	myArticle.appendChild(myPara3);
		  myArticle.appendChild(myPara4);
		  myArticle.appendChild(myPara5);
		  myArticle.appendChild(myPara6);

    section.appendChild(myArticle);
  }
}
