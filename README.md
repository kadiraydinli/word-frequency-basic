# word-frequency-basic

[![NPM](https://nodei.co/npm/word-frequency-basic.png)](https://nodei.co/npm/word-frequency-basic/)

Single function code block for finding the number of repeating words in a text.

### Install
```bash
yarn add word-frequency-basic
```

or
```bash
npm i word-frequency-basic
```

### Usage

| Parameters | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| text | string | null | The text to be split into words |
| caseSensitive | boolean | true | Allows you to count by paying attention to whether the letters are big or small. |
| letter | "normal" / "upperCase" / "lowerCase" | "normal" | Words can be output in uppercase, lowercase or normal letters. |
| noPunctuation | boolean | true | Determines whether to remove punctuation marks. |

```js
import numberOfWords from "word-frequency-basic"

numberOfWords(text, caseSensitive, letter, noPunctuation)
```

### Examples

```js
import numberOfWords from "word-frequency-basic"

const text = "Hello world, count my words, hello again."

// Example 1
console.log(numberOfWords(text))

/* Output 1
{
  "Hello": 1,
  "world": 1,
  "count": 1,
  "my": 1,
  "words": 1,
  "hello": 1,
  "again": 1
}
*/

// Example 2
console.log(numberOfWords(text, false))

/* Output 2
{
  "hello": 2,
  "world": 1,
  "count": 1,
  "my": 1,
  "words": 1,
  "again": 1
}
*/

// Example 3
console.log(numberOfWords(text, true, "upperCase"))

/* Output 3
{
  "HELLO": 1,
  "WORLD": 1,
  "COUNT": 1,
  "MY": 1,
  "WORDS": 1,
  "AGAIN": 1
}
*/

// Example 4
console.log(numberOfWords(text, true, "normal", false))

/* Output 4
{
  "hello": 1,
  "world,": 1,
  "count": 1,
  "my": 1,
  "words,": 1,
  "again.": 1
}
*/
```