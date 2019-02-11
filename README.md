# word-frequency-basic

[![NPM](https://nodei.co/npm/word-frequency-basic.png)](https://nodei.co/npm/word-frequency-basic/)

Finds how many identical words in a text.

### Install
``
npm i word-frequency-basic
``

### Usage

```js
const { numberToWordsLog, numberToWords} = require("word-frequency-basic");

//Receiving as rotating output
numberToWordsLog("Hello, this is a essay. This package is simple and easy to use. Good work.");

//Receiving as rotating output
console.log(numberToWords("Hello, this is a essay. This package is simple and easy to use. Good work."));
```

### Output

```js
{ 'Hello, ': 1,
  'this ': 1,
  'is ': 2,
  'a ': 1,
  'essay. ': 1,
  'This ': 1,
  'package ': 1,
  'simple ': 1,
  'and ': 1,
  'easy ': 1,
  'to ': 1,
  'use. ': 1,
  'Good ': 1,
  'work. ': 1 }
```
