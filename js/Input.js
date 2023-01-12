class Input {
  constructor(type, id, classList, label) {
    this.type = type;
    this.id = id;
    this.classList = classList;
    this.label = label;
    this.propsObject = {};
  }

  updateLabel(label) {
    this.label = label;
  }

  updateId(id) {
    this.id = id;
  }

  updateClassList(classList) {
    this.classList = classList;
  }

  setCustomProps(propsObject) {
    console.log(propsObject);
    this.propsObject = propsObject;
  }

  stringifyCustomProps() {
    let propsString = "";
    if (this.propsObject !== {}) {
      for (let key in this.propsObject) {
        propsString += `${key}="${this.propsObject[key]} "`;
      }
    }

    return propsString;
  }

  getHTML() {
    return `<div class="input-group">
      <label for="${this.id}">${this.label}</label>
      <input
        type="${this.type}"
        id="${this.id}"
        ${this.stringifyCustomProps()}
      />
    </div>`;
  }
}

class InputBuilder {
  static inputCounter = 0;

  constructor(id = null) {
    this.inputType = "text";
    this.inputId = id === null ? `inp-${++inputCounter}` : id;
    this.inputLabel = "";
  }

  withType(type) {
    this.inputType = type;
    return this;
  }

  withClassList(classList) {
    this.inputClassList = classList;
    return this;
  }

  withLabel(label) {
    this.inputLabel = label;
    return this;
  }

  build() {
    return new Input(
      this.inputType,
      this.inputId,
      this.inputClassList,
      this.inputLabel
    );
  }
}
