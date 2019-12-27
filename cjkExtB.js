var section = document.querySelector('section');
window.addEventListener('DOMContentLoaded', (event) => {
    showCodepoints(Array);
});

function showCodepoints(arrayObj) {
var codepoints = [
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

    myPara1.textContent = glyph;
    myPara2.textContent = 'U+' + hex;
		myPara3.textContent = '&#x' + hex + ';';
		myPara4.textContent = '&#' + parseInt(hex, 16) + ';';
		myPara5.textContent = '\\' + 'u' + hex;

    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
		myArticle.appendChild(myPara3);
		myArticle.appendChild(myPara4);
		myArticle.appendChild(myPara5);

    section.appendChild(myArticle);
  }
}