// component
const btnShowEn = document.getElementById("btn_show_en");
const btnShowVi = document.getElementById("btn_show_vi");
const btnShowPro = document.getElementById("btn_show_pro");
const btnRepeat = document.getElementById("btn_repeat");
const time = document.getElementById("time");
const scores = document.getElementById("scores");
const word_en = document.getElementById("word_en");
const word_vi = document.getElementById("word_vi");
const word_pro = document.getElementById("word_pro");
const input_text = document.getElementById("input_text");

var totalScores = 0;
var totalTime = 0;
var first = true;
// function

function check_input() {
  if (first) {
    startTime();
    first = false;
  }
  let temp_word = word_en.innerText;
  let temp_input = input_text.value;
  if (temp_input == temp_word) {
    input_text.value = "";
    show_word();
    addScoers();
  }
}

function hideElement(ele) {
  if (ele.classList.contains("hide")) {
    ele.classList.remove("hide");
  } else {
    ele.classList.add("hide");
  }
}

function addScoers() {
  totalScores += 1;
  scores.innerText = "Scores: " + totalScores;
}

function startTime() {
  setInterval(() => {
    let minute = Math.floor(totalTime / 60);
    if (minute < 10) {
      minute = "0" + minute;
    }
    let second = totalTime % 60;
    if (second < 10) {
      second = "0" + second;
    }
    time.innerText = "Time: " + minute + ":" + second;
    totalTime += 1;
  }, 1000);
}

//main
input_text.addEventListener("input", check_input);
btnShowEn.addEventListener("click", () => {
  hideElement(word_en);
});
btnShowVi.addEventListener("click", () => {
  hideElement(word_vi);
});
btnShowPro.addEventListener("click", () => {
  hideElement(word_pro);
});
btnRepeat.addEventListener("click", () => {
  repeat = !repeat;
  if (btnRepeat.classList.contains("active")) {
    btnRepeat.classList.remove("active");
    btnRepeat.classList.add("not_active");
  } else {
    btnRepeat.classList.remove("not_active");
    btnRepeat.classList.add("active");
  }
  console.log(repeat);
});
