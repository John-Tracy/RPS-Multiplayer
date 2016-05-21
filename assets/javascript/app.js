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
		if(dataRef.child("1").exists() == false)
			theGame.players[0].name = $('#name-input').val().trim();

			dataRef.set(

				{1:theGame.players[0]}

				);

			$('#name-input').val('');
			$('#player-start').empty();
			$('#player-start').append('<h4>Hello '+ theGame.players[0].name +', Waiting on player two</h4>');
			
			$('#player-uno').empty();
			$('#player-uno').append('<h3>' + theGame.players[0].nametoUpperCase() + '</h3>');

			if(dataRef.child("1").exists()){

			theGame.players[1].name = $('#name-input').val().trim();

			datRef.set(

				{2:theGame.players[1]}

				);

			$('#name-input').val('');
			$('#player-start').empty();
			$('#player-start').append('<h4>Hello ' + theGame.players[1].name + ', Player 1\'s turn');

			$('#player-dos').empty();
			$('#player-dos').append('<h3>' + theGame.players[1].name.toUpperCase() + '</h3>');
			}

			return false;
		},

	//	secondSet : function() {
//
//		if(dataRef.child(1).exists()){
//			theGame.players[1].name = $('#name-input').val().trim();
//
//			datRef.set(
//
//				{2:theGame.players[1]}
//
//				);

//			$('#name-input').val('');
//			$('#player-start').empty();
//			$('#player-start').append('<h4>Hello ' + theGame.players[1].name + ', Player 1\'s turn');
//
//			$('#player-dos').empty();
//			$('#player-dos').append('<h3>' + theGame.players[1].name.toUpperCase() + '</h3>');
//			}
//		},



};



 	var fireUrl = "https://r-p-s-133.firebaseio.com/";
 	var dataRef = new Firebase(fireUrl);

 	$('#submit-name').on('click', theGame.intialSet);













