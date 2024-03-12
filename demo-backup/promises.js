const setTimeoutPromise = (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, timeout);
  });
};

console.log("on top of async function")

async function handleTimeouts() {
  await setTimeoutPromise(100).then(console.log("1"));
  await setTimeoutPromise(500).then(console.log("2"));
  console.log("console log in middle");
  await setTimeoutPromise(5000).then(console.log("Promise hell"));
  await setTimeoutPromise(1000).then(console.log("3"));
  await setTimeoutPromise(7000).then(console.log("4"));
  console.log("all async code is completed");
}

console.log("on bottom of async function")


handleTimeouts();

// setTimeoutPromise(100)
//   .then(() => {
//     console.log(1);
//     return setTimeoutPromise(500);
//   })
//   .then(() => {
//     console.log(2);
//     return setTimeoutPromise(5000).then(()=>{
//         console.log("promise hell")
//         return setTimeoutPromise(1000)
//     }).catch(() => {
//       console.log("Error occured");
//     });
//   })
//   .then(() => {
//     console.log(3);
//     return setTimeoutPromise(7000);
//   })
//   .then(() => {
//     console.log(4);
//   })
//   .catch(() => {
//     console.log("Error occured");
//   });
