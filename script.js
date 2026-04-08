const typingText = document.getElementById("typingText");
const sendBtn = document.getElementById("sendBtn");
const toastMsg = document.getElementById("toastMsg");

const sentences = [
  "أصمم صفحات أحترافية.",
  "أشرح البرمجة بطريقة سهلة.",
  "أساعد الطلاب على بناء مشاريعهم.",
];

let index = 0;

setInterval(() => {
  typingText.style.opacity = "0";

  setTimeout(() => {
    index++;
    if (index >= sentences.length) {
      index = 0;
    }

    typingText.textContent = sentences[index];
    typingText.style.opacity = "1";
  }, 400);
}, 2500);

sendBtn.addEventListener("click", function () {
  toastMsg.style.display = "block";

  setTimeout(() => {
    toastMsg.style.display = "none";
  }, 2500);
});
function setTheme(color) {
  document.body.className = color;
}