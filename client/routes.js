Router.configure({
	layoutTemplate: 'mainNav'
});

Router.route('/', function(){
	if (!(Meteor.user() || Meteor.loggingIn())){
		Router.go('/login');
	}else{
		this.render('superhome');
	}
});

Router.route('/calorieTrackerHome', function(){
	if (!(Meteor.user() || Meteor.loggingIn())){
		Router.go('/login');
	}else{
		this.render('calorieTrackerHome');
	}
});

Router.route('/about', function(){
	this.render('about');
});

Router.route('/login', function(){
	if (!(Meteor.user() || Meteor.loggingIn())){
		this.render('login');
	}else{
		Router.go('/');
	}
});

Router.route('/register', function(){
	if (!(Meteor.user() || Meteor.loggingIn())){
		this.render('register');
	}else{
		Router.go('/');
	}
});