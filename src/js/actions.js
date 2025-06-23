import { labelHTML } from "./config.js";
import { ElementHTML } from "../models/ElementHTML";
import { Button } from "../models/Button.js";
import { Input } from "../models/Input.js";

export function createButtonGroup() {
  return labelHTML.buttons.map((ele, index) => {
    const button = new Button(ele.attributes).create();
    const childs = ele.children.map(function (child) {
      return new ElementHTML(child.attributes, child.type).create();
    });

    button.append(...childs);
    return button;
  });
}

export function createFormRange(value) {
  const rangeGroup = document.querySelector("#range-characters"),
    range = new Input({ value, ...labelHTML.range }).create(),
    output = new ElementHTML(
      {
        class:
          "block p-2 w-16 text-gray-900 bg-white rounded-lg border border-gray-300 sm:text-md placeholder-gray-500",
      },
      "div"
    ).create();

  output.innerHTML = range.value;
  rangeGroup.append(range, output);
  return rangeGroup;
}

export function createFromCheck(data, fn) {
  const checkGroup = document.querySelector("#checkbox-group");
  const checks = Object.entries(data.char).map(([char, value]) => {
    let check = new Input({
        ...labelHTML.check,
        id: char.toLowerCase(),
      }).create(),
      span = new ElementHTML({}, "span").create(),
      label = document.createElement("label");
    check.checked = value;
    span.textContent = char;
    label.className = "cursor-pointer label";
    label.append(span, check);
    check.addEventListener("change", fn);
    return label;
  });

  checkGroup.append(...checks);
}
