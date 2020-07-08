// Import all functions from hello-from-lambda.js
const lambda = require('../../../src/validation/index.js');
const repeat_0 = require('../../../events/repeat-0.json');
const repeat_1 = require('../../../events/repeat-1.json');
const repeat_1_word = require('../../../events/repeat-1-word.json');

// This includes all tests for helloFromLambdaHandler()
describe('Test for Feedback Bot validation', function () {
    // This test invokes helloFromLambdaHandler() and compare the result 
    it('Verifies eliciting the repeat word slot', async () => {
        const result = await lambda.handler(repeat_1);

        const expectedResult = 'ElicitSlot';
        // Compare the result with the expected result
        expect(result.dialogAction.type).toEqual(expectedResult);
    });
    // This test invokes helloFromLambdaHandler() and compare the result 
    it('Verifies delegation if the repeat word slot is filled', async () => {
        const result = await lambda.handler(repeat_1_word);

        const expectedResult = 'Delegate';
        // Compare the result with the expected result
        expect(result.dialogAction.type).toEqual(expectedResult);
    });
    // This test invokes helloFromLambdaHandler() and compare the result 
    it('Verifies delegation if the repeat word slot is zero', async () => {
        const result = await lambda.handler(repeat_0);

        const expectedResult = 'Delegate';
        // Compare the result with the expected result
        expect(result.dialogAction.type).toEqual(expectedResult);
    });
});
