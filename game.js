var section = document.querySelector('section');
window.addEventListener('DOMContentLoaded', (event) => {
    showCodepoints(Array);
});

function showCodepoints(arrayObj) {
var codepoints = [
{"g" : "\u2616", "n" : "WHITE SHOGI PIECE", "h" : "2616" },
{"g" : "\u2617", "n" : "BLACK SHOGI PIECE", "h" : "2617" },

{"g" : "\u2654", "n" : "WHITE CHESS KING", "h" : "2654" },
{"g" : "\u2655", "n" : "WHITE CHESS QUEEN", "h" : "2655" },
{"g" : "\u2656", "n" : "WHITE CHESS ROOK", "h" : "2656" },
{"g" : "\u2657", "n" : "WHITE CHESS BISHOP", "h" : "2657" },
{"g" : "\u2658", "n" : "WHITE CHESS KNIGHT", "h" : "2658" },
{"g" : "\u2659", "n" : "WHITE CHESS PAWN", "h" : "2659" },
{"g" : "\u265A", "n" : "BLACK CHESS KING", "h" : "265A" },
{"g" : "\u265B", "n" : "BLACK CHESS QUEEN", "h" : "265B" },
{"g" : "\u265C", "n" : "BLACK CHESS ROOK", "h" : "265C" },
{"g" : "\u265D", "n" : "BLACK CHESS BISHOP", "h" : "265D" },
{"g" : "\u265E", "n" : "BLACK CHESS KNIGHT", "h" : "265E" },
{"g" : "\u265F", "n" : "BLACK CHESS PAWN", "h" : "265F" },

{"g" : "\u2660", "n" : "BLACK SPADE SUIT", "h" : "2660" },
{"g" : "\u2661", "n" : "WHITE HEART SUIT", "h" : "2661" },
{"g" : "\u2662", "n" : "WHITE DIAMOND SUIT", "h" : "2662" },
{"g" : "\u2663", "n" : "BLACK CLUB SUIT", "h" : "2663" },
{"g" : "\u2664", "n" : "WHITE SPADE SUIT", "h" : "2664" },
{"g" : "\u2665", "n" : "BLACK HEART SUIT", "h" : "2665" },
{"g" : "\u2666", "n" : "BLACK DIAMOND SUIT", "h" : "2666" },
{"g" : "\u2667", "n" : "WHITE CLUB SUIT", "h" : "2667" },

{"g" : "\u2680", "n" : "DIE FACE-1", "h" : "2680" },
{"g" : "\u2681", "n" : "DIE FACE-2", "h" : "2681" },
{"g" : "\u2682", "n" : "DIE FACE-3", "h" : "2682" },
{"g" : "\u2683", "n" : "DIE FACE-4", "h" : "2683" },
{"g" : "\u2684", "n" : "DIE FACE-5", "h" : "2684" },
{"g" : "\u2685", "n" : "DIE FACE-6", "h" : "2685" },

{"g" : "\u26C0", "n" : "WHITE DRAUGHTS MAN", "h" : "26C0" },
{"g" : "\u26C1", "n" : "WHITE DRAUGHTS KING", "h" : "26C1" },
{"g" : "\u26C2", "n" : "BLACK DRAUGHTS MAN", "h" : "26C2" },
{"g" : "\u26C3", "n" : "BLACK DRAUGHTS KING", "h" : "26C3" },

{"g" : "\u{1F000}", "n" : "MAHJONG TILE EAST WIND", "h" : "1F000"},
{"g" : "\u{1F001}", "n" : "MAHJONG TILE SOUTH WIND", "h" : "1F001"},
{"g" : "\u{1F002}", "n" : "MAHJONG TILE WEST WIND", "h" : "1F002"},
{"g" : "\u{1F003}", "n" : "MAHJONG TILE NORTH WIND", "h" : "1F003"},
{"g" : "\u{1F004}", "n" : "MAHJONG TILE RED DRAGON", "h" : "1F004"},
{"g" : "\u{1F005}", "n" : "MAHJONG TILE GREEN DRAGON", "h" : "1F005"},
{"g" : "\u{1F006}", "n" : "MAHJONG TILE WHITE DRAGON", "h" : "1F006"},
{"g" : "\u{1F007}", "n" : "MAHJONG TILE ONE OF CHARACTERS", "h" : "1F007"},
{"g" : "\u{1F008}", "n" : "MAHJONG TILE TWO OF CHARACTERS", "h" : "1F008"},
{"g" : "\u{1F009}", "n" : "MAHJONG TILE THREE OF CHARACTERS", "h" : "1F009"},
{"g" : "\u{1F00A}", "n" : "MAHJONG TILE FOUR OF CHARACTERS", "h" : "1F00A"},
{"g" : "\u{1F00B}", "n" : "MAHJONG TILE FIVE OF CHARACTERS", "h" : "1F00B"},
{"g" : "\u{1F00C}", "n" : "MAHJONG TILE SIX OF CHARACTERS", "h" : "1F00C"},
{"g" : "\u{1F00D}", "n" : "MAHJONG TILE SEVEN OF CHARACTERS", "h" : "1F00D"},
{"g" : "\u{1F00E}", "n" : "MAHJONG TILE EIGHT OF CHARACTERS", "h" : "1F00E"},
{"g" : "\u{1F00F}", "n" : "MAHJONG TILE NINE OF CHARACTERS", "h" : "1F00F"},
{"g" : "\u{1F010}", "n" : "MAHJONG TILE ONE OF BAMBOOS", "h" : "1F010"},
{"g" : "\u{1F011}", "n" : "MAHJONG TILE TWO OF BAMBOOS", "h" : "1F011"},
{"g" : "\u{1F012}", "n" : "MAHJONG TILE THREE OF BAMBOOS", "h" : "1F012"},
{"g" : "\u{1F013}", "n" : "MAHJONG TILE FOUR OF BAMBOOS", "h" : "1F013"},
{"g" : "\u{1F014}", "n" : "MAHJONG TILE FIVE OF BAMBOOS", "h" : "1F014"},
{"g" : "\u{1F015}", "n" : "MAHJONG TILE SIX OF BAMBOOS", "h" : "1F015"},
{"g" : "\u{1F016}", "n" : "MAHJONG TILE SEVEN OF BAMBOOS", "h" : "1F016"},
{"g" : "\u{1F017}", "n" : "MAHJONG TILE EIGHT OF BAMBOOS", "h" : "1F017"},
{"g" : "\u{1F018}", "n" : "MAHJONG TILE NINE OF BAMBOOS", "h" : "1F018"},
{"g" : "\u{1F019}", "n" : "MAHJONG TILE ONE OF CIRCLES", "h" : "1F019"},
{"g" : "\u{1F01A}", "n" : "MAHJONG TILE TWO OF CIRCLES", "h" : "1F01A"},
{"g" : "\u{1F01B}", "n" : "MAHJONG TILE THREE OF CIRCLES", "h" : "1F01B"},
{"g" : "\u{1F01C}", "n" : "MAHJONG TILE FOUR OF CIRCLES", "h" : "1F01C"},
{"g" : "\u{1F01D}", "n" : "MAHJONG TILE FIVE OF CIRCLES", "h" : "1F01D"},
{"g" : "\u{1F01E}", "n" : "MAHJONG TILE SIX OF CIRCLES", "h" : "1F01E"},
{"g" : "\u{1F01F}", "n" : "MAHJONG TILE SEVEN OF CIRCLES", "h" : "1F01F"},
{"g" : "\u{1F020}", "n" : "MAHJONG TILE EIGHT OF CIRCLES", "h" : "1F020"},
{"g" : "\u{1F021}", "n" : "MAHJONG TILE NINE OF CIRCLES", "h" : "1F021"},
{"g" : "\u{1F022}", "n" : "MAHJONG TILE PLUM", "h" : "1F022"},
{"g" : "\u{1F023}", "n" : "MAHJONG TILE ORCHID", "h" : "1F023"},
{"g" : "\u{1F024}", "n" : "MAHJONG TILE BAMBOO", "h" : "1F024"},
{"g" : "\u{1F025}", "n" : "MAHJONG TILE CHRYSANTHEMUM", "h" : "1F025"},
{"g" : "\u{1F026}", "n" : "MAHJONG TILE SPRING", "h" : "1F026"},
{"g" : "\u{1F027}", "n" : "MAHJONG TILE SUMMER", "h" : "1F027"},
{"g" : "\u{1F028}", "n" : "MAHJONG TILE AUTUMN", "h" : "1F028"},
{"g" : "\u{1F029}", "n" : "MAHJONG TILE WINTER", "h" : "1F029"},
{"g" : "\u{1F02A}", "n" : "MAHJONG TILE JOKER", "h" : "1F02A"},
{"g" : "\u{1F02B}", "n" : "MAHJONG TILE BACK", "h" : "1F02B"},

{"g" : "\u{1F030}", "n" : "DOMINO TILE HORIZONTAL BACK", "h" : "1F030"},
{"g" : "\u{1F031}", "n" : "DOMINO TILE HORIZONTAL-00-00", "h" : "1F031"},
{"g" : "\u{1F032}", "n" : "DOMINO TILE HORIZONTAL-00-01", "h" : "1F032"},
{"g" : "\u{1F033}", "n" : "DOMINO TILE HORIZONTAL-00-02", "h" : "1F033"},
{"g" : "\u{1F034}", "n" : "DOMINO TILE HORIZONTAL-00-03", "h" : "1F034"},
{"g" : "\u{1F035}", "n" : "DOMINO TILE HORIZONTAL-00-04", "h" : "1F035"},
{"g" : "\u{1F036}", "n" : "DOMINO TILE HORIZONTAL-00-05", "h" : "1F036"},
{"g" : "\u{1F037}", "n" : "DOMINO TILE HORIZONTAL-00-06", "h" : "1F037"},
{"g" : "\u{1F038}", "n" : "DOMINO TILE HORIZONTAL-01-00", "h" : "1F038"},
{"g" : "\u{1F039}", "n" : "DOMINO TILE HORIZONTAL-01-01", "h" : "1F039"},
{"g" : "\u{1F03A}", "n" : "DOMINO TILE HORIZONTAL-01-02", "h" : "1F03A"},
{"g" : "\u{1F03B}", "n" : "DOMINO TILE HORIZONTAL-01-03", "h" : "1F03B"},
{"g" : "\u{1F03C}", "n" : "DOMINO TILE HORIZONTAL-01-04", "h" : "1F03C"},
{"g" : "\u{1F03D}", "n" : "DOMINO TILE HORIZONTAL-01-05", "h" : "1F03D"},
{"g" : "\u{1F03E}", "n" : "DOMINO TILE HORIZONTAL-01-06", "h" : "1F03E"},
{"g" : "\u{1F03F}", "n" : "DOMINO TILE HORIZONTAL-02-00", "h" : "1F03F"},
{"g" : "\u{1F040}", "n" : "DOMINO TILE HORIZONTAL-02-01", "h" : "1F040"},
{"g" : "\u{1F041}", "n" : "DOMINO TILE HORIZONTAL-02-02", "h" : "1F041"},
{"g" : "\u{1F042}", "n" : "DOMINO TILE HORIZONTAL-02-03", "h" : "1F042"},
{"g" : "\u{1F043}", "n" : "DOMINO TILE HORIZONTAL-02-04", "h" : "1F043"},
{"g" : "\u{1F044}", "n" : "DOMINO TILE HORIZONTAL-02-05", "h" : "1F044"},
{"g" : "\u{1F045}", "n" : "DOMINO TILE HORIZONTAL-02-06", "h" : "1F045"},
{"g" : "\u{1F046}", "n" : "DOMINO TILE HORIZONTAL-03-00", "h" : "1F046"},
{"g" : "\u{1F047}", "n" : "DOMINO TILE HORIZONTAL-03-01", "h" : "1F047"},
{"g" : "\u{1F048}", "n" : "DOMINO TILE HORIZONTAL-03-02", "h" : "1F048"},
{"g" : "\u{1F049}", "n" : "DOMINO TILE HORIZONTAL-03-03", "h" : "1F049"},
{"g" : "\u{1F04A}", "n" : "DOMINO TILE HORIZONTAL-03-04", "h" : "1F04A"},
{"g" : "\u{1F04B}", "n" : "DOMINO TILE HORIZONTAL-03-05", "h" : "1F04B"},
{"g" : "\u{1F04C}", "n" : "DOMINO TILE HORIZONTAL-03-06", "h" : "1F04C"},
{"g" : "\u{1F04D}", "n" : "DOMINO TILE HORIZONTAL-04-00", "h" : "1F04D"},
{"g" : "\u{1F04E}", "n" : "DOMINO TILE HORIZONTAL-04-01", "h" : "1F04E"},
{"g" : "\u{1F04F}", "n" : "DOMINO TILE HORIZONTAL-04-02", "h" : "1F04F"},
{"g" : "\u{1F050}", "n" : "DOMINO TILE HORIZONTAL-04-03", "h" : "1F050"},
{"g" : "\u{1F051}", "n" : "DOMINO TILE HORIZONTAL-04-04", "h" : "1F051"},
{"g" : "\u{1F052}", "n" : "DOMINO TILE HORIZONTAL-04-05", "h" : "1F052"},
{"g" : "\u{1F053}", "n" : "DOMINO TILE HORIZONTAL-04-06", "h" : "1F053"},
{"g" : "\u{1F054}", "n" : "DOMINO TILE HORIZONTAL-05-00", "h" : "1F054"},
{"g" : "\u{1F055}", "n" : "DOMINO TILE HORIZONTAL-05-01", "h" : "1F055"},
{"g" : "\u{1F056}", "n" : "DOMINO TILE HORIZONTAL-05-02", "h" : "1F056"},
{"g" : "\u{1F057}", "n" : "DOMINO TILE HORIZONTAL-05-03", "h" : "1F057"},
{"g" : "\u{1F058}", "n" : "DOMINO TILE HORIZONTAL-05-04", "h" : "1F058"},
{"g" : "\u{1F059}", "n" : "DOMINO TILE HORIZONTAL-05-05", "h" : "1F059"},
{"g" : "\u{1F05A}", "n" : "DOMINO TILE HORIZONTAL-05-06", "h" : "1F05A"},
{"g" : "\u{1F05B}", "n" : "DOMINO TILE HORIZONTAL-06-00", "h" : "1F05B"},
{"g" : "\u{1F05C}", "n" : "DOMINO TILE HORIZONTAL-06-01", "h" : "1F05C"},
{"g" : "\u{1F05D}", "n" : "DOMINO TILE HORIZONTAL-06-02", "h" : "1F05D"},
{"g" : "\u{1F05E}", "n" : "DOMINO TILE HORIZONTAL-06-03", "h" : "1F05E"},
{"g" : "\u{1F05F}", "n" : "DOMINO TILE HORIZONTAL-06-04", "h" : "1F05F"},
{"g" : "\u{1F060}", "n" : "DOMINO TILE HORIZONTAL-06-05", "h" : "1F060"},
{"g" : "\u{1F061}", "n" : "DOMINO TILE HORIZONTAL-06-06", "h" : "1F061"},
{"g" : "\u{1F062}", "n" : "DOMINO TILE VERTICAL BACK", "h" : "1F062"},
{"g" : "\u{1F063}", "n" : "DOMINO TILE VERTICAL-00-00", "h" : "1F063"},
{"g" : "\u{1F064}", "n" : "DOMINO TILE VERTICAL-00-01", "h" : "1F064"},
{"g" : "\u{1F065}", "n" : "DOMINO TILE VERTICAL-00-02", "h" : "1F065"},
{"g" : "\u{1F066}", "n" : "DOMINO TILE VERTICAL-00-03", "h" : "1F066"},
{"g" : "\u{1F067}", "n" : "DOMINO TILE VERTICAL-00-04", "h" : "1F067"},
{"g" : "\u{1F068}", "n" : "DOMINO TILE VERTICAL-00-05", "h" : "1F068"},
{"g" : "\u{1F069}", "n" : "DOMINO TILE VERTICAL-00-06", "h" : "1F069"},
{"g" : "\u{1F06A}", "n" : "DOMINO TILE VERTICAL-01-00", "h" : "1F06A"},
{"g" : "\u{1F06B}", "n" : "DOMINO TILE VERTICAL-01-01", "h" : "1F06B"},
{"g" : "\u{1F06C}", "n" : "DOMINO TILE VERTICAL-01-02", "h" : "1F06C"},
{"g" : "\u{1F06D}", "n" : "DOMINO TILE VERTICAL-01-03", "h" : "1F06D"},
{"g" : "\u{1F06E}", "n" : "DOMINO TILE VERTICAL-01-04", "h" : "1F06E"},
{"g" : "\u{1F06F}", "n" : "DOMINO TILE VERTICAL-01-05", "h" : "1F06F"},
{"g" : "\u{1F070}", "n" : "DOMINO TILE VERTICAL-01-06", "h" : "1F070"},
{"g" : "\u{1F071}", "n" : "DOMINO TILE VERTICAL-02-00", "h" : "1F071"},
{"g" : "\u{1F072}", "n" : "DOMINO TILE VERTICAL-02-01", "h" : "1F072"},
{"g" : "\u{1F073}", "n" : "DOMINO TILE VERTICAL-02-02", "h" : "1F073"},
{"g" : "\u{1F074}", "n" : "DOMINO TILE VERTICAL-02-03", "h" : "1F074"},
{"g" : "\u{1F075}", "n" : "DOMINO TILE VERTICAL-02-04", "h" : "1F075"},
{"g" : "\u{1F076}", "n" : "DOMINO TILE VERTICAL-02-05", "h" : "1F076"},
{"g" : "\u{1F077}", "n" : "DOMINO TILE VERTICAL-02-06", "h" : "1F077"},
{"g" : "\u{1F078}", "n" : "DOMINO TILE VERTICAL-03-00", "h" : "1F078"},
{"g" : "\u{1F079}", "n" : "DOMINO TILE VERTICAL-03-01", "h" : "1F079"},
{"g" : "\u{1F07A}", "n" : "DOMINO TILE VERTICAL-03-02", "h" : "1F07A"},
{"g" : "\u{1F07B}", "n" : "DOMINO TILE VERTICAL-03-03", "h" : "1F07B"},
{"g" : "\u{1F07C}", "n" : "DOMINO TILE VERTICAL-03-04", "h" : "1F07C"},
{"g" : "\u{1F07D}", "n" : "DOMINO TILE VERTICAL-03-05", "h" : "1F07D"},
{"g" : "\u{1F07E}", "n" : "DOMINO TILE VERTICAL-03-06", "h" : "1F07E"},
{"g" : "\u{1F07F}", "n" : "DOMINO TILE VERTICAL-04-00", "h" : "1F07F"},
{"g" : "\u{1F080}", "n" : "DOMINO TILE VERTICAL-04-01", "h" : "1F080"},
{"g" : "\u{1F081}", "n" : "DOMINO TILE VERTICAL-04-02", "h" : "1F081"},
{"g" : "\u{1F082}", "n" : "DOMINO TILE VERTICAL-04-03", "h" : "1F082"},
{"g" : "\u{1F083}", "n" : "DOMINO TILE VERTICAL-04-04", "h" : "1F083"},
{"g" : "\u{1F084}", "n" : "DOMINO TILE VERTICAL-04-05", "h" : "1F084"},
{"g" : "\u{1F085}", "n" : "DOMINO TILE VERTICAL-04-06", "h" : "1F085"},
{"g" : "\u{1F086}", "n" : "DOMINO TILE VERTICAL-05-00", "h" : "1F086"},
{"g" : "\u{1F087}", "n" : "DOMINO TILE VERTICAL-05-01", "h" : "1F087"},
{"g" : "\u{1F088}", "n" : "DOMINO TILE VERTICAL-05-02", "h" : "1F088"},
{"g" : "\u{1F089}", "n" : "DOMINO TILE VERTICAL-05-03", "h" : "1F089"},
{"g" : "\u{1F08A}", "n" : "DOMINO TILE VERTICAL-05-04", "h" : "1F08A"},
{"g" : "\u{1F08B}", "n" : "DOMINO TILE VERTICAL-05-05", "h" : "1F08B"},
{"g" : "\u{1F08C}", "n" : "DOMINO TILE VERTICAL-05-06", "h" : "1F08C"},
{"g" : "\u{1F08D}", "n" : "DOMINO TILE VERTICAL-06-00", "h" : "1F08D"},
{"g" : "\u{1F08E}", "n" : "DOMINO TILE VERTICAL-06-01", "h" : "1F08E"},
{"g" : "\u{1F08F}", "n" : "DOMINO TILE VERTICAL-06-02", "h" : "1F08F"},
{"g" : "\u{1F090}", "n" : "DOMINO TILE VERTICAL-06-03", "h" : "1F090"},
{"g" : "\u{1F091}", "n" : "DOMINO TILE VERTICAL-06-04", "h" : "1F091"},
{"g" : "\u{1F092}", "n" : "DOMINO TILE VERTICAL-06-05", "h" : "1F092"},
{"g" : "\u{1F093}", "n" : "DOMINO TILE VERTICAL-06-06", "h" : "1F093"},

{"g" : "\u{1F0A0}", "n" : "PLAYING CARD BACK", "h" : "1F0A0"},
{"g" : "\u{1F0A1}", "n" : "PLAYING CARD ACE OF SPADES", "h" : "1F0A1"},
{"g" : "\u{1F0A2}", "n" : "PLAYING CARD TWO OF SPADES", "h" : "1F0A2"},
{"g" : "\u{1F0A3}", "n" : "PLAYING CARD THREE OF SPADES", "h" : "1F0A3"},
{"g" : "\u{1F0A4}", "n" : "PLAYING CARD FOUR OF SPADES", "h" : "1F0A4"},
{"g" : "\u{1F0A5}", "n" : "PLAYING CARD FIVE OF SPADES", "h" : "1F0A5"},
{"g" : "\u{1F0A6}", "n" : "PLAYING CARD SIX OF SPADES", "h" : "1F0A6"},
{"g" : "\u{1F0A7}", "n" : "PLAYING CARD SEVEN OF SPADES", "h" : "1F0A7"},
{"g" : "\u{1F0A8}", "n" : "PLAYING CARD EIGHT OF SPADES", "h" : "1F0A8"},
{"g" : "\u{1F0A9}", "n" : "PLAYING CARD NINE OF SPADES", "h" : "1F0A9"},
{"g" : "\u{1F0AA}", "n" : "PLAYING CARD TEN OF SPADES", "h" : "1F0AA"},
{"g" : "\u{1F0AB}", "n" : "PLAYING CARD JACK OF SPADES", "h" : "1F0AB"},
{"g" : "\u{1F0AC}", "n" : "PLAYING CARD KNIGHT OF SPADES", "h" : "1F0AC"},
{"g" : "\u{1F0AD}", "n" : "PLAYING CARD QUEEN OF SPADES", "h" : "1F0AD"},
{"g" : "\u{1F0AE}", "n" : "PLAYING CARD KING OF SPADES", "h" : "1F0AE"},

{"g" : "\u{1F0B1}", "n" : "PLAYING CARD ACE OF HEARTS", "h" : "1F0B1"},
{"g" : "\u{1F0B2}", "n" : "PLAYING CARD TWO OF HEARTS", "h" : "1F0B2"},
{"g" : "\u{1F0B3}", "n" : "PLAYING CARD THREE OF HEARTS", "h" : "1F0B3"},
{"g" : "\u{1F0B4}", "n" : "PLAYING CARD FOUR OF HEARTS", "h" : "1F0B4"},
{"g" : "\u{1F0B5}", "n" : "PLAYING CARD FIVE OF HEARTS", "h" : "1F0B5"},
{"g" : "\u{1F0B6}", "n" : "PLAYING CARD SIX OF HEARTS", "h" : "1F0B6"},
{"g" : "\u{1F0B7}", "n" : "PLAYING CARD SEVEN OF HEARTS", "h" : "1F0B7"},
{"g" : "\u{1F0B8}", "n" : "PLAYING CARD EIGHT OF HEARTS", "h" : "1F0B8"},
{"g" : "\u{1F0B9}", "n" : "PLAYING CARD NINE OF HEARTS", "h" : "1F0B9"},
{"g" : "\u{1F0BA}", "n" : "PLAYING CARD TEN OF HEARTS", "h" : "1F0BA"},
{"g" : "\u{1F0BB}", "n" : "PLAYING CARD JACK OF HEARTS", "h" : "1F0BB"},
{"g" : "\u{1F0BC}", "n" : "PLAYING CARD KNIGHT OF HEARTS", "h" : "1F0BC"},
{"g" : "\u{1F0BD}", "n" : "PLAYING CARD QUEEN OF HEARTS", "h" : "1F0BD"},
{"g" : "\u{1F0BE}", "n" : "PLAYING CARD KING OF HEARTS", "h" : "1F0BE"},
{"g" : "\u{1F0BF}", "n" : "PLAYING CARD RED JOKER", "h" : "1F0BF"},

{"g" : "\u{1F0C1}", "n" : "PLAYING CARD ACE OF DIAMONDS", "h" : "1F0C1"},
{"g" : "\u{1F0C2}", "n" : "PLAYING CARD TWO OF DIAMONDS", "h" : "1F0C2"},
{"g" : "\u{1F0C3}", "n" : "PLAYING CARD THREE OF DIAMONDS", "h" : "1F0C3"},
{"g" : "\u{1F0C4}", "n" : "PLAYING CARD FOUR OF DIAMONDS", "h" : "1F0C4"},
{"g" : "\u{1F0C5}", "n" : "PLAYING CARD FIVE OF DIAMONDS", "h" : "1F0C5"},
{"g" : "\u{1F0C6}", "n" : "PLAYING CARD SIX OF DIAMONDS", "h" : "1F0C6"},
{"g" : "\u{1F0C7}", "n" : "PLAYING CARD SEVEN OF DIAMONDS", "h" : "1F0C7"},
{"g" : "\u{1F0C8}", "n" : "PLAYING CARD EIGHT OF DIAMONDS", "h" : "1F0C8"},
{"g" : "\u{1F0C9}", "n" : "PLAYING CARD NINE OF DIAMONDS", "h" : "1F0C9"},
{"g" : "\u{1F0CA}", "n" : "PLAYING CARD TEN OF DIAMONDS", "h" : "1F0CA"},
{"g" : "\u{1F0CB}", "n" : "PLAYING CARD JACK OF DIAMONDS", "h" : "1F0CB"},
{"g" : "\u{1F0CC}", "n" : "PLAYING CARD KNIGHT OF DIAMONDS", "h" : "1F0CC"},
{"g" : "\u{1F0CD}", "n" : "PLAYING CARD QUEEN OF DIAMONDS", "h" : "1F0CD"},
{"g" : "\u{1F0CE}", "n" : "PLAYING CARD KING OF DIAMONDS", "h" : "1F0CE"},
{"g" : "\u{1F0CF}", "n" : "PLAYING CARD BLACK JOKER", "h" : "1F0CF"},

{"g" : "\u{1F0D1}", "n" : "PLAYING CARD ACE OF CLUBS", "h" : "1F0D1"},
{"g" : "\u{1F0D2}", "n" : "PLAYING CARD TWO OF CLUBS", "h" : "1F0D2"},
{"g" : "\u{1F0D3}", "n" : "PLAYING CARD THREE OF CLUBS", "h" : "1F0D3"},
{"g" : "\u{1F0D4}", "n" : "PLAYING CARD FOUR OF CLUBS", "h" : "1F0D4"},
{"g" : "\u{1F0D5}", "n" : "PLAYING CARD FIVE OF CLUBS", "h" : "1F0D5"},
{"g" : "\u{1F0D6}", "n" : "PLAYING CARD SIX OF CLUBS", "h" : "1F0D6"},
{"g" : "\u{1F0D7}", "n" : "PLAYING CARD SEVEN OF CLUBS", "h" : "1F0D7"},
{"g" : "\u{1F0D8}", "n" : "PLAYING CARD EIGHT OF CLUBS", "h" : "1F0D8"},
{"g" : "\u{1F0D9}", "n" : "PLAYING CARD NINE OF CLUBS", "h" : "1F0D9"},
{"g" : "\u{1F0DA}", "n" : "PLAYING CARD TEN OF CLUBS", "h" : "1F0DA"},
{"g" : "\u{1F0DB}", "n" : "PLAYING CARD JACK OF CLUBS", "h" : "1F0DB"},
{"g" : "\u{1F0DC}", "n" : "PLAYING CARD KNIGHT OF CLUBS", "h" : "1F0DC"},
{"g" : "\u{1F0DD}", "n" : "PLAYING CARD QUEEN OF CLUBS", "h" : "1F0DD"},
{"g" : "\u{1F0DE}", "n" : "PLAYING CARD KING OF CLUBS", "h" : "1F0DE"},
{"g" : "\u{1F0DF}", "n" : "PLAYING CARD WHITE JOKER", "h" : "1F0DF"},
{"g" : "\u{1F0E0}", "n" : "PLAYING CARD FOOL", "h" : "1F0E0"},
{"g" : "\u{1F0E1}", "n" : "PLAYING CARD TRUMP-1", "h" : "1F0E1"},
{"g" : "\u{1F0E2}", "n" : "PLAYING CARD TRUMP-2", "h" : "1F0E2"},
{"g" : "\u{1F0E3}", "n" : "PLAYING CARD TRUMP-3", "h" : "1F0E3"},
{"g" : "\u{1F0E4}", "n" : "PLAYING CARD TRUMP-4", "h" : "1F0E4"},
{"g" : "\u{1F0E5}", "n" : "PLAYING CARD TRUMP-5", "h" : "1F0E5"},
{"g" : "\u{1F0E6}", "n" : "PLAYING CARD TRUMP-6", "h" : "1F0E6"},
{"g" : "\u{1F0E7}", "n" : "PLAYING CARD TRUMP-7", "h" : "1F0E7"},
{"g" : "\u{1F0E8}", "n" : "PLAYING CARD TRUMP-8", "h" : "1F0E8"},
{"g" : "\u{1F0E9}", "n" : "PLAYING CARD TRUMP-9", "h" : "1F0E9"},
{"g" : "\u{1F0EA}", "n" : "PLAYING CARD TRUMP-10", "h" : "1F0EA"},
{"g" : "\u{1F0EB}", "n" : "PLAYING CARD TRUMP-11", "h" : "1F0EB"},
{"g" : "\u{1F0EC}", "n" : "PLAYING CARD TRUMP-12", "h" : "1F0EC"},
{"g" : "\u{1F0ED}", "n" : "PLAYING CARD TRUMP-13", "h" : "1F0ED"},
{"g" : "\u{1F0EE}", "n" : "PLAYING CARD TRUMP-14", "h" : "1F0EE"},
{"g" : "\u{1F0EF}", "n" : "PLAYING CARD TRUMP-15", "h" : "1F0EF"},
{"g" : "\u{1F0F0}", "n" : "PLAYING CARD TRUMP-16", "h" : "1F0F0"},
{"g" : "\u{1F0F1}", "n" : "PLAYING CARD TRUMP-17", "h" : "1F0F1"},
{"g" : "\u{1F0F2}", "n" : "PLAYING CARD TRUMP-18", "h" : "1F0F2"},
{"g" : "\u{1F0F3}", "n" : "PLAYING CARD TRUMP-19", "h" : "1F0F3"},
{"g" : "\u{1F0F4}", "n" : "PLAYING CARD TRUMP-20", "h" : "1F0F4"},
{"g" : "\u{1F0F5}", "n" : "PLAYING CARD TRUMP-21", "h" : "1F0F5"},

{"g" : "\u{1FA00}", "n" : "NEUTRAL CHESS KING", "h" : "1FA00"},
{"g" : "\u{1FA01}", "n" : "NEUTRAL CHESS QUEEN", "h" : "1FA01"},
{"g" : "\u{1FA02}", "n" : "NEUTRAL CHESS ROOK", "h" : "1FA02"},
{"g" : "\u{1FA03}", "n" : "NEUTRAL CHESS BISHOP", "h" : "1FA03"},
{"g" : "\u{1FA04}", "n" : "NEUTRAL CHESS KNIGHT", "h" : "1FA04"},
{"g" : "\u{1FA05}", "n" : "NEUTRAL CHESS PAWN", "h" : "1FA05"},
{"g" : "\u{1FA06}", "n" : "WHITE CHESS KNIGHT ROTATED FORTY-FIVE DEGREES", "h" : "1FA06"},
{"g" : "\u{1FA07}", "n" : "BLACK CHESS KNIGHT ROTATED FORTY-FIVE DEGREES", "h" : "1FA07"},
{"g" : "\u{1FA08}", "n" : "NEUTRAL CHESS KNIGHT ROTATED FORTY-FIVE DEGREES", "h" : "1FA08"},
{"g" : "\u{1FA09}", "n" : "WHITE CHESS KING ROTATED NINETY DEGREES", "h" : "1FA09"},
{"g" : "\u{1FA0A}", "n" : "WHITE CHESS QUEEN ROTATED NINETY DEGREES", "h" : "1FA0A"},
{"g" : "\u{1FA0B}", "n" : "WHITE CHESS ROOK ROTATED NINETY DEGREES", "h" : "1FA0B"},
{"g" : "\u{1FA0C}", "n" : "WHITE CHESS BISHOP ROTATED NINETY DEGREES", "h" : "1FA0C"},
{"g" : "\u{1FA0D}", "n" : "WHITE CHESS KNIGHT ROTATED NINETY DEGREES", "h" : "1FA0D"},
{"g" : "\u{1FA0E}", "n" : "WHITE CHESS PAWN ROTATED NINETY DEGREES", "h" : "1FA0E"},
{"g" : "\u{1FA0F}", "n" : "BLACK CHESS KING ROTATED NINETY DEGREES", "h" : "1FA0F"},
{"g" : "\u{1FA10}", "n" : "BLACK CHESS QUEEN ROTATED NINETY DEGREES", "h" : "1FA10"},
{"g" : "\u{1FA11}", "n" : "BLACK CHESS ROOK ROTATED NINETY DEGREES", "h" : "1FA11"},
{"g" : "\u{1FA12}", "n" : "BLACK CHESS BISHOP ROTATED NINETY DEGREES", "h" : "1FA12"},
{"g" : "\u{1FA13}", "n" : "BLACK CHESS KNIGHT ROTATED NINETY DEGREES", "h" : "1FA13"},
{"g" : "\u{1FA14}", "n" : "BLACK CHESS PAWN ROTATED NINETY DEGREES", "h" : "1FA14"},
{"g" : "\u{1FA15}", "n" : "NEUTRAL CHESS KING ROTATED NINETY DEGREES", "h" : "1FA15"},
{"g" : "\u{1FA16}", "n" : "NEUTRAL CHESS QUEEN ROTATED NINETY DEGREES", "h" : "1FA16"},
{"g" : "\u{1FA17}", "n" : "NEUTRAL CHESS ROOK ROTATED NINETY DEGREES", "h" : "1FA17"},
{"g" : "\u{1FA18}", "n" : "NEUTRAL CHESS BISHOP ROTATED NINETY DEGREES", "h" : "1FA18"},
{"g" : "\u{1FA19}", "n" : "NEUTRAL CHESS KNIGHT ROTATED NINETY DEGREES", "h" : "1FA19"},
{"g" : "\u{1FA1A}", "n" : "NEUTRAL CHESS PAWN ROTATED NINETY DEGREES", "h" : "1FA1A"},
{"g" : "\u{1FA1B}", "n" : "WHITE CHESS KNIGHT ROTATED ONE HUNDRED THIRTY-FIVE DEGREES", "h" : "1FA1B"},
{"g" : "\u{1FA1C}", "n" : "BLACK CHESS KNIGHT ROTATED ONE HUNDRED THIRTY-FIVE DEGREES", "h" : "1FA1C"},
{"g" : "\u{1FA1D}", "n" : "NEUTRAL CHESS KNIGHT ROTATED ONE HUNDRED THIRTY-FIVE DEGREES", "h" : "1FA1D"},
{"g" : "\u{1FA1E}", "n" : "WHITE CHESS TURNED KING", "h" : "1FA1E"},
{"g" : "\u{1FA1F}", "n" : "WHITE CHESS TURNED QUEEN", "h" : "1FA1F"},
{"g" : "\u{1FA20}", "n" : "WHITE CHESS TURNED ROOK", "h" : "1FA20"},
{"g" : "\u{1FA21}", "n" : "WHITE CHESS TURNED BISHOP", "h" : "1FA21"},
{"g" : "\u{1FA22}", "n" : "WHITE CHESS TURNED KNIGHT", "h" : "1FA22"},
{"g" : "\u{1FA23}", "n" : "WHITE CHESS TURNED PAWN", "h" : "1FA23"},
{"g" : "\u{1FA24}", "n" : "BLACK CHESS TURNED KING", "h" : "1FA24"},
{"g" : "\u{1FA25}", "n" : "BLACK CHESS TURNED QUEEN", "h" : "1FA25"},
{"g" : "\u{1FA26}", "n" : "BLACK CHESS TURNED ROOK", "h" : "1FA26"},
{"g" : "\u{1FA27}", "n" : "BLACK CHESS TURNED BISHOP", "h" : "1FA27"},
{"g" : "\u{1FA28}", "n" : "BLACK CHESS TURNED KNIGHT", "h" : "1FA28"},
{"g" : "\u{1FA29}", "n" : "BLACK CHESS TURNED PAWN", "h" : "1FA29"},
{"g" : "\u{1FA2A}", "n" : "NEUTRAL CHESS TURNED KING", "h" : "1FA2A"},
{"g" : "\u{1FA2B}", "n" : "NEUTRAL CHESS TURNED QUEEN", "h" : "1FA2B"},
{"g" : "\u{1FA2C}", "n" : "NEUTRAL CHESS TURNED ROOK", "h" : "1FA2C"},
{"g" : "\u{1FA2D}", "n" : "NEUTRAL CHESS TURNED BISHOP", "h" : "1FA2D"},
{"g" : "\u{1FA2E}", "n" : "NEUTRAL CHESS TURNED KNIGHT", "h" : "1FA2E"},
{"g" : "\u{1FA2F}", "n" : "NEUTRAL CHESS TURNED PAWN", "h" : "1FA2F"},
{"g" : "\u{1FA30}", "n" : "WHITE CHESS KNIGHT ROTATED TWO HUNDRED TWENTY-FIVE DEGREES", "h" : "1FA30"},
{"g" : "\u{1FA31}", "n" : "BLACK CHESS KNIGHT ROTATED TWO HUNDRED TWENTY-FIVE DEGREES", "h" : "1FA31"},
{"g" : "\u{1FA32}", "n" : "NEUTRAL CHESS KNIGHT ROTATED TWO HUNDRED TWENTY-FIVE DEGREES", "h" : "1FA32"},
{"g" : "\u{1FA33}", "n" : "WHITE CHESS KING ROTATED TWO HUNDRED SEVENTY DEGREES", "h" : "1FA33"},
{"g" : "\u{1FA34}", "n" : "WHITE CHESS QUEEN ROTATED TWO HUNDRED SEVENTY DEGREES", "h" : "1FA34"},
{"g" : "\u{1FA35}", "n" : "WHITE CHESS ROOK ROTATED TWO HUNDRED SEVENTY DEGREES", "h" : "1FA35"},
{"g" : "\u{1FA36}", "n" : "WHITE CHESS BISHOP ROTATED TWO HUNDRED SEVENTY DEGREES", "h" : "1FA36"},
{"g" : "\u{1FA37}", "n" : "WHITE CHESS KNIGHT ROTATED TWO HUNDRED SEVENTY DEGREES", "h" : "1FA37"},
{"g" : "\u{1FA38}", "n" : "WHITE CHESS PAWN ROTATED TWO HUNDRED SEVENTY DEGREES", "h" : "1FA38"},
{"g" : "\u{1FA39}", "n" : "BLACK CHESS KING ROTATED TWO HUNDRED SEVENTY DEGREES", "h" : "1FA39"},
{"g" : "\u{1FA3A}", "n" : "BLACK CHESS QUEEN ROTATED TWO HUNDRED SEVENTY DEGREES", "h" : "1FA3A"},
{"g" : "\u{1FA3B}", "n" : "BLACK CHESS ROOK ROTATED TWO HUNDRED SEVENTY DEGREES", "h" : "1FA3B"},
{"g" : "\u{1FA3C}", "n" : "BLACK CHESS BISHOP ROTATED TWO HUNDRED SEVENTY DEGREES", "h" : "1FA3C"},
{"g" : "\u{1FA3D}", "n" : "BLACK CHESS KNIGHT ROTATED TWO HUNDRED SEVENTY DEGREES", "h" : "1FA3D"},
{"g" : "\u{1FA3E}", "n" : "BLACK CHESS PAWN ROTATED TWO HUNDRED SEVENTY DEGREES", "h" : "1FA3E"},
{"g" : "\u{1FA3F}", "n" : "NEUTRAL CHESS KING ROTATED TWO HUNDRED SEVENTY DEGREES", "h" : "1FA3F"},
{"g" : "\u{1FA40}", "n" : "NEUTRAL CHESS QUEEN ROTATED TWO HUNDRED SEVENTY DEGREES", "h" : "1FA40"},
{"g" : "\u{1FA41}", "n" : "NEUTRAL CHESS ROOK ROTATED TWO HUNDRED SEVENTY DEGREES", "h" : "1FA41"},
{"g" : "\u{1FA42}", "n" : "NEUTRAL CHESS BISHOP ROTATED TWO HUNDRED SEVENTY DEGREES", "h" : "1FA42"},
{"g" : "\u{1FA43}", "n" : "NEUTRAL CHESS KNIGHT ROTATED TWO HUNDRED SEVENTY DEGREES", "h" : "1FA43"},
{"g" : "\u{1FA44}", "n" : "NEUTRAL CHESS PAWN ROTATED TWO HUNDRED SEVENTY DEGREES", "h" : "1FA44"},
{"g" : "\u{1FA45}", "n" : "WHITE CHESS KNIGHT ROTATED THREE HUNDRED FIFTEEN DEGREES", "h" : "1FA45"},
{"g" : "\u{1FA46}", "n" : "BLACK CHESS KNIGHT ROTATED THREE HUNDRED FIFTEEN DEGREES", "h" : "1FA46"},
{"g" : "\u{1FA47}", "n" : "NEUTRAL CHESS KNIGHT ROTATED THREE HUNDRED FIFTEEN DEGREES", "h" : "1FA47"},
{"g" : "\u{1FA48}", "n" : "WHITE CHESS EQUIHOPPER", "h" : "1FA48"},
{"g" : "\u{1FA49}", "n" : "BLACK CHESS EQUIHOPPER", "h" : "1FA49"},
{"g" : "\u{1FA4A}", "n" : "NEUTRAL CHESS EQUIHOPPER", "h" : "1FA4A"},
{"g" : "\u{1FA4B}", "n" : "WHITE CHESS EQUIHOPPER ROTATED NINETY DEGREES", "h" : "1FA4B"},
{"g" : "\u{1FA4C}", "n" : "BLACK CHESS EQUIHOPPER ROTATED NINETY DEGREES", "h" : "1FA4C"},
{"g" : "\u{1FA4D}", "n" : "NEUTRAL CHESS EQUIHOPPER ROTATED NINETY DEGREES", "h" : "1FA4D"},
{"g" : "\u{1FA4E}", "n" : "WHITE CHESS KNIGHT-QUEEN", "h" : "1FA4E"},
{"g" : "\u{1FA4F}", "n" : "WHITE CHESS KNIGHT-ROOK", "h" : "1FA4F"},
{"g" : "\u{1FA50}", "n" : "WHITE CHESS KNIGHT-BISHOP", "h" : "1FA50"},
{"g" : "\u{1FA51}", "n" : "BLACK CHESS KNIGHT-QUEEN", "h" : "1FA51"},
{"g" : "\u{1FA52}", "n" : "BLACK CHESS KNIGHT-ROOK", "h" : "1FA52"},
{"g" : "\u{1FA53}", "n" : "BLACK CHESS KNIGHT-BISHOP", "h" : "1FA53"},

{"g" : "\u{1FA60}", "n" : "XIANGQI RED GENERAL", "h" : "1FA60"},
{"g" : "\u{1FA61}", "n" : "XIANGQI RED MANDARIN", "h" : "1FA61"},
{"g" : "\u{1FA62}", "n" : "XIANGQI RED ELEPHANT", "h" : "1FA62"},
{"g" : "\u{1FA63}", "n" : "XIANGQI RED HORSE", "h" : "1FA63"},
{"g" : "\u{1FA64}", "n" : "XIANGQI RED CHARIOT", "h" : "1FA64"},
{"g" : "\u{1FA65}", "n" : "XIANGQI RED CANNON", "h" : "1FA65"},
{"g" : "\u{1FA66}", "n" : "XIANGQI RED SOLDIER", "h" : "1FA66"},
{"g" : "\u{1FA67}", "n" : "XIANGQI BLACK GENERAL", "h" : "1FA67"},
{"g" : "\u{1FA68}", "n" : "XIANGQI BLACK MANDARIN", "h" : "1FA68"},
{"g" : "\u{1FA69}", "n" : "XIANGQI BLACK ELEPHANT", "h" : "1FA69"},
{"g" : "\u{1FA6A}", "n" : "XIANGQI BLACK HORSE", "h" : "1FA6A"},
{"g" : "\u{1FA6B}", "n" : "XIANGQI BLACK CHARIOT", "h" : "1FA6B"},
{"g" : "\u{1FA6C}", "n" : "XIANGQI BLACK CANNON", "h" : "1FA6C"},
{"g" : "\u{1FA6D}", "n" : "XIANGQI BLACK SOLDIER", "h" : "1FA6D"}
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