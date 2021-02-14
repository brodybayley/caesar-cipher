const encrypt = function (plaintext, key) {
  let finalString = '';
  const newKeyValue = plaintext.charCodeAt(0) - 97;
  console.log(newKeyValue)
  for (const newKey of newKeyValue) {
    if (newKey >= 0) 
  }
  const newKey = String.fromCharCode(97 + newKeyValue);
  return finalString;
};

console.log(encrypt("b", -3));

module.exports = { encrypt };