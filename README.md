# Leaky Promises with Jest Workers

A demo repo that shows how Promises can reject across test suites when workers are reused.

## Setup
Pull this repo, run `npm install`, then `npm test`. You should see two test suites run, 
with the second suite failing due to a promise rejection from the first suite.

```
❯ npm test

> leaky-promises@1.0.0 test
> jest -w 1

 PASS  __tests__/a.js
 FAIL  __tests__/b.js
  ● b

    test "a" threw!

       9 |     setTimeout(1000).then(() => {
      10 |         throw new Error('test "a" threw!')
    > 11 |     });
         |           ^
      12 | })

      at __tests__/a.js:11:11

Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        2.187 s
Ran all test suites.
```

We run `jest` with `-w 1` and a custom test sequencer to guarantee that the worker is reused 
and that the delayed promise rejection happens in the first suite. In a normal suite of 
tests with the normal test sequencer, the failure would appear randomly and fail a random suite, 
or not fail any suites if it was the last suite to run on the affected worker.