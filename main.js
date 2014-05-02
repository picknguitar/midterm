$(document).on('ready', function() {
  

	//contructs a calendar on page load 
	$('.calendar-container').append('<table class="cal-border"></table>');
	$('.cal-border').append('<thead class="cal-thead"></thead>');
	$('.cal-thead').append('<tr class="cal-row"></tr>');
	// $('.cal-row').html('<p>Upcoming <b>Concerts</b> In Your Area</p>');
	$('.cal-thead').after('<tbody class="cal-body"></tbody>');
		// loop for the rows
		for (var i=0; i<5; i++){	
			// creating a new table row		
			var calWeeks = $('<tr></tr>');
			//looping through the days
			for (var d=0; d<7; d++) {
				// calculating the day of the month
				var day = i * 7 + d + 1
				// adding table data cells with day number
				var calDay = $('<td>' + day + '</td>');
				// appending one day at a time to each row
				$(calWeeks).append(calDay);
				// alert('pause');
			}
			$('.cal-body').append(calWeeks);			
		}


	//runs the carousel at given interval
	$('carousel').carousel({
	interval: 1000
	})


	// opens lightbox on 'rate it' button
	$('.lightbox-btn').on('click', function(e) {
		e.preventDefault();
		$('#lightbox-back').css('display', 'block');
	})

	// sets lightbox-back display to none
	$('.exit-lightbox').on('click', function() {
		$('#lightbox-back').css('display', 'none');
	})

	$('#add-show-btn').on('click', function() {
		$('#add-show-form').css('display', 'block');
	})

   	$('.add-event-btn').on('click', function() {
   		$('#add-show-form').css('display', 'none');
   	})

});



