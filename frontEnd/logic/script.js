// const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

hour.innerText = new Date().getHours()
// hour.innerText =1
minute.innerText = new Date().getMinutes()
// minute.innerText = 1
second.innerText = new Date().getSeconds()
// second.innerText = 3

setInterval(() => {

  for (n = 0; n < 1; n++) {
    second.innerText--;
    if (second.innerText == 0) {
      second.innerText = 60
      minute.innerText -= 1
      if (minute.innerText == 0) {
        minute.innerText = 60
        hour.innerText -= 1
        if (hour.innerText == 0){
          hour.innerText=24;
        }
      }
    }
  }
}, 1000)
