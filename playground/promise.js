var asyncAdd = (a, b) => {
  return new Promise
};

var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hey it works!');

  }, 2000);
});

somePromise.then((message) => {
  console.log("success: " message);
}, (errorMessage) => {
  console.log("error: " errorMessage);
});
