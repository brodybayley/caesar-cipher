const encrypt = function(plaintext, key) {
  let finalString = '';
  for (const letter of plaintext) {
    const newKey = (letter.charCodeAt(0) - 97) + key; {
      if (newKey < 0) {
        const newLetter = String.fromCharCode(97 + (26 + newKey));
        finalString += newLetter;
      } else {
        const newLetter = String.fromCharCode(97 + newKey);
        finalString += newLetter;
      }
    }
  }
  return finalString;
};

console.log(encrypt("hello", -3));

module.exports = { encrypt };