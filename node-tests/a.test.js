const { test, describe } = require('node:test');
const { setTimeout } = require('node:timers/promises');

describe('node-tests', () => {
    test('a', () => {
        // not necessary, just making linters happy
        console.log('a done...');
        // wait 3 seconds and then fail.
        // this happens after test cleanup..
        setTimeout(1000).then(() => {
            throw new Error('test "a" threw!')
        });
    })
});