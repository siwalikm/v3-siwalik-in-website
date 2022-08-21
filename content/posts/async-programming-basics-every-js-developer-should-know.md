---
template: post
title: Async programming basics every JS developer should know
slug: async-programming-basics-every-js-developer-should-know
draft: true
date: 2018-03-18T20:08:55.149Z
canonical: 'https://dev.to/siwalikm/async-programming-basics-every-js-developer-should-know-in-2018-a9c'
socialImage: /media/async-js-basics.jpg
description: >-
  A beginner's guide to async programming in Javascript
category: Programming
---

Originally published in [dev.to](https://dev.to/siwalikm/async-programming-basics-every-js-developer-should-know-in-2018-a9c) website.

![Hero image showing callback hell](/media/async-js-basics.jpg 'Hero image showing callback hell')

> This article is aimed at people starting out with asynchronous coding in javascript so we would keep things simple by avoiding big words, arrow functions, template literals etc.

Callbacks are one of the most used concepts of modern functional javascript and if you've ever used jQuery, chances are you've already used callbacks without even knowing (we will get back to it in a minute).

## What the Heck are **Callback Functions**?

A callback function in its simplest terms is a function that is passed to another function, as a parameter. The callback function then gets executed inside the function where it is passed and the final result is returned to the caller.

```js
// I'm sure you've seen a JQuery code snippet like this at some point in your life!
// The parameter we're passing to the `click` method here is a callback function.

$("button").click(function() {
	alert('clicked on button`);
});
```

Simple right? Now let us implement a callback function to get scores on levelling up in an imaginary game.

{% runkit %}
// levelOne() is called a high-order function because
// it accepts another function as its parameter.
function levelOne(value, callback) {
var newScore = value + 5;
callback(newScore);
}

// Please note that it is not mandatory to reference the callback function (line #3) as `callback`, it is named so just for better understanding.

function startGame() {
var currentScore = 5;
console.log('Game Started! Current score is ' + currentScore);
// Here the second parameter we're passing to levelOne is the
// callback function, i.e., a function that gets passed as a parameter.
levelOne(currentScore, function (levelOneReturnedValue) {
console.log('Level One reached! New score is ' + levelOneReturnedValue);
});
}

startGame();
{% endrunkit %}

Once inside `startGame()` function, we call the `levelOne()` function with parameters as currentScore and our callback function().

When we call `levelOne()` inside `startGame()` function's scope, in an asynchronous way, javascript executes the function `levelOne()` and the main thread keeps on going ahead with the remaining part of our code.

This means we can do all kind of operations like fetching data from an API, doing some math etc., everything which can be time-consuming and hence we won't be blocking our main thread for it. Once the function(`levelOne()`) has done with its operations, it can execute the callback function we passed earlier.

This is an immensely useful feature of functional programming as callbacks lets us handle code asynchronously without us have to wait for a response. For example, you can make an ajax call to a slow server with a callback func. and completely forget about it and continue with your remaining code. Once that ajax call gets resolved, the callback function gets executed automatically.

But Callbacks can get nasty if there are multiple levels of callbacks to be executed in a chain. Let's take the above example and add a few more levels to our game.

{% runkit %}
function levelOne(value, callback) {
var newScore = value + 5;
callback(newScore);
}

function levelTwo(value, callback) {
var newScore = value + 10;
callback(newScore);
}

function levelThree(value, callback) {
var newScore = value + 30;
callback(newScore);
}

// Note that it is not needed to reference the callback function as `callback` when we call levelOne(), levelTwo() or levelThree(), it can be named anything.

function startGame() {
var currentScore = 5;
console.log('Game Started! Current score is ' + currentScore);

        levelOne(currentScore, function (levelOneReturnedValue) {
            console.log('Level One reached! New score is ' + levelOneReturnedValue);
            levelTwo(levelOneReturnedValue, function (levelTwoReturnedValue) {
                console.log('Level Two reached! New score is ' + levelTwoReturnedValue);
                levelThree(levelTwoReturnedValue, function (levelThreeReturnedValue) {
                    console.log('Level Three reached! New score is ' + levelThreeReturnedValue);
                });
            });
        });

}

startGame();
{% endrunkit %}

Wait, what just happened? We added two new functions for level logic, `levelTwo()` and `levelThree()`. Inside levelOne's callback(line #22), called levelTwo() function with a callback func. and levelOne's callback's result. And repeat the same thing for levelThree() function again.

![callback meme](https://cdn-images-1.medium.com/max/1600/0*Sf_k39ju9c2UxW-V.jpg)

Now just imagine what this code will become if we had to implement the same logic for another 10 levels. Are you already panicking? Well, I am! As the number of nested callback functions increases, it becomes tougher to read your code and even harder to debug.

This is often affectionately known as a **callback hell**. Is there a way out of this callback hell?

## I **Promise** there's a better way

Javascript started supporting Promises from ES6. Promises are basically objects representing the eventual completion (or failure) of an asynchronous operation, and its resulting value.

```js
// This is how a sample promise declaration looks like. The promise constructor
// takes one argument which is a callback with two parameters, `resolve` and
// `reject`. Do something within the callback, then call resolve if everything
// worked, otherwise call reject.

var promise = new Promise(function(resolve, reject) {
  // do a thing or twenty
  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
```

Let us try to rewrite our callback hell example with promises now.
{% runkit %}
function levelOne(value) {
var promise, newScore = value + 5;
return promise = new Promise(function(resolve) {
resolve(newScore);
});
}

function levelTwo(value) {
var promise, newScore = value + 10;
return promise = new Promise(function(resolve) {
resolve(newScore);
});
}

function levelThree(value) {
var promise, newScore = value + 30;
return promise = new Promise(function(resolve) {
resolve(newScore);
});
}

var startGame = new Promise(function (resolve, reject) {
var currentScore = 5;
console.log('Game Started! Current score is ' + currentScore);
resolve(currentScore);
});

// The response from startGame is automatically passed on to the function inside the subsequent `then`
startGame.then(levelOne)
.then(function (result) {
// the value of `result` is the returned promise from levelOne function
console.log('You have reached Level One! New score is ' + result);
return result;
})
.then(levelTwo).then(function (result) {
console.log('You have reached Level Two! New score is ' + result);
return result;
})
.then(levelThree).then(function (result) {
console.log('You have reached Level Three! New score is ' + result);
});
{% endrunkit %}

We have re-wrote our level(One/Two/Three) functions to remove callbacks from the function param and instead of calling the callback function inside them, replaced with promises.

Once startGame is resolved, we can simply call a `.then()` method on it and handle the result. We can chain multiple promises one after another with `.then() chaining`.

This makes the whole code much more readable and easier to understand in terms of what is happening, and `then` what happens next and so on.

The deep reason why promises are often better is that they're more composable, which roughly means that combining multiple promises "just works" while combining multiple callbacks often doesn't.

Also when we have a single callback versus a single promise, it's true there's no significant difference. It's when you have a zillion callbacks versus a zillion promises that the promise-based code tends to look much nicer.

Okay, we've escaped successfully from the callback hell and made our code much readable with promises. But what if I told you there's a way to make it cleaner and more readable?

## **(a)Wait** for it

Async- await is being supported in javascript since ECMA2017. They allow you to write promise-based code as if it were synchronous code, but without blocking the main thread. They make your asynchronous code less "clever" and more readable.

To be honest, async-awaits are nothing but syntactic sugar on top of promises but it makes asynchronous code look and behaves a little more like synchronous code, that's precisely where it's power lies.

If you use the `async` keyword before a function definition, you can then use `await` within the function. When you `await` a promise, the function is paused in a non-blocking way until the promise settles. If the promise fulfils, you get the value back. If the promise rejects, the rejected value is thrown.

Let us see now how our game logic looks once we rewrite it with async-awaits!

{% runkit %}
function levelOne(value) {
var promise, newScore = value + 5;
return promise = new Promise(function(resolve) {
resolve(newScore);
});
}

function levelTwo(value) {
var promise, newScore = value + 10;
return promise = new Promise(function(resolve) {
resolve(newScore);
});
}

function levelThree(value) {
var promise, newScore = value + 30;
return promise = new Promise(function(resolve) {
resolve(newScore);
});
}

// the async keyword tells the javascript engine that any function inside this function having the keyword await, should be treated as asynchronous code and should continue executing only once that function resolves or fails.
async function startGame() {
var currentScore = 5;
console.log('Game Started! Current score is ' + currentScore);
currentScore = await levelOne(currentScore);
console.log('You have reached Level One! New score is ' + currentScore);
currentScore = await levelTwo(currentScore);
console.log('You have reached Level Two! New score is ' + currentScore);
currentScore = await levelThree(currentScore);
console.log('You have reached Level Three! New score is ' + currentScore);
}

startGame();
{% endrunkit %}

Immediately our code becomes much more readable but there's more to Async-await.

Error handling is one of the top features of Async-await which stands out. Finally we can handle both synchronous and asynchronous errors with the same construct with try and catches which was a pain with promises without duplicating try-catch blocks.

The next best improvement from good old promise world is code debugging. When we write arrow function based promises, we can't set breakpoints inside our arrow functions so debugging is tough at times. But with async-awaits, debugging is just like how you would do a synchronous piece of code.

I'm sure that by now you have a better understanding of asynchronous programming in javascript. If you have a question, let me know below. If you found this helpful, [give me a shoutout on Twitter](https://twitter.com/intent/tweet?text=Checkout%20%22Async%20programming%20basics%20every%20JS%20developer%20should%20know%20in%202018%22%0Aby%20@siwalikm%20%F0%9F%98%8D%20https://dev.to/siwalikm/,sync-programming-basics-every-js-developer-should-know-in-2018-a9c)!

Happy Coding!
