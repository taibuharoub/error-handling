exports.getIndex = (req, res, next) => {
  // res.send("<h1>Server Started!</h1>")
  const fakeUrlRequest2 = (url) => {
    const promise = new Promise((resolve, reject) => {
      const rand = Math.random();
      setTimeout(() => {
        if (rand < 0.5) {
          resolve("YOUR FAKE HERE");
        }
        reject("REQUEST ERROR!");
      }, 2000);
    });
    return promise;
  };

  fakeUrlRequest2("books.com")
    .then((data) => {
      console.log("DONE WITH REQUEST");
      console.log("data is", data);
      return fakeUrlRequest2("books2.com");
    })
    .then((data) => {
      console.log("DONE WITH REQUEST");
      console.log("data is", data);
      res.send(`<h1>Server Started!</h1> <p>Here is ${data}</p>`);
    })
    .catch((err) => {
      //   console.log("OH NO!!", err);
      //Handle error for async code
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};
