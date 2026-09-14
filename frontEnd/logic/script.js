// const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

hour.innerText = new Date().getHours()
minute.innerText = new Date().getMinutes()
second.innerText = new Date().getSeconds()

console.log(second.innerText)
setTimeout(() => {
  for (let n = 0; n < 10; n++) {
    second.innerText--;
  }
}, 1000)


// let endDay = false
// if (hour.innerText && minute.innerText && second.innerText == 0) {
//   endDay = true
// }


// function countDown() {
//   for (let endDay=0; endDay>10 ; second.innerText) {
//     // hour.innerText = new Date().getHours()
//     // minute.innerText = new Date().getMinutes()
//     second.innerText = new Date().getSeconds()
//     console.log(second.innerText)
//     endDay++;
//   }
// }

// countDown()


// let n=5;

// for(let i=0;i<10;i++){
//   n--;
//   console.log(n)
// }