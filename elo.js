// https://de.wikipedia.org/wiki/Elo-Zahl#Berechnung
var eloCalc = function(winner, loser) {
	var K = 10;
	var abs = Math.abs(loser - winner);
	var winner_calc = winner;
	var loser_calc = loser;
	if (abs > 400) {
		winner_calc = 400;
		loser_calc = -400;
	}
	console.log("abs", abs);
	console.log("before winner", winner);
	console.log("before loser", loser);
	var EWP_winner = 1 / (1 + (Math.pow(10, ((loser_calc - winner_calc) / 400))));
	var EWP_loser = 1 - EWP_winner;
	console.log("EWP_X", EWP_winner);
	console.log("EWP_Y", EWP_loser);
	winner = Math.ceil(winner + K * (1 - EWP_winner));
	loser = Math.ceil(loser + K * (0 - EWP_loser));
	console.log("after winner", winner);
	console.log("after loser", loser);
};
