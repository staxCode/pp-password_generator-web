export class Password {
  #char;
  #length;

  constructor({char, length}) {
    this.char = char;
    this.length = length;
  }

  set char(value) {
    this.#char = value;
  }

  get char() {
    return this.#char;
  }

  set length(value) {
    this.#length = value;
  }

  get length() {
    return this.#length;
  }

  getUnicodeValues(min, max) {
    let unicodeList = [];
    for (let i = min; i < max; i++) {
      unicodeList.push(String.fromCharCode(i));
    }
    return unicodeList;
  }

  #createCharacters() {
    let characters = [];

    if (this.char.number) {
      characters.push(...this.getUnicodeValues(48, 58));
    }

    if (this.char.lowercase) {
      characters.push(...this.getUnicodeValues(97, 123));
    }

    if (this.char.uppercase) {
      characters.push(...this.getUnicodeValues(65, 91));
    }

    if (this.char.symbol) {
      characters.push(...String.fromCharCode(35, 36, 37, 38, 63, 64).split(""));
    }

    return characters;
  }

  generate() {
    let chars = this.#createCharacters();
    let pass = [];
    for (let i = 0; i < this.length; i++) {
      pass.push(chars[Math.floor(Math.random() * (chars.length - 1) + 1)]);
    }
    this.text = pass.join("");
  }
}
