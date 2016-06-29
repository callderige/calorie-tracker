import '/imports/ui/register.html';

Template.register.helpers({

});

Template.register.events({
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