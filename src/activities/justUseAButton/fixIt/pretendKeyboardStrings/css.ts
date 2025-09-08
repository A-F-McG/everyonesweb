export const pretendKeyboardCssString = `
.keyboardBtnContainer {
    display: flex;
    background: hsla(277, 50%, 20%, 1);
    width: 100%;
    margin: 0;
    box-shadow: none;
    border: none;
    justify-content: center;
    border-radius: 0;
    padding: 1rem 0;
    margin-top: 2rem;
  }
  
  .keyboardBtnContainer button {
    line-height: 3em;
    box-shadow: rgb(45 35 66 / 40%) 0 2px 4px, rgb(45 35 66 / 30%) 0 7px 13px -3px,
      #d6d6e7 0 -3px 0 inset !important;
    border-style: solid !important;
    border-width: 0.1em !important;
    padding: 0 0.5rem !important;
    border-bottom-left-radius: 15px 255px !important;
    border-bottom-right-radius: 225px 15px !important;
    border-top-left-radius: 255px 15px !important;
    border-top-right-radius: 15px 225px !important;
    margin: 0.5rem !important;
    background: hsla(277, 20%, 100%, 1) !important;
    font-family: "Space Mono";
    color: hsla(277, 100%, 5%, 1);
  }
  
  .keyboardBtnContainer button:hover,
  .keyboardBtnContainer :focus-visible {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .keyboardBtnContainer button:active,
  .keyboardBtnContainer button:target {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .enter {
    position: relative;
    border-bottom-left-radius: 0 !important;
    margin-left: 1rem !important;
  }
  
  .enter:before {
    content: "";
    position: absolute;
    left: -22%;
    bottom: 0;
    width: 20%;
    height: 45%;
    background: hsla(277, 20%, 100%, 1);
    border-radius: 0;
    border-bottom-left-radius: 15px 255px;
    box-shadow: #d6d6e7 0 -3px 0 inset !important;
    border-style: solid !important;
    border-width: 0.1em !important;
    border-right-color: hsla(277, 20%, 100%, 1);
    margin-bottom: -0.1rem;
    border-right: 0 !important;
    border-top-right-radius: 50px 20px !important;
  }
  
  .tab {
    width: 80%;
  }
  
  .shift {
    width: 90%;
  }  

  .leftBtnsContainer {
    padding: 0;
    margin: 0;
    border: 0;
    background: 0;
    box-shadow: none;
  }

  .leftBtnsContainer:hover, .keyboardBtnContainer:hover {
    outline: none;
  }`;
