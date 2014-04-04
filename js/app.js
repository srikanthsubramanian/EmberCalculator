"use strict";
var calculatorApp = Ember.Application.create();

calculatorApp.Store=DS.Store.extend({
    revision:12,
    adapter:'DS.FixtureAdapter'
});


