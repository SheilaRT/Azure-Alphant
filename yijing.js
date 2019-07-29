var section = document.querySelector('section');
window.addEventListener('DOMContentLoaded', (event) => {
    showCodepoints(Array);
});

function showCodepoints(arrayObj) {
var codepoints = [
{"g" : "\u2630", "n" : "TRIGRAM FOR HEAVEN", "h" : "2630" },
{"g" : "\u2631", "n" : "TRIGRAM FOR LAKE", "h" : "2631" },
{"g" : "\u2632", "n" : "TRIGRAM FOR FIRE", "h" : "2632" },
{"g" : "\u2633", "n" : "TRIGRAM FOR THUNDER", "h" : "2633" },
{"g" : "\u2634", "n" : "TRIGRAM FOR WIND", "h" : "2634" },
{"g" : "\u2635", "n" : "TRIGRAM FOR WATER", "h" : "2635" },
{"g" : "\u2636", "n" : "TRIGRAM FOR MOUNTAIN", "h" : "2636" },
{"g" : "\u2637", "n" : "TRIGRAM FOR EARTH", "h" : "2637" },

{"g" : "\u268A", "n" : "MONOGRAM FOR YANG", "h" : "268A" },
{"g" : "\u268B", "n" : "MONOGRAM FOR YIN", "h" : "268B" },
{"g" : "\u268C", "n" : "DIGRAM FOR GREATER YANG", "h" : "268C" },
{"g" : "\u268D", "n" : "DIGRAM FOR LESSER YIN", "h" : "268D" },
{"g" : "\u268E", "n" : "DIGRAM FOR LESSER YANG", "h" : "268E" },
{"g" : "\u268F", "n" : "DIGRAM FOR GREATER YIN", "h" : "268F" },

{"g" : "\u4DC0", "n" : "HEXAGRAM FOR THE CREATIVE HEAVEN", "h" : "4DC0" },
{"g" : "\u4DC1", "n" : "HEXAGRAM FOR THE RECEPTIVE EARTH", "h" : "4DC1" },
{"g" : "\u4DC2", "n" : "HEXAGRAM FOR DIFFICULTY AT THE BEGINNING", "h" : "4DC2" },
{"g" : "\u4DC3", "n" : "HEXAGRAM FOR YOUTHFUL FOLLY", "h" : "4DC3" },
{"g" : "\u4DC4", "n" : "HEXAGRAM FOR WAITING", "h" : "4DC4" },
{"g" : "\u4DC5", "n" : "HEXAGRAM FOR CONFLICT", "h" : "4DC5" },
{"g" : "\u4DC6", "n" : "HEXAGRAM FOR THE ARMY", "h" : "4DC6" },
{"g" : "\u4DC7", "n" : "HEXAGRAM FOR HOLDING TOGETHER", "h" : "4DC7" },
{"g" : "\u4DC8", "n" : "HEXAGRAM FOR SMALL TAMING", "h" : "4DC8" },
{"g" : "\u4DC9", "n" : "HEXAGRAM FOR TREADING", "h" : "4DC9" },
{"g" : "\u4DCA", "n" : "HEXAGRAM FOR PEACE", "h" : "4DCA" },
{"g" : "\u4DCB", "n" : "HEXAGRAM FOR STANDSTILL", "h" : "4DCB" },
{"g" : "\u4DCC", "n" : "HEXAGRAM FOR FELLOWSHIP", "h" : "4DCC" },
{"g" : "\u4DCD", "n" : "HEXAGRAM FOR GREAT POSSESSION", "h" : "4DCD" },
{"g" : "\u4DCE", "n" : "HEXAGRAM FOR MODESTY", "h" : "4DCE" },
{"g" : "\u4DCF", "n" : "HEXAGRAM FOR ENTHUSIASM", "h" : "4DCF" },
{"g" : "\u4DD0", "n" : "HEXAGRAM FOR FOLLOWING", "h" : "4DD0" },
{"g" : "\u4DD1", "n" : "HEXAGRAM FOR WORK ON THE DECAYED", "h" : "4DD1" },
{"g" : "\u4DD2", "n" : "HEXAGRAM FOR APPROACH", "h" : "4DD2" },
{"g" : "\u4DD3", "n" : "HEXAGRAM FOR CONTEMPLATION", "h" : "4DD3" },
{"g" : "\u4DD4", "n" : "HEXAGRAM FOR BITING THROUGH", "h" : "4DD4" },
{"g" : "\u4DD5", "n" : "HEXAGRAM FOR GRACE", "h" : "4DD5" },
{"g" : "\u4DD6", "n" : "HEXAGRAM FOR SPLITTING APART", "h" : "4DD6" },
{"g" : "\u4DD7", "n" : "HEXAGRAM FOR RETURN", "h" : "4DD7" },
{"g" : "\u4DD8", "n" : "HEXAGRAM FOR INNOCENCE", "h" : "4DD8" },
{"g" : "\u4DD9", "n" : "HEXAGRAM FOR GREAT TAMING", "h" : "4DD9" },
{"g" : "\u4DDA", "n" : "HEXAGRAM FOR MOUTH CORNERS", "h" : "4DDA" },
{"g" : "\u4DDB", "n" : "HEXAGRAM FOR GREAT PREPONDERANCE", "h" : "4DDB" },
{"g" : "\u4DDC", "n" : "HEXAGRAM FOR THE ABYSMAL WATER", "h" : "4DDC" },
{"g" : "\u4DDD", "n" : "HEXAGRAM FOR THE CLINGING FIRE", "h" : "4DDD" },
{"g" : "\u4DDE", "n" : "HEXAGRAM FOR INFLUENCE", "h" : "4DDE" },
{"g" : "\u4DDF", "n" : "HEXAGRAM FOR DURATION", "h" : "4DDF" },
{"g" : "\u4DE0", "n" : "HEXAGRAM FOR RETREAT", "h" : "4DE0" },
{"g" : "\u4DE1", "n" : "HEXAGRAM FOR GREAT POWER", "h" : "4DE1" },
{"g" : "\u4DE2", "n" : "HEXAGRAM FOR PROGRESS", "h" : "4DE2" },
{"g" : "\u4DE3", "n" : "HEXAGRAM FOR DARKENING OF THE LIGHT", "h" : "4DE3" },
{"g" : "\u4DE4", "n" : "HEXAGRAM FOR THE FAMILY", "h" : "4DE4" },
{"g" : "\u4DE5", "n" : "HEXAGRAM FOR OPPOSITION", "h" : "4DE5" },
{"g" : "\u4DE6", "n" : "HEXAGRAM FOR OBSTRUCTION", "h" : "4DE6" },
{"g" : "\u4DE7", "n" : "HEXAGRAM FOR DELIVERANCE", "h" : "4DE7" },
{"g" : "\u4DE8", "n" : "HEXAGRAM FOR DECREASE", "h" : "4DE8" },
{"g" : "\u4DE9", "n" : "HEXAGRAM FOR INCREASE", "h" : "4DE9" },
{"g" : "\u4DEA", "n" : "HEXAGRAM FOR BREAKTHROUGH", "h" : "4DEA" },
{"g" : "\u4DEB", "n" : "HEXAGRAM FOR COMING TO MEET", "h" : "4DEB" },
{"g" : "\u4DEC", "n" : "HEXAGRAM FOR GATHERING TOGETHER", "h" : "4DEC" },
{"g" : "\u4DED", "n" : "HEXAGRAM FOR PUSHING UPWARD", "h" : "4DED" },
{"g" : "\u4DEE", "n" : "HEXAGRAM FOR OPPRESSION", "h" : "4DEE" },
{"g" : "\u4DEF", "n" : "HEXAGRAM FOR THE WELL", "h" : "4DEF" },
{"g" : "\u4DF0", "n" : "HEXAGRAM FOR REVOLUTION", "h" : "4DF0" },
{"g" : "\u4DF1", "n" : "HEXAGRAM FOR THE CAULDRON", "h" : "4DF1" },
{"g" : "\u4DF2", "n" : "HEXAGRAM FOR THE AROUSING THUNDER", "h" : "4DF2" },
{"g" : "\u4DF3", "n" : "HEXAGRAM FOR THE KEEPING STILL MOUNTAIN", "h" : "4DF3" },
{"g" : "\u4DF4", "n" : "HEXAGRAM FOR DEVELOPMENT", "h" : "4DF4" },
{"g" : "\u4DF5", "n" : "HEXAGRAM FOR THE MARRYING MAIDEN", "h" : "4DF5" },
{"g" : "\u4DF6", "n" : "HEXAGRAM FOR ABUNDANCE", "h" : "4DF6" },
{"g" : "\u4DF7", "n" : "HEXAGRAM FOR THE WANDERER", "h" : "4DF7" },
{"g" : "\u4DF8", "n" : "HEXAGRAM FOR THE GENTLE WIND", "h" : "4DF8" },
{"g" : "\u4DF9", "n" : "HEXAGRAM FOR THE JOYOUS LAKE", "h" : "4DF9" },
{"g" : "\u4DFA", "n" : "HEXAGRAM FOR DISPERSION", "h" : "4DFA" },
{"g" : "\u4DFB", "n" : "HEXAGRAM FOR LIMITATION", "h" : "4DFB" },
{"g" : "\u4DFC", "n" : "HEXAGRAM FOR INNER TRUTH", "h" : "4DFC" },
{"g" : "\u4DFD", "n" : "HEXAGRAM FOR SMALL PREPONDERANCE", "h" : "4DFD" },
{"g" : "\u4DFE", "n" : "HEXAGRAM FOR AFTER COMPLETION", "h" : "4DFE" },
{"g" : "\u4DFF", "n" : "HEXAGRAM FOR BEFORE COMPLETION", "h" : "4DFF" },

{"g" : "\u{1D300}", "n" : "MONOGRAM FOR EARTH", "h" : "1D300"},
{"g" : "\u{1D301}", "n" : "DIGRAM FOR HEAVENLY EARTH", "h" : "1D301"},
{"g" : "\u{1D302}", "n" : "DIGRAM FOR HUMAN EARTH", "h" : "1D302"},
{"g" : "\u{1D303}", "n" : "DIGRAM FOR EARTHLY HEAVEN", "h" : "1D303"},
{"g" : "\u{1D304}", "n" : "DIGRAM FOR EARTHLY HUMAN", "h" : "1D304"},
{"g" : "\u{1D305}", "n" : "DIGRAM FOR EARTH", "h" : "1D305"},
{"g" : "\u{1D306}", "n" : "TETRAGRAM FOR CENTRE", "h" : "1D306"},
{"g" : "\u{1D307}", "n" : "TETRAGRAM FOR FULL CIRCLE", "h" : "1D307"},
{"g" : "\u{1D308}", "n" : "TETRAGRAM FOR MIRED", "h" : "1D308"},
{"g" : "\u{1D309}", "n" : "TETRAGRAM FOR BARRIER", "h" : "1D309"},
{"g" : "\u{1D30A}", "n" : "TETRAGRAM FOR KEEPING SMALL", "h" : "1D30A"},
{"g" : "\u{1D30B}", "n" : "TETRAGRAM FOR CONTRARIETY", "h" : "1D30B"},
{"g" : "\u{1D30C}", "n" : "TETRAGRAM FOR ASCENT", "h" : "1D30C"},
{"g" : "\u{1D30D}", "n" : "TETRAGRAM FOR OPPOSITION", "h" : "1D30D"},
{"g" : "\u{1D30E}", "n" : "TETRAGRAM FOR BRANCHING OUT", "h" : "1D30E"},
{"g" : "\u{1D30F}", "n" : "TETRAGRAM FOR DEFECTIVENESS OR DISTORTION", "h" : "1D30F"},
{"g" : "\u{1D310}", "n" : "TETRAGRAM FOR DIVERGENCE", "h" : "1D310"},
{"g" : "\u{1D311}", "n" : "TETRAGRAM FOR YOUTHFULNESS", "h" : "1D311"},
{"g" : "\u{1D312}", "n" : "TETRAGRAM FOR INCREASE", "h" : "1D312"},
{"g" : "\u{1D313}", "n" : "TETRAGRAM FOR PENETRATION", "h" : "1D313"},
{"g" : "\u{1D314}", "n" : "TETRAGRAM FOR REACH", "h" : "1D314"},
{"g" : "\u{1D315}", "n" : "TETRAGRAM FOR CONTACT", "h" : "1D315"},
{"g" : "\u{1D316}", "n" : "TETRAGRAM FOR HOLDING BACK", "h" : "1D316"},
{"g" : "\u{1D317}", "n" : "TETRAGRAM FOR WAITING", "h" : "1D317"},
{"g" : "\u{1D318}", "n" : "TETRAGRAM FOR FOLLOWING", "h" : "1D318"},
{"g" : "\u{1D319}", "n" : "TETRAGRAM FOR ADVANCE", "h" : "1D319"},
{"g" : "\u{1D31A}", "n" : "TETRAGRAM FOR RELEASE", "h" : "1D31A"},
{"g" : "\u{1D31B}", "n" : "TETRAGRAM FOR RESISTANCE", "h" : "1D31B"},
{"g" : "\u{1D31C}", "n" : "TETRAGRAM FOR EASE", "h" : "1D31C"},
{"g" : "\u{1D31D}", "n" : "TETRAGRAM FOR JOY", "h" : "1D31D"},
{"g" : "\u{1D31E}", "n" : "TETRAGRAM FOR CONTENTION", "h" : "1D31E"},
{"g" : "\u{1D31F}", "n" : "TETRAGRAM FOR ENDEAVOUR", "h" : "1D31F"},
{"g" : "\u{1D320}", "n" : "TETRAGRAM FOR DUTIES", "h" : "1D320"},
{"g" : "\u{1D321}", "n" : "TETRAGRAM FOR CHANGE", "h" : "1D321"},
{"g" : "\u{1D322}", "n" : "TETRAGRAM FOR DECISIVENESS", "h" : "1D322"},
{"g" : "\u{1D323}", "n" : "TETRAGRAM FOR BOLD RESOLUTION", "h" : "1D323"},
{"g" : "\u{1D324}", "n" : "TETRAGRAM FOR PACKING", "h" : "1D324"},
{"g" : "\u{1D325}", "n" : "TETRAGRAM FOR LEGION", "h" : "1D325"},
{"g" : "\u{1D326}", "n" : "TETRAGRAM FOR CLOSENESS", "h" : "1D326"},
{"g" : "\u{1D327}", "n" : "TETRAGRAM FOR KINSHIP", "h" : "1D327"},
{"g" : "\u{1D328}", "n" : "TETRAGRAM FOR GATHERING", "h" : "1D328"},
{"g" : "\u{1D329}", "n" : "TETRAGRAM FOR STRENGTH", "h" : "1D329"},
{"g" : "\u{1D32A}", "n" : "TETRAGRAM FOR PURITY", "h" : "1D32A"},
{"g" : "\u{1D32B}", "n" : "TETRAGRAM FOR FULLNESS", "h" : "1D32B"},
{"g" : "\u{1D32C}", "n" : "TETRAGRAM FOR RESIDENCE", "h" : "1D32C"},
{"g" : "\u{1D32D}", "n" : "TETRAGRAM FOR LAW OR MODEL", "h" : "1D32D"},
{"g" : "\u{1D32E}", "n" : "TETRAGRAM FOR RESPONSE", "h" : "1D32E"},
{"g" : "\u{1D32F}", "n" : "TETRAGRAM FOR GOING TO MEET", "h" : "1D32F"},
{"g" : "\u{1D330}", "n" : "TETRAGRAM FOR ENCOUNTERS", "h" : "1D330"},
{"g" : "\u{1D331}", "n" : "TETRAGRAM FOR STOVE", "h" : "1D331"},
{"g" : "\u{1D332}", "n" : "TETRAGRAM FOR GREATNESS", "h" : "1D332"},
{"g" : "\u{1D333}", "n" : "TETRAGRAM FOR ENLARGEMENT", "h" : "1D333"},
{"g" : "\u{1D334}", "n" : "TETRAGRAM FOR PATTERN", "h" : "1D334"},
{"g" : "\u{1D335}", "n" : "TETRAGRAM FOR RITUAL", "h" : "1D335"},
{"g" : "\u{1D336}", "n" : "TETRAGRAM FOR FLIGHT", "h" : "1D336"},
{"g" : "\u{1D337}", "n" : "TETRAGRAM FOR VASTNESS OR WASTING", "h" : "1D337"},
{"g" : "\u{1D338}", "n" : "TETRAGRAM FOR CONSTANCY", "h" : "1D338"},
{"g" : "\u{1D339}", "n" : "TETRAGRAM FOR MEASURE", "h" : "1D339"},
{"g" : "\u{1D33A}", "n" : "TETRAGRAM FOR ETERNITY", "h" : "1D33A"},
{"g" : "\u{1D33B}", "n" : "TETRAGRAM FOR UNITY", "h" : "1D33B"},
{"g" : "\u{1D33C}", "n" : "TETRAGRAM FOR DIMINISHMENT", "h" : "1D33C"},
{"g" : "\u{1D33D}", "n" : "TETRAGRAM FOR CLOSED MOUTH", "h" : "1D33D"},
{"g" : "\u{1D33E}", "n" : "TETRAGRAM FOR GUARDEDNESS", "h" : "1D33E"},
{"g" : "\u{1D33F}", "n" : "TETRAGRAM FOR GATHERING IN", "h" : "1D33F"},
{"g" : "\u{1D340}", "n" : "TETRAGRAM FOR MASSING", "h" : "1D340"},
{"g" : "\u{1D341}", "n" : "TETRAGRAM FOR ACCUMULATION", "h" : "1D341"},
{"g" : "\u{1D342}", "n" : "TETRAGRAM FOR EMBELLISHMENT", "h" : "1D342"},
{"g" : "\u{1D343}", "n" : "TETRAGRAM FOR DOUBT", "h" : "1D343"},
{"g" : "\u{1D344}", "n" : "TETRAGRAM FOR WATCH", "h" : "1D344"},
{"g" : "\u{1D345}", "n" : "TETRAGRAM FOR SINKING", "h" : "1D345"},
{"g" : "\u{1D346}", "n" : "TETRAGRAM FOR INNER", "h" : "1D346"},
{"g" : "\u{1D347}", "n" : "TETRAGRAM FOR DEPARTURE", "h" : "1D347"},
{"g" : "\u{1D348}", "n" : "TETRAGRAM FOR DARKENING", "h" : "1D348"},
{"g" : "\u{1D349}", "n" : "TETRAGRAM FOR DIMMING", "h" : "1D349"},
{"g" : "\u{1D34A}", "n" : "TETRAGRAM FOR EXHAUSTION", "h" : "1D34A"},
{"g" : "\u{1D34B}", "n" : "TETRAGRAM FOR SEVERANCE", "h" : "1D34B"},
{"g" : "\u{1D34C}", "n" : "TETRAGRAM FOR STOPPAGE", "h" : "1D34C"},
{"g" : "\u{1D34D}", "n" : "TETRAGRAM FOR HARDNESS", "h" : "1D34D"},
{"g" : "\u{1D34E}", "n" : "TETRAGRAM FOR COMPLETION", "h" : "1D34E"},
{"g" : "\u{1D34F}", "n" : "TETRAGRAM FOR CLOSURE", "h" : "1D34F"},
{"g" : "\u{1D350}", "n" : "TETRAGRAM FOR FAILURE", "h" : "1D350"},
{"g" : "\u{1D351}", "n" : "TETRAGRAM FOR AGGRAVATION", "h" : "1D351"},
{"g" : "\u{1D352}", "n" : "TETRAGRAM FOR COMPLIANCE", "h" : "1D352"},
{"g" : "\u{1D353}", "n" : "TETRAGRAM FOR ON THE VERGE", "h" : "1D353"},
{"g" : "\u{1D354}", "n" : "TETRAGRAM FOR DIFFICULTIES", "h" : "1D354"},
{"g" : "\u{1D355}", "n" : "TETRAGRAM FOR LABOURING", "h" : "1D355"},
{"g" : "\u{1D356}", "n" : "TETRAGRAM FOR FOSTERING", "h" : "1D356"}
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
