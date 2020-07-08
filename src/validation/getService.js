'use strict';

const lexResponses = require('./lexResponses');

module.exports = function(intentRequest, callback){
    validate(intentRequest, callback);
};

function validate(intentRequest, callback){
    var repeatNumber = intentRequest.currentIntent.slots.repeatMyself;
    var repeatedWord = intentRequest.currentIntent.slots.repeatedWord;
    console.log(repeatNumber);

    if(repeatNumber <= 0 || repeatedWord != null){
        callback(lexResponses.delegate(null,intentRequest.currentIntent.slots));
        return;
    } else {
        callback(lexResponses.elicitSlot(null,intentRequest.currentIntent.name,intentRequest.currentIntent.slots,'repeatedWord',null));
        return;
    }
}