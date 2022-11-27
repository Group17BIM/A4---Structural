/* written by Tim McGinley 2022 */

// ok in here we need to include a lot of stuff.
// we need a menu... where would this fit?
// we need to start (over)loading stuff into the DOM.
// we need to split the screen into section and plan and KPIs and info - where should this go?


function main() {
	

	// calculate the beams
	const beams = document.getElementsByTagName("beam-");
	let num_beams = beams.length;
	console.log(num_beams);
	
	// add data to the properties box
	
	
	$('props-').prepend(' - on level: 0');
	$('props-').prepend('0 is the number of beams');
	
	$('props-').prepend(' - on level: 1'+'<br>');
	$('props-').prepend(num_beams+' is the number of beams');
	
	$('props-').prepend(' - on level: 2'+'<br>');
	$('props-').prepend(num_beams+' is the number of beams');
	
	
	// load the plan so we can edit it
	plan('Start');
	
	
	$( 'beam-' ).each(function() {
	console.log($(this)[0].innerHTML);
		$( this ).on("click", function(){
			
			
			changePlan($(this).attr('name')+':'+$(this).attr('level'));
			
		});
	});
	
	
}

function plan(text) {
jQuery('<div>', {
    id: 'plan',
    class: 'plan',
    title: 'click a beam to see the plan',
	html:text
}).appendTo('plan-');  
	
}

function changePlan(text) {
	$('#plan').html(text);
}





// <project-> - title etc.... | <site-> - also menu? site specific data?
// ---------------------------------------------------------------------
// <building-> - name of the building? this then needs to split in two...
// could also be more views and show a 3d? but maybe left is consistent
// ---------------------------------------------------------------------
// #section                   |               #plan
// this shows the beams      |      this shows a beam in plan         |
// in section                 |                 #plan                   |
//    <beam...->              -----------------------------------------
//                            |                 <properties->           |
// ---------------------------------------------------------------------