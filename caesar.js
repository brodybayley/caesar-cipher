const encrypt = function(plaintext, key) {
  let finalString = '';
  for (const letter of plaintext) {
    const newKey = (letter.charCodeAt(0) - 97) + key;
    if (letter === ' ') {
      finalString += ' ';
    } else if (newKey < 0) {
      const newLetter = String.fromCharCode(97 + (26 + newKey));
      finalString += newLetter;
    } else if (newKey > 26) {
      const newLetter = String.fromCharCode(97 + (newKey - 26));
      finalString += newLetter;
    } else {
      const newLetter = String.fromCharCode(97 + newKey);
      finalString += newLetter;
    }
  }
  return finalString;
};

console.log(encrypt("hello world", 5));

module.exports = { encrypt };