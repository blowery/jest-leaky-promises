const {setTimeout} = require('node:timers/promises');

test('a', () => {
    // not necessary, just making linters happy
    expect(true).toBe(true);

    // wait 3 seconds and then fail.
    // this happens after test cleanup..
    setTimeout(1000).then(() => { 
        throw new Error('test "a" threw!')
    });
})