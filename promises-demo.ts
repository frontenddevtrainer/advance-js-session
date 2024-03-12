const setTimeoutPromise = (timeout: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random > 0.5) {
        resolve(new Date().toISOString());
      } else {
        reject(new Date().toISOString());
      }
    }, timeout);
  });
};

async function run() {
  const requests = [
    setTimeoutPromise(500),
    setTimeoutPromise(500),
    setTimeoutPromise(500),
    setTimeoutPromise(500),
  ];

  

  try {
    // const responses1 = await Promise.allSettled(requests); // 500ms
    const responses1 = await Promise.race(requests);
    console.log(responses1);
  } catch (error) {
    console.log(error);
  }

  try {
    const a = await setTimeoutPromise(500);
    const b = await setTimeoutPromise(500);
    const c = await setTimeoutPromise(500);
    const d = await setTimeoutPromise(500);
    const responses2 = [a, b, c, d]; // 2000ms
    console.log(responses2);
  } catch (error) {}
}

run();
