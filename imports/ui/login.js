import '/imports/ui/login.html';

Template.login.helpers({

});

Template.login.events({
	'submit form': function(event){
		event.preventDefault();
		var username = event.target.username.value;
		var password = event.target.password.value;
		Meteor.loginWithPassword(username, password);
		Router.go('/');
	}
});
