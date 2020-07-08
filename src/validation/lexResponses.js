'use strict';

module.exports.delegate = function(sessionAttributes, slots) {
    return{
        sessionAttributes,
        dialogAction:{
            type: 'Delegate',
            slots
        },
    };
};

module.exports.elicitSlot = function(sessionAttributes, intentName, slots, slotToElicit, message, title, imageUrl, buttons) {
  return {
    sessionAttributes,
    dialogAction: {
      type: 'ElicitSlot',
      intentName,
      slots,
      slotToElicit,
      message,
      responseCard: getResponseCard(title, imageUrl, buttons)
    }
  };
};

function getResponseCard(title, imageUrl, buttons) {
  return {
    contentType: 'application/vnd.amazonaws.card.generic',
    genericAttachments: [
      {
        title,
        imageUrl,
        buttons
      }
    ]
  };
}