/**
 * Created with JetBrains WebStorm.
 * User: srikanths
 * Date: 13/9/13
 * Time: 3:53 PM
 * To change this template use File | Settings | File Templates.
 */
"use strict";

calculatorApp.CalculatorController = Ember.ObjectController.extend({
    valueA:0,
    valueB:0,
    operandCount:0,
    outputValue:0,
    operationString:'',
    selectedOperation:null,
    clearOperand:true,
    actions : {
        operandClicked : function(operand){
            console.log('operandClicked',operand);
            if(this.get('clearOperand')){
                this.set('outputValue',operand);
                this.set('operandCount',this.get('operandCount')+1);
                this.set('clearOperand',false);
                this.set('operationString',this.get('operationString')+''+this.get('outputValue'));
            }else{
                this.set('outputValue',this.outputValue * 10 + operand);
                this.set('operationString',this.get('operationString')+''+operand);
            }
            this.set('valueB',this.get('outputValue'));
        },
        operatorClicked : function(operation,label){
            if(this.get('operandCount')>=2){
                this.set('extraOperation',operation);
                var extraOperation = operation;
                var output = Math.floor(extraOperation(this.get('valueA'),this.get('valueB')));
                this.set('outputValue',output);
                this.set('operandCount',1);
            }
           console.log('operatorClicked',operation);
            this.set('selectedOperation',operation);
            this.set('operationString',this.get('operationString')+''+label);
            this.set('valueA',this.get('outputValue'));
            this.set('clearOperand',true);
        },
        calculate : function(){
            var selectedOperation = this.get('selectedOperation');
            if(selectedOperation!= null) {
                var output = Math.floor(selectedOperation(this.get('valueA'),this.get('valueB')));
                this.set('outputValue',output);
                this.set('clearOperand',true);
                this.set('valueA',this.get('outputValue'));
            }
        }
    }
});

calculatorApp.CalculatorController.create();
