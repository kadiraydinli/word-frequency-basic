export default function numberOfWords(text, caseSensitive = true, letter = "normal" | "upperCase" | "lowerCase", noPunctuation = true) {
  let _text = text
  if (noPunctuation) {
    _text = text.replace(/[.,\/#!$%\^&\*;:{}=\-+_`~()]/g,"")
  }

  const words = _text.split(" ")

  let again = 0
  let output = { }

  function convert(word) {
    return letter ? 
      letter === "upperCase" ? word.toUpperCase() : word.toLowerCase() : 
      caseSensitive ? word : word.toLowerCase()
  }

  for (let i = 0; i < words.length; i++) {
      if (words[i] !== "") {
          for (let k = 0; k < words.length; k++) {
              if (words[i] === words[k] || (!caseSensitive && words[i].toLowerCase() === words[k].toLowerCase()))  again++
          }
          output[convert(words[i])] = again
          again = 0
      }
  }
  return output
}