import '/imports/ui/calorieTrackerHome.html';

Template.calorieTrackerHome.helpers({
	showDate(){
		var d = new Date();
		var day = d.getDate();
		var year = d.getFullYear();
		var months = new Array('January','February','March' ,'April' ,'May' ,'June' ,'July' ,'August' ,'September' ,'October' ,'November' , 'December');
		
		var month = months[d.getMonth()];
		var date = ''+month+'/'+day+'/'+year+'';
		return date;
	},

	months: [
		{ month: 'January' },
		{ month: 'February' },
		{ month: 'March' },
		{ month: 'April' },
		{ month: 'May' },
		{ month: 'June' },
		{ month: 'July' },
		{ month: 'August' },
		{ month: 'September' },
		{ month: 'October' },
		{ month: 'November' },
		{ month: 'December' }
	],

	years: [
		{ year: '2016' },
		{ year: '2017' }
	],

	calendarDate(){
		if(Session.get('selectedYear') && Session.get('selectedMonth')){
			var selectedYear = Session.get('selectedYear');
			var selectedMonth = Session.get('selectedMonth');
		}else{
			var selectedMonth = '';
			var selectedYear = '';
		}
		var date = selectedMonth+ ' '+selectedYear;
		return date;
	},

	modalDate(){
		if(Session.get('selectedYear') && Session.get('selectedMonth') && Session.get('selectedDay')){
			var selectedYear = Session.get('selectedYear');
			var selectedMonth = Session.get('selectedMonth');
			var selectedDay = Session.get('selectedDay');
			var date = selectedMonth+ '/' +selectedDay+ '/' +selectedYear;
		}else if(Session.get('selectedYear')){
			var date = 'Please select a month.';
		}else if(Session.get('selectedMonth')){
			var date = 'Please select a year.';
		}else{
			var date = 'Please select a year and month.';
		}
		return date;
	}
});

Template.calorieTrackerHome.events({
	'submit .cal-tracker-form'(event){
		event.preventDefault();

		const target = event.target;
		const meal = target.mealEntry.value;
		const calories = target.calorieEntry.value;
		const date = target.dateEntry.value;

		var temp = new Array();
		temp = date.split('/');
		for (var i = 0; i < temp.length; i++) {
			temp[i]; //Follows format of MM/DD/YYYY, e.g. 12/25/2010
		}
	},
	'click .year-btn'(event){
		const target = event.target;
		const year = target.value;
		Session.set('selectedYear', year);
	},

	'click .month-btn'(event){
		const target = event.target;
		const month = target.value;
		Session.set('selectedMonth', month);
	},

	'click .day-btn'(event){
		const target = event.target;
		const day = target.value;
		var selectedYear = Session.get('selectedYear');
		var selectedMonth = Session.get('selectedMonth');
		var selectedDay = Session.set('selectedDay', day)

		var modal = document.getElementById('dayModal');
		//var btn = document.getElementById("dayBtn");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];
		var span2 = document.getElementsByClassName("close")[1];

		// When the user clicks on the button, open the modal 
		modal.style.display = "block";
		

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		    modal.style.display = "none";
		}
		span2.onclick = function() {
		    modal.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		    if (event.target == modal) {
		        modal.style.display = "none";
		    }
		}
	}
});