//For this challenge, read the first buffer from process.stdin, copy all bytes into a
//Uint8Array and then log out a JSON stringified representation of the typed array.
process.stdin.once('data', data => {
  let typedArray = new Uint8Array(data);
  console.log(JSON.stringify(typedArray));
});
