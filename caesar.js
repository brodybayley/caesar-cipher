const encrypt = function(plaintext, key) {
  const cipherString = '';
  const cipherKey = plaintext.charCodeAt(0) - 97;
  const keysToMove = cipherKey + key;
  const newKey = String.fromCharCode(97 + keysToMove);
  console.log(newKey);
  console.log(cipherKey);
  console.log(key);
  console.log(keysToMove);
  return cipherString;
};

encrypt("c", -3);

module.exports = { encrypt };