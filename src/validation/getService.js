'use strict';

const lexResponses = require('./lexResponses');

module.exports = async (intentRequest) => {
    return validate(intentRequest);
};

function validate(intentRequest, callback) {
    var repeatNumber = intentRequest.currentIntent.slots.repeatMyself;
    var repeatedWord = intentRequest.currentIntent.slots.repeatedWord;
    
    console.log(repeatNumber);

    if(repeatNumber <= 0 || repeatedWord != null){
        return lexResponses.delegate(null,intentRequest.currentIntent.slots);
    } else {
        return (lexResponses.elicitSlot(null,intentRequest.currentIntent.name,intentRequest.currentIntent.slots,'repeatedWord',null));
    }
}