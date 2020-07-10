'use strict';

const getService = require('./getService');

module.exports = async (intentRequest) => {
    console.log(`dispatch userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
    console.log(intentRequest);
    const intentName = intentRequest.currentIntent.name;
    const deployedIntent = process.env.feedbackIntentName || 'captureBotFeedback';

    if (intentName === deployedIntent){
        console.log(intentName + ' was called');
        return await getService(intentRequest);
    } else {
        throw new Error(`intent with name ${intentName} not supported`);
    }

    
};