'use strict';

const dispatch = require('./dispatch');

module.exports.handler = async (event, context) => {
    try {
        console.log(`event.bot.name=${event.bot.name}`);
        return await dispatch(event);
    } catch (err) {
        return err;
    }
};