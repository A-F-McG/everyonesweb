export const pretendKeyboardJsString = `
let indexOfActiveElement;

function addBtnsToEndOfBody() {
  const body = document.body;
  const tab = createTabBtn();
  const shiftTab = createShiftTabBtn();
  const enter = createEnterBtn();
  const buttonContainer = document.createElement('div');
  const leftBtnsContainer = document.createElement('div');
  
  buttonContainer.classList.add('keyboardBtnContainer');
  leftBtnsContainer.classList.add('leftBtnsContainer');

  leftBtnsContainer.appendChild(shiftTab);
  leftBtnsContainer.appendChild(tab);
  buttonContainer.appendChild(leftBtnsContainer);
  buttonContainer.appendChild(enter);

  body.appendChild(buttonContainer);
}

function createTabBtn() {
  const button = document.createElement("button");
  button.textContent = "tab";
  button.setAttribute("id", "tab");
  button.addEventListener("mousedown", (e) => tab(e));
  button.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") tab(e);
  });
  button.classList.add('tab');
  return button;
}

function createShiftTabBtn() {
  const button = document.createElement("button");
  button.textContent = "shift + tab";
  button.setAttribute("id", "shiftTab");
  button.addEventListener("mousedown", (e) => shiftTab(e));
  button.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") shiftTab(e);
  });
  button.classList.add('shift');
  return button;
}

function createEnterBtn() {
  const button = document.createElement("button");
  button.textContent = "enter";
  button.setAttribute("id", "enter");
  button.addEventListener("mousedown", (e) => enter(e));
  button.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") enter(e);
  });
  button.classList.add('enter');
  return button;
}

function tab(e) {
  e.preventDefault();

  const allInteractiveElements = getAllInteractiveElements();

  if (indexOfActiveElement === undefined) {
    setFocus(0, allInteractiveElements);
  } else {
    const nextElementIndex = indexOfActiveElement + 1;

    if (nextElementIndex < allInteractiveElements.length) {
      setFocus(nextElementIndex, allInteractiveElements);
    } else {
      setFocus(0, allInteractiveElements);
    }
  }
}

function enter(e) {
  e.preventDefault();

  const allInteractiveElements = getAllInteractiveElements();

  if (indexOfActiveElement !== undefined) {
    const onClickFunction =
      allInteractiveElements[indexOfActiveElement].onclick;
    onClickFunction();
  }
}

function shiftTab(e) {
  e.preventDefault();

  const allInteractiveElements = getAllInteractiveElements();

  if (indexOfActiveElement === undefined) {
    setFocus(0, allInteractiveElements);
  } else {
    const prevElementIndex = indexOfActiveElement - 1;

    if (prevElementIndex >= 0) {
      setFocus(prevElementIndex, allInteractiveElements);
    } else {
      setFocus(allInteractiveElements.length - 1, allInteractiveElements);
    }
  }
}

function setFocus(index, elements) {
  elements[index].focus();
  indexOfActiveElement = index;
}

function getAllInteractiveElements() {
  return document.querySelectorAll(
    "button:not(#tab):not(#shiftTab):not(#enter), a, input"
  );
}`;
