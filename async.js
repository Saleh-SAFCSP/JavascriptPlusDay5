/* Asynchronous javascript

What we mean by asynchronous ? 
it's parallel programming , where your thread doesn't not wait for a response from 3rd party , and continue executing the code until the response is received

How javascript deal with asynchronous ?
before ecma6 (2016) javascript was dealing with asynchronous with the help of callback functions now it uses promises to deal with asynchronous requests

*/

// Asynchronous javascript
// const posts = ['post 1', 'post 2', 'post 3'];
// const getPosts = () => {
//   setTimeout(() => {
//     console.log(posts);
//   }, 2000);
// };

// Issue
// const createPosts = () => {
//   setTimeout(() => {
//     posts.push('post 4');
//   }, 3000);
// };
// createPosts();
// getPosts();

// Solving with callback
// const createPosts = (getPosts) => {
//   setTimeout(() => {
//     posts.push('post 4');
//     getPosts();
//   }, 3000);
// };

// Solving with promise
// const createPosts = () => {
//   return new Promise((resolve, reject) => {
//     const err = false;
//     setTimeout(() => {
//       posts.push('post 4');
//       if (err == true) {
//         reject('Error with the push');
//       }
//       resolve('Pushed without any issues');
//     }, 3000);
//   });
// };
// createPosts()
//   .then((message) => {
//     console.log('Then is called');
//   })
//   .catch((message) => {
//     console.log('Catch is called');
//   });

// const main = async () => {
//   try {
// const request = await fetch('http://universities.hipolabs.com/search?  country=Saudi%20Arabia');
//     const data = await request.json();
//     let output = '';
//     for (let i = 0; i < data.length; i++) {
//       output += `<li>${data[i].name}</li>`;
//     }
//     document.body.innerHTML = output;
//   } catch (err) {
//     console.log('Error happened !');
//   }

//   console.log('Hey from main');
// };

// main();
