var theGame = {

		players: [
			{
				name: "",
				wins: 0,
				losses: 0
			},
			{
				name: "",
				wins: 0,
				losses: 0
			}
		],

		turn: 0,

		intialSet : function() {

			theGame.players[0].name = $('#name-input').val().trim();

			dataRef.update(
				{1:theGame.players[0]}
				);

			$('#name-input').val('');

			return false;
		},



};



 	var fireUrl = "https://r-p-s-133.firebaseio.com/";
 	var dataRef = new Firebase(fireUrl);

 	$('#submit-name').on('click', theGame.intialSet);











