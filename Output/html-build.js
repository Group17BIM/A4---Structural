/* written by Tim McGinley 2022 */

// ok in here we need to include a lot of stuff.
// we need a menu... where would this fit?
// we need to start (over)loading stuff into the DOM.
// we need to split the screen into section and plan and KPIs and info - where should this go?


function main() {
	
	

	
	// calculate the floors
	const floors = document.getElementsByTagName("floor-");
	//liczby = [7 42 54];
	let num_floors = floors.length;
	//let num_floors = [7 42 54];
	console.log(num_floors);
	
	//let liczby = [7 42 54];
	///console.log(liczby);
	// add data to the properties box
	
	let liczby =liczba;
	
	
	$('props-').prepend(' - on level: 0'+'<br>');
	$('props-').prepend('0 is the number of beams');
	
	$('props-').prepend(' - on level: 1'+'<br>');
	$('props-').prepend(num_floors+' is the number of beams');
	
	$('props-').prepend(' - on level: 2'+'<br>');
	$('props-').prepend(num_floors+' is the number of beams');
	
	$('props-').prepend( ' Load each beam can carry [in tones] '+'<br>');
	// load the plan so we can edit it
	plan('Start');
	
	// The .each() method is unnecessary here:
	$( 'floor-' ).each(function() {
	console.log($(this)[0].innerHTML);
		$( this ).on("click", function(){
			//$('plan-').css("background-color","black");
			
			changePlan($(this).attr('name')+':'+$(this).attr('level'));
			//$( this ).innerHTML
		});
	});
	
	
}

function plan(text) {
jQuery('<div>', {
    id: 'plan',
    class: 'plan',
    title: 'click a floor to see the plan',
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
// this shows the floors      |      this shows a floor in plan         |
// in section                 |                 #plan                   |
//    <floor...->              -----------------------------------------
//                            |                 <properties->           |
// ---------------------------------------------------------------------