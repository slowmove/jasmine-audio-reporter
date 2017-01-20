Jasmine Audio Reporter
===

This Jasmine 2.x helper will make a sound for each test that fails.
Great for running your tests on a watch in the background, so you will hear when something breaks.

## Installation

It requires **Jasmine 2** and up.

``` npm install --save-dev jasmine-audio-reporter ```

Then you need to be able to include the helper in your testing directory or where you'd like to run tests.

You can do this by creating a helpers object in your `spec/support/jasmine.json` file, or adding to an existing helpers object.

If you don't already have a helpers object in `spec/support/jasmine.json`, add this:

```
    "helpers": [
        "../node_modules/jasmine-audio-reporter/"
    ]
````

If you already have a helpers object, just add `"../node_modules/jasmine-audio-reporter/"` to it.

## Recommendation

To run the tests in background on all file changes I recommend `nodemon`which you can install with `npm install -g nodemon`.
Then run from your project folder

```
NODE_ENV=test nodemon -w "." node_modules/.bin/jasmine
```