/**
 * Created with JetBrains WebStorm.
 * User: srikanths
 * Date: 13/9/13
 * Time: 5:15 PM
 * To change this template use File | Settings | File Templates.
 */
"use strict";

calculatorApp.CalculatorKeys = DS.Model.extend({
    numericKeys : DS.attr('Model'),
    operatorKeys : DS.attr('Model'),
    resultOperator : DS.attr('Model')
});

calculatorApp.NumericKeys = DS.Model.extend({
    label : DS.attr('string'),
    value : DS.attr('number'),
    eventHandler : DS.attr('string')
});

calculatorApp.OperatorKeys = DS.Model.extend({
    label : DS.attr('string'),
    eventHandler : DS.attr('string'),
    operation : DS.attr('function')
});

calculatorApp.ResultOperatorKey = DS.Model.extend({
    label : DS.attr('string'),
    eventHandler : DS.attr('string')
});

calculatorApp.NumericKeys.FIXTURES = [
    {label:'7',value:7},{label:'8',value:8},
    {label:'9',value:9},{label:'4',value:4},
    {label:'5',value:5},{label:'6',value:6},
    {label:'1',value:1},{label:'2',value:2},
    {label:'3',value:3},{label:'0',value:0}
];

calculatorApp.OperatorKeys.FIXTURES = [
    {label: "/",operation : function (valueA, valueB) {return valueA / valueB}},
    {label: "*",operation : function (valueA, valueB) {return valueA * valueB}},
    {label: "-",operation : function (valueA, valueB) {return valueA - valueB}},
    {label: "+",operation : function (valueA, valueB) {return valueA + valueB}}
];

calculatorApp.ResultOperatorKey.FIXTURES = [
    {label:'='}
];

calculatorApp.CalculatorKeys.FIXTURES=[
    {
        numericKeys : calculatorApp.NumericKeys.FIXTURES,
        operatorKeys : calculatorApp.OperatorKeys.FIXTURES,
        resultOperator : calculatorApp.ResultOperatorKey.FIXTURES
    }
];
