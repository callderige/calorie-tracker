import '/imports/ui/mainNav.html';

Template.mainNav.helpers({

});

Template.mainNav.events({
	'click .logout': function(event){
		event.preventDefault();
		Meteor.logout();
		Router.go('/login');
	},
});

