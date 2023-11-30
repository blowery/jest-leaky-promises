import { delay } from "https://deno.land/std@0.207.0/async/delay.ts";

Deno.test('a', () => {
    // wait 3 seconds and then fail.
    // this happens after test cleanup..
    delay(1000).then(() => {
        throw new Error('test "a" threw!')
    });
});