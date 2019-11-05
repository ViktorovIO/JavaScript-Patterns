//   let response = await fetch(url);
//   alert(response.headers.get('Content-Type'));
//
//   for(let[key, value] of response.headers) {
//     alert(`${key} = ${value}`);
//   }
//   // let commits = await response.text();
//   // return commits.slice(0, 80) + '...';
// }
// console.log(commit('https://api.github.com/repos/viktorovio/hbakery/commits'));
// *************************************************************************
// canvasElem.onmousemove = function(e) {
//   let ctx = canvasElem.getContext('2d');
//   ctx.lineTo(e.clientX, e.clientY);
//   ctx.stroke();
// };
//
// async function submit() {
//   canvasElem.toBlob(function(blob) {
//     fetch('image', {
//       method: 'POST',
//       body: blob
//     })
//       .then(response => response.json())
//       .then(result => alert(JSON.stringify(result, null, 2)))
//   }, 'image/png');
//
//   let result = await response.json();
//   alert(result.message);
// }
// *************************************************************************
// function pow(x, n) { // Function Expression
//   let result = x;
//
//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }
//
//   return result;
// }
//
// let ask = (question, yes, no) => confirm(question) ? yes() : no();
//
// let pow = (x, n) => { // Стрелочная функция
//   let result = x;
//   for(let i=1;i<n;i++) { result *= x; }
//   return result;
// };
//
// let sum = (x, n) => (+x + n); // Стрелочная функция
//
// let x = prompt("x?", '');
// let n = prompt("n?", '');
//
// let a = (n > 1) ? alert(`Возведение числа ${x} в степень ${n} :  ` + pow(x, n)) : alert('No.');
// alert(`Сумма ${x} и ${n} равна :  ` + sum(+x, +n));
//
// let age = prompt("Сколько Вам лет?", 18);
//
// let welcome = (age < 18) ?
//   () => alert('Привет!') :
//   () => alert('Здравствуйте!');
//
// welcome();
// ask("Вы согласны?",
//     () => { alert("Вы согласились."); },
//     () => { alert("Вы отменили выполнение."); }
// );
// // *************************************************************************
// let group = {
//   title: "Наша группа",
//   students: ["Вася", "Маша", "Петя", "Вова"],
//
//   showList() {
//     this.students.forEach(
//       student => alert(this.title + ': ' + student)
//     );
//   }
// };
//
// group.showList();
// // *************************************************************************
// let user = {
//   name: "Vasyan",
//   age: 34,
//   is: {
//     isAdmin: true,
//     isObject: true,
//   },
// };
// // Клонирование объекта
// let clone = Object.assign({}, user);
// let object = "object";
//
// for (let key in user) {
//   if(typeof(user[key]) === object) { Object.assign(clone, user); }
// }
// clone.age++;
// for (let key in clone) {
//   alert(key);
//   alert(clone[key]);
// }
// alert(user.age);
// // *************************************************************************
// let user = {
//   name: "Vasyan",
//   age: 34,
//
//   sayHi() {
//     alert(this.name);
//   },
// };
//
// user.sayHi();
// // *************************************************************************
// function User(name) {
//   this.name = name;
//   this.isAdmin = true;
// }
//
// let user = new User("Vasyan");
//
// alert(user.name);
// alert(user.isAdmin);
// // *************************************************************************
// class Menu {
//     handleEvent(event) {
//       // mousedown -> onMousedown
//       let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
//       this[method](event);
//     }
//
//     onMouseDown() {
//       elem2.innerHTML = "Нажата кнопка мыши";
//     }
//
//     onMouseUp() {
//       elem2.innerHTML += "...и отжата.";
//     }
// }
//
// let menu = new Menu();
// elem2.addEventListener('mousedown', menu);
// elem2.addEventListener('mouseup', menu);
// console.log(menu.handleEvent);
//
// let menuElem = document.getElementById('menu');
// let titleElem = menuElem.querySelector('.title');
//
// function openMenu() {
//   titleElem.onclick = function() {
//     menuElem.classList.toggle('open');
//   };
// }
//
// for (let elem of document.querySelectorAll('*')) {
//   elem.addEventListener('click', e => alert(`Погружение: ${elem.tagName}`), true);
//   elem.addEventListener('click', e => alert(`Всплытие: ${elem.tagName}`));
// }
// ***************************************************************************************
// class Menu {
//   constructor(elem) {
//     this._elem = elem;
//     elem.onclick = this.onClick.bind(this);
//   }
//
//   save() {
//     alert('Сохранение');
//   }
//
//   load() {
//     alert('Загрузка');
//   }
//
//   search() {
//     alert('Поиск');
//   }
//
//   onClick(event) {
//     let action = event.target.dataset.action;
//     if(action) {
//       this[action]();
//     }
//   };
// }
//
// new Menu(menu);
// *****************************************************************************************
//
// console.log('Script start');
// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);
// new Promise((resolve, reject) => {
//   resolve('Promise 1 resolved');
// }).then(res => console.log(res));
// new Promise((resolve, reject) => {
//   resolve('Promise 2 resolved');
// }).then(res => {
//   console.log(res);
//   return new Promise((resolve, reject) => {
//     resolve('Promise 3 resolved');
//   })
// }).then(res => console.log(res));
// console.log('Script end');
// *****************************************************************************************
// // Async JS with callback ("callback hell")
// getData(function(x) {
//   console.log(x);
//   getMoreData(x, function(y) {
//     console.log(y);
//     getSomeMoreData(y, function(z) {
//       console.log(z);
//     });
//   });
// });
// // Async JS with Promise
// getData()
//   .then((x) => {
//     console.log(x);
//     return getMoreData(x);
//   })
//   .then((y) => {
//     console.log(y);
//     return getSomeMoreData(y);
//   })
//   .then((z) => {
//     console.log(z);
//   })
// // Promise create with Promise Constructor
// const promise = new Promise((resolve, reject) => {
//   if(allWentWell) {
//     resolve('Все прошло отлично!');
//   } else {
//     reject('Что-то пошло не так');
//   }
// });
//
// const promise = new Promise((resolve, reject) => {
//   const randomNumber = Math.random();
// setTimeout(() => {
//   if(randomNumber < .6) {
//     resolve('Все прошло отлично!');
//   } else {
//     reject(new Error('Что-то пошло не так'));
//   }
// }, 2000);
// });
//
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//
// const promise1 = new Promise((resolve, reject) => {
//   resolve('Promise1 выполнен');
// });
// const promise2 = new Promise((resolve, reject) => {
//   resolve('Promise2 выполнен');
// });
// const promise3 = new Promise((resolve, reject) => {
//   reject('Promise3 отклонен');
// });
// promise1
//   .then((data) => {
//     console.log(data);
//     return promise2;
//   })
//   .then((data) => {
//     console.log(data);
//     return promise3;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// Promise.all([promise1, promise2])
// .then((data) => console.log(data[0], data[1]))
// .catch((error) => console.log(error));
//
// console.log(promise1);
//
// function loadImage(url)
// {
//   return new Promise(function(resolve, reject)
//   {
//     var img = new Image();
//     img.onload = function()
//     {
//       return resolve(url);
//     }
//     img.onerror = function()
//     {
//       return reject(url);
//     }
//     img.src = url;
//   });
// }
//
// function myPromise()
// {
//   return new Promise((resolve, reject) => {
//     var async = true;
//     if(!async)
//     {
//       reject(new Error("Не удалось выполнить..."));
//     } else
//     {
//       resolve('Adin, Adin!');
//     }
//   });
// }
//
// myPromise()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err.message));
// *****************************************************************************************************
// // Async/Await
// queryDataBase({ username: 'Arfat' })
//   .then((user) => {
//     const image_url = user.profile_img_url;
//     return getImageByURL(`someServer.com/q=${image_url}`)
//       .then(image => transformImage(image))
//       .then(() => sendEmail(user.email))
//   })
//   .then(() => logTaskInFile('...'))
//   .catch(() => handleErrors()) // handleAllErrors
// // With function declaration
// async function myFn() {
//   // await
// }
// // With arrow function
// const myFn = async () => {
//   // await
// }
//
// function myFn() {
//   // await fn(); (Syntax Error since no async)
// }
// // Async always return Promise
// async function fn() {
//   return 'hello';
// }
// fn().then(console.log); // hello
// // Alternate function without Async:
// function fn() {
//   return Promise.resolve('hello');
// }
// fn().then(console.log); // hello
// // utility function to cause delay and get random value
// const delayAndGetRandom = (ms) => {
//   return new Promise(resolve => setTimeout(
//     () => {
//       const val = Math.trunc(Math.random() * 100);
//       resolve(val);
//     }, ms
//   ));
// };
//
// async function fn() {
//   const a = await 9;
//   const b = await delayAndGetRandom(1000);
//   const c = await 5;
//   await delayAndGetRandom(1000);
//
//   return a + b * c;
// }
//
// // Execute fn
// fn().then(console.log);
//
// async function finishMyTask() {
//   try {
//     const user = await queryDataBase({ username: 'Arfat' });
//     const image_url = user.profile_img_url;
//     const image = await getImageByURL(`someServer.com/q=${image_url}`);
//     const transformedImage = await transformImage(image);
//     await sendEmail(user.email);
//     await logTaskInFile('...');
//   } catch(err) {
//     //handle all errors here
//     console.log(err);
//   }
// }
//
// const url = 'https://api.github.com/users';
//
// const fetchPublicReposCount = async (username) => {
//   const response = await fetch(`${url}/${username}`);
//   const json = await response.json();
//   return json['public_repos'];
// }
//
// const users = [
//   'ArfatSalman',
//   'octocat',
//   'norvig'
// ];
//
// // const counts = users.map(async username => {
// //   const count = await fetchPublicReposCount(username);
// //   return count;
// // })
//
// async function fetchAllCounts(users) {
//   const promises = users.map(async username => {
//     const count = await fetchPublicReposCount(username);
//     return count;
//   });
//   return Promise.all(promises);
// }
// // Translate async/await in Generators
// function ajaxLoadData(url) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       const data = `data from ${url}`;
//       resolve(data);
//     }, 100)
//   });
// }
//
// function __awaiter() {
//   const genObj = genFunc();
//   const firstResult = genObj.next();
//   const commentPromise = firstResult.value;
//
//   const recur = function() {
//     const p = result.value;
//     return p.then((data) => {
//       const r2 = genObj.next(data);
//
//       if(r2.done) {
//         const finalMessage = r2.value;
//         return new Promise((resolve) => {
//           resolve(finalMessage);
//         })
//       }
//
//       return recur(r2);
//     });
//   };
//
//   return recur(firstResult);
// }
//
// function app() {
//   const genFunc = function* () {
//     const comment = yield ajaxLoadData('/comment/1');
//     const user = yield ajaxLoadData('/user/123');
//     const post = yield ajaxLoadData('/post/777');
//     return 'finish message';
//   };
//
//   return __awaiter(genFunc);
// }
//
// const res = app();
// res.then((msg) => {
//   console.log(msg);
// })
// 
// const asyncGreeting = async () => 'Greetings Async';
//
// const promiseGreeting = () => new Promise(((resolve) => {
//   resolve('Greetings Promise');
// }));
// asyncGreeting().then(result => console.log(result));
// promiseGreeting().then(result => console.log(result));
