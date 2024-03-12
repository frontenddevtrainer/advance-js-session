function abc(message) {
  // const message = "hello world!!!";
  console.log(message, "ABC");

  function xyz() {
    console.log(message, "XYZ");
  }
  return xyz;
}

const a = abc("hello world");
const output = a();
console.log(output);
