// component
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

//main
input_text.addEventListener("input", check_input);
