const { test, describe } = require('node:test');
const { setTimeout } = require('node:timers/promises');

describe('node-tests', () => {
    test('b', async () => {
        // wait for a bit to let promises from test-a to settle
        await setTimeout(2000);
        console.log('b done');
    });
});