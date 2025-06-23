import "remixicon/fonts/remixicon.css";
import { Input } from "./src/models/Input";
import { data, labelHTML } from "./src/js/config.js";
import {
  createButtonGroup,
  createFormRange,
  createFromCheck,
} from "./src/js/actions.js";
import { Password } from "./src/models/Password";

function init() {
  const pass = new Password(data);

  const inputGroup = document.querySelector("#input-group");
  const inputText = new Input(labelHTML.text).create();
  const buttonGroup = createButtonGroup();

  buttonGroup[0].addEventListener("click", function () {
    navigator.clipboard
      .writeText(inputText.value)
      .then(() => {
        this.setAttribute("data-tip", "copied!");
        setTimeout(() => {
          this.setAttribute("data-tip", "copy");
        }, 500);
      })
      .catch((err) => {
        console.error("Error in copying text: ", err);
      });
  });

  buttonGroup[1].addEventListener("click", function () {
    pass.generate();
    inputText.value = pass.text;
  });

  inputGroup.append(inputText, ...buttonGroup);

  pass.generate();
  inputText.value = pass.text;

  const lengthChar = createFormRange(data.length);
  lengthChar.childNodes[0].addEventListener("input", function () {
    lengthChar.childNodes[1].innerHTML = this.value;
    pass.length = this.value;
    pass.generate();
    inputText.value = pass.text;
  });

  createFromCheck(data, function () {
    pass.char[this.id] = this.checked;
    pass.generate();
    inputText.value = pass.text;
  });
}

init();
