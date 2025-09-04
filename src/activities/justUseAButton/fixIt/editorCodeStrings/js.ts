export const jsString = `
window.onload = function () {
    addCounterToStartOfBody();
    if (typeof addBtnsToEndOfBody !== 'undefined') {
      addBtnsToEndOfBody();
    };
  };
  
  //Activity code

  function addCounterToStartOfBody() {
    const p = document.createElement('p');
    p.setAttribute('id', 'counter');
    p.setAttribute('aria-live', 'polite');
    p.textContent = 'The count is: 0';
    document.body.insertAdjacentElement('afterbegin', p);
  };



  function add(numberToAdd) {
    var currentValue = Number(
      document.getElementById("counter").innerText.substring(14)
    );
  
    var newValue = currentValue + numberToAdd;
  
    document.getElementById("counter").innerText = "The count is: " + newValue;
  }

  function reset() {  
    document.getElementById("counter").innerText = "The count is: 0";
  }
`;
