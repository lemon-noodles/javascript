const posts = [
  { title: "title 1", body: "body 1" },
  { title: "title 2", body: "body 2" },
];

/*
    Callback
*/

const getPosts = () => {
  setTimeout(() => {
    console.log(posts);
  }, 1000);
};

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
};

createPost({ title: "title 3", body: "body 3" }, getPosts);

/*
    Promises
*/

const createPostByPromise = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong!");
      }
    }, 2000);
  });
};

createPostByPromise({ title: "title 3", body: "body 3" })
  .then(getPosts)
  .catch((e) => console.error(e));

/*
    Promise.all
*/
const promise1 = Promise.resolve("Hello World!");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbye")
);
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// );

/*
  Async / Await
*/

async function init() {
  await createPostByPromise({ title: "title 5", body: "body 5" });
  getPosts();
}

init()
