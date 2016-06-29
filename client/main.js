import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base';
import { Mongo } from 'meteor/mongo';

import './main.html';
import '/imports/ui/mainNav.js';
import '/imports/ui/login.js';
import '/imports/ui/superhome.js';
import '/imports/ui/register.js';
import '/imports/ui/about.js';
import '/imports/ui/calorieTrackerHome.js';

Template.body.onCreated(function bodyOnCreated(){

});