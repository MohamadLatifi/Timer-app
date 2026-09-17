const hourInput = document.getElementById('hourInput')
const minuteInput = document.getElementById('minuteInput')
const secondInput = document.getElementById('secondInput')
const submit = document.getElementById('submit')
let isSubimted = false

const ring = new Audio('/music file/dom demo.m4a'); // ساخت آبجکت صدا

submit.addEventListener('click', () => {

  second.innerText = secondInput.value || 0;
  minute.innerText = minuteInput.value || 0;
  hour.innerText = hourInput.value || 0;
  isSubimted = true;
  ring.play().then(() => { ring.pause(); ring.currentTime = 0; }).catch(() => { }); // پرامیس
})



const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');


setInterval(() => {
  if (isSubimted === true) {
    second.innerText--;
    isTimeToRing()
    if (second.innerText < 0 && minute.innerText != -1) {
      second.innerText = 59
      minute.innerText -= 1

      isTimeToRing()
      if (minute.innerText < 0 && hour.innerText != 0) {
        minute.innerText = 59
        hour.innerText -= 1
        isTimeToRing()
        if (hour.innerText < 0) {
          isTimeToRing()
        }
      }
    }
  }
}, 1000)

function isTimeToRing() {
  if (second.innerText == 0 && minute.innerText == 0 && hour.innerText == 0) {
   
    ring.play(); // بجای لاگ
    second.innerText = 'finished';
    minute.innerText = 'finished ';
    hour.innerText = 'finished';
  }
}
