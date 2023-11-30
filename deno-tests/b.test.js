import { delay } from "https://deno.land/std@0.207.0/async/delay.ts";

Deno.test('b', async () => {
    // wait for a bit to let promises from test-a to settle
    await delay(2000);
});