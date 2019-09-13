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
