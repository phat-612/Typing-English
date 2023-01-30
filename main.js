// component
const btnShowMean = document.getElementById("btn_show_mean");
const btnShowPro = document.getElementById("btn_show_pro");
const word_en = document.getElementById("word_en");
const word_vi = document.getElementById("word_vi");
const word_pro = document.getElementById("word_pro");
const input_text = document.getElementById("input_text");
// function

function check_input() {
  let temp_word = word_en.innerText;
  let temp_input = input_text.value;
  if (temp_input == temp_word) {
    input_text.value = "";
    show_word();
  }
}

function hideElement(ele) {
  console.log(this);
  if (ele.classList.contains("hide")) {
    ele.classList.remove("hide");
  } else {
    ele.classList.add("hide");
  }
}

//main
input_text.addEventListener("input", check_input);
btnShowMean.addEventListener("click", () => {
  hideElement(word_vi);
});
btnShowPro.addEventListener("click", () => {
  hideElement(word_pro);
});
