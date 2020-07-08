'use strict';

const getService = require('./getService');

module.exports = function(intentRequest, callback) {
    console.log(`dispatch userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
    console.log(intentRequest);
    const intentName = intentRequest.currentIntent.name;

    if (intentName === 'captureBotFeedback'){
        console.log(intentName + ' was called');
        return getService(intentRequest, callback);
    }

    throw new Error(`intent with name ${intentName} not supported`);
};