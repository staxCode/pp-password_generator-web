export class ElementHTML {

  constructor(att, element) {
    this.att = att;
    this.element = element;
  }

  create() {
    this.label = document.createElement(this.element);
    for (const name in this.att) {
      if (this.att.hasOwnProperty(name)) {
        this.label.setAttribute(name, this.att[name]);
      }
    }
    return this.label;
  }
}
