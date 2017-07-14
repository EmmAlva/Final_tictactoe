const player = (name1, name2, count) => {
    
        $.post('http://test-ta.herokuapp.com/games',{
			"winner_player": name1,
			"loser_player": name2,
			"number_of_turns_to_win": count
        },(response) => {
            console.log(response);
            state.nextPage = Play;
            });
        };



	/*$.ajax({
		url: 'http://test-ta.herokuapp.com/games',
		type: 'POST',
		data: newPlayers,
		success: function(newPlayersData){
			console.log(newPlayersData);
		}
	});*/
	

	/*var newPlayers = {
		winner_player: player1.val(),
	   	loser_player: player2.val(),
	    number_of_turns_to_win: "...."
 	 }*/

