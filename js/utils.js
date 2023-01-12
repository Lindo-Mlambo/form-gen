const $ = (q) => document.querySelectorAll(q);

const addClass = (element, className) => {
  element.classList.add(className);
  return element;
};

const removeClass = (element, className) => {
  element.classList.remove(className);
  return element;
};

const toggleClass = (element, className) => {
  if (element.classList.contains(className)) {
    return removeClass(element, className);
  } else {
    return addClass(element, className);
  }
};
