/**
 * Created with JetBrains WebStorm.
 * User: srikanths
 * Date: 13/9/13
 * Time: 5:14 PM
 * To change this template use File | Settings | File Templates.
 */
"use strict";

calculatorApp.Router.map(function(){
    this.resource('calculator',{path:'/'});
});

calculatorApp.CalculatorRoute = Ember.Route.extend({
    model : function(){
        return calculatorApp.CalculatorKeys.FIXTURES;
    }
});

