import '/imports/ui/about.html';

Template.about.helpers({

});

Template.about.events({
	'submit form': function(event){
		event.preventDefault();
		var user = event.target.registerUser.value;
		var pass = event.target.registerPass.value;
		Accounts.createUser({
			username: user,
			password: pass
		});
		Router.go('/');
	}
});