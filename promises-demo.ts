const setTimeoutPromise = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Date().toISOString());
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
  const responses1 = await Promise.all(requests); // 500ms
  console.log(responses1);

  const a = await setTimeoutPromise(500);
  const b = await setTimeoutPromise(500);
  const c = await setTimeoutPromise(500);
  const d = await setTimeoutPromise(500);

  const responses2 = [a, b, c, d]; // 2000ms
  console.log(responses2);
}

run();
