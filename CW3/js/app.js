
$(document).ready(function(){
	// Define variables
	var inProgress		= false;
	var goalSFX    		= new Audio('sounds/goal.wav');
	var crowdSFX     	= new Audio('sounds/crowd.wav');
	var lwSFX     		= new Audio('sounds/long_whistle.wav');
	var swSFX     		= new Audio('sounds/short_whistle.wav');

	// Volume controls
	goalSFX.volume		= 0.5;
	lwSFX.volume 		= 0.7;
	swSFX.volume		= 0.3;

	// Generate a random number
	function randUpTo(number){
		return Math.floor(Math.random() * number) + 1;
	}

	// Start game
	$('#simulator').click(function(){
		if(inProgress == true){
			// Game is in progress
			return false;
		}

		// Game is not in progress
		// Load sounds
		crowdSFX.play();
		lwSFX.play();

		// Start game time
		$('.start').text('0');

		// More in-game variables
		var minute = $('.start');
		var ht	   = 0;

		// Set game as "in progress"
		inProgress = true;

		var events = [
			'scored!',
			'shot and missed',
			'shot on target',
			'received a yellow card',
			'have a player sent off',
			'have a corner',
			'have a free-kick'
		];

		var teams = [
			'Germany',
			'Netherlands'
		];

		// Start displaying facts
		$('.fact_card').append('<p class="one_event">And we\'re off!');

		// Start interval
		var match = setInterval(function(){
			// Loop 5 times per second

			// Check if game is finished
			if(parseInt(minute.text()) == 90){
				// Is 90th minute
				clearInterval(match);

				// Check for winner
				if(parseInt($('span[data-id="' + teams[0] + '"]').text()) > parseInt($('span[data-id="' + teams[1] + '"]').text())){
					// Team 1 wins
					$('.fact_card').append('<p class="one_event">' + teams[0] + ' wins!</p>');
				} else if(parseInt($('span[data-id="' + teams[1] + '"]').text()) > parseInt($('span[data-id="' + teams[0] + '"]').text())){
					// Team 2 wins
					$('.fact_card').append('<p class="one_event">' + teams[1] + ' wins!</p>');
				} else {
					// Draw
					$('.fact_card').append('<p class="one_event">It\'s a draw!</p>');
				}

				// Keep div scrolled to bottom
				$('.fact_card').scrollTop(1E10);

				// Pause crowd
				crowdSFX.pause();
				// Play end whistle
				lwSFX.play();

				return false;
			}

			// Check if it's half time
			if(parseInt(minute.text()) == 45){
				// Is half time
				if(ht <= 20){
					// Pause for 20 game minutes
					if(ht == 0){
						$('.fact_card').append('<p class="one_event">It\'s half time</p>');

						// Play half time whistle
						swSFX.play();
					}

					if(ht == 20){
						// Ready to start second half
						$('.fact_card').append('<p class="one_event">The second half has started</p>');

						// Play second half whistle
						swSFX.play();
					}

					$('.fact_card').scrollTop(1E10);

					ht++;

					return false;
				}
			}

			// Increment time
			minute.text(parseInt(minute.text()) + 1);

			// Create some events
			var thisEvent = randUpTo(100);

			if(thisEvent < 20){
				// Number has to be between 1 and 20 to trigger event

				// Decide which team the event is occuring with
				var whichTeam = randUpTo(2);

				// Get what the event was
				var eventHappened = randUpTo(events.length);

				// Add event to fact card
				$('.fact_card').append('<p class="one_event">' + minute.text() + ' - ' + teams[whichTeam - 1] + ' ' + events[eventHappened - 1] + '</p>')

				// Keep div scrolled to bottom
				$('.fact_card').scrollTop(1E10);

				if(eventHappened - 1 == 0){
					// GOAL!

					// Play goal SFX
					goalSFX.play();

					var score = $('span[data-id="' + teams[whichTeam - 1] + '"]');

					// Add goal to scorecard
					score.text(parseInt(score.text()) + 1);
				} else if(eventHappened - 1 == 3 || eventHappened - 1 == 4){
					// Red or yellow card given
					swSFX.play();
				}
			}

		}, 200);
	});

});
