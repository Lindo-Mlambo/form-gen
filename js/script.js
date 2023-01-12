const draggableInputs = [];
const inputsOnForm = [];

window.onload = () => {
  const formUI = $(".form-ui")[0];
  $(".input-type-option").forEach((element) => {
    draggableInputs.push(element);
  });

  draggableInputs.forEach((input) => {
    input.ondragstart = (evt) => handleDragStart(evt);
  });

  formUI.ondrop = (evt) => handleDrop(evt);
  formUI.ondragover = (evt) => handleDragOver(evt);
  formUI.ondragenter = (evt) => handleDragEnter(evt);
  formUI.ondragleave = (evt) => handleDragLeave(evt);
};

const handleDragStart = (event) => {
  event.dataTransfer.setData("inputType", event.target.dataset.inputType);
};

const handleDrop = (event) => {
  event.preventDefault();
  removeClass(event.target, "drag-enter");
  const inputType = event.dataTransfer.getData("inputType");
  console.log(inputType);
};

const handleDragOver = (event) => {
  event.preventDefault();
};

const handleDragEnter = (event) => {
  event.preventDefault();
  addClass(event.target, "drag-enter");
};

const handleDragLeave = (event) => {
  event.preventDefault();
  removeClass($(".form-ui")[0], "drag-enter");
};
