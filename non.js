var section = document.querySelector('section');
window.addEventListener('DOMContentLoaded', (event) => {
    showCodepoints(Array);
});

function showCodepoints(arrayObj) {
var codepoints = [
{"g" : "\uFDD0", "h" : "FDD0"},{"g" : "\uFDD1", "h" : "FDD1"},{"g" : "\uFDD2", "h" : "FDD2"},{"g" : "\uFDD3", "h" : "FDD3"},{"g" : "\uFDD4", "h" : "FDD4"},{"g" : "\uFDD5", "h" : "FDD5"},{"g" : "\uFDD6", "h" : "FDD6"},{"g" : "\uFDD7", "h" : "FDD7"},{"g" : "\uFDD8", "h" : "FDD8"},{"g" : "\uFDD9", "h" : "FDD9"},{"g" : "\uFDDA", "h" : "FDDA"},{"g" : "\uFDDB", "h" : "FDDB"},{"g" : "\uFDDC", "h" : "FDDC"},{"g" : "\uFDDD", "h" : "FDDD"},{"g" : "\uFDDE", "h" : "FDDE"},{"g" : "\uFDDF", "h" : "FDDF"},{"g" : "\uFDE0", "h" : "FDE0"},{"g" : "\uFDE1", "h" : "FDE1"},{"g" : "\uFDE2", "h" : "FDE2"},{"g" : "\uFDE3", "h" : "FDE3"},{"g" : "\uFDE4", "h" : "FDE4"},{"g" : "\uFDE5", "h" : "FDE5"},{"g" : "\uFDE6", "h" : "FDE6"},{"g" : "\uFDE7", "h" : "FDE7"},{"g" : "\uFDE8", "h" : "FDE8"},{"g" : "\uFDE9", "h" : "FDE9"},{"g" : "\uFDEA", "h" : "FDEA"},{"g" : "\uFDEB", "h" : "FDEB"},{"g" : "\uFDEC", "h" : "FDEC"},{"g" : "\uFDED", "h" : "FDED"},{"g" : "\uFDEE", "h" : "FDEE"},{"g" : "\uFDEF", "h" : "FDEF"},

{"g" : "\uFFFE", "h" : "FFFE"},{"g" : "\uFFFF", "h" : "FFFF"},

{"g" : "\u{1FFFE}", "h" : "1FFFE"},{"g" : "\u{1FFFF}", "h" : "1FFFF"},{"g" : "\u{2FFFE}", "h" : "2FFFE"},{"g" : "\u{2FFFF}", "h" : "2FFFF"},{"g" : "\u{3FFFE}", "h" : "3FFFE"},{"g" : "\u{3FFFF}", "h" : "3FFFF"},{"g" : "\u{4FFFE}", "h" : "4FFFE"},{"g" : "\u{4FFFF}", "h" : "4FFFF"},{"g" : "\u{5FFFE}", "h" : "5FFFE"},{"g" : "\u{5FFFF}", "h" : "5FFFF"},{"g" : "\u{6FFFE}", "h" : "6FFFE"},{"g" : "\u{6FFFF}", "h" : "6FFFF"},{"g" : "\u{7FFFE}", "h" : "7FFFE"},{"g" : "\u{7FFFF}", "h" : "7FFFF"},{"g" : "\u{8FFFE}", "h" : "8FFFE"},{"g" : "\u{8FFFF}", "h" : "8FFFF"},{"g" : "\u{9FFFE}", "h" : "9FFFE"},{"g" : "\u{9FFFF}", "h" : "9FFFF"},{"g" : "\u{AFFFE}", "h" : "AFFFE"},{"g" : "\u{AFFFF}", "h" : "AFFFF"},{"g" : "\u{BFFFE}", "h" : "BFFFE"},{"g" : "\u{BFFFF}", "h" : "BFFFF"},{"g" : "\u{CFFFE}", "h" : "CFFFE"},{"g" : "\u{CFFFF}", "h" : "CFFFF"},{"g" : "\u{DFFFE}", "h" : "DFFFE"},{"g" : "\u{DFFFF}", "h" : "DFFFF"},{"g" : "\u{EFFFE}", "h" : "EFFFE"},{"g" : "\u{EFFFF}", "h" : "EFFFF"},{"g" : "\u{FFFFE}", "h" : "FFFFE"},{"g" : "\u{FFFFF}", "h" : "FFFFF"},{"g" : "\u{10FFFE}", "h" : "10FFFE"},{"g" : "\u{10FFFF}", "h" : "10FFFF"}
];
      
  for (var i = 0; i < codepoints.length; i++) {
    var myArticle = document.createElement('article');
    var glyph = codepoints[i].g;
    var hex = codepoints[i].h;
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myPara4 = document.createElement('p');
      var myPara5 = document.createElement('p');
	    var myPara6 = document.createElement('p');

      myPara1.textContent = glyph;
	    myPara2.textContent = '<not a character>';
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
