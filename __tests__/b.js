const { setTimeout } = require('node:timers/promises');

test('b', async () => {
    // wait for a bit to let promises from test-a to settle
    await setTimeout(2000);
    expect(true).toBe(true);
})