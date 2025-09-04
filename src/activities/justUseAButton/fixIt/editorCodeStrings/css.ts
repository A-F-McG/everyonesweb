export const cssString = `
  body {
    font-family: Arial;
    background: hsla(277, 20%, 90%, 1);
    margin: 0;
  }
  
  button,
  div,
  span {
    background: linear-gradient(
      325deg,
      hsl(30deg 72% 48%) 0%,
      hsl(29deg 78% 48%) 10%,
      hsl(27deg 84% 48%) 20%,
      hsl(26deg 90% 48%) 30%,
      hsl(24deg 95% 48%) 40%,
      hsl(22deg 98% 49%) 50%,
      hsl(24deg 95% 48%) 60%,
      hsl(26deg 90% 48%) 70%,
      hsl(27deg 84% 48%) 80%,
      hsl(29deg 78% 48%) 90%,
      hsl(30deg 72% 48%) 100%
    );
    border-radius: 0.5rem;
    border: hsla(277, 100%, 5%, 1);
    box-shadow: hsla(277, 100%, 5%, 1) 0.1rem 0.2rem 0;
    border-style: solid;
    border-width: 0.1em;
    padding: 0.5rem 2rem;
    width: fit-content;
    font-size: 1rem;
    display: block;
    margin: auto;
    margin-bottom: 1rem;
    outline-offset: 0.4rem;
    color: hsla(277, 100%, 5%, 1);
  }
  
  button:hover,
  button:focus, 
  div:hover, 
  span:hover {
    outline: solid hsla(277, 100%, 5%, 1) 1.5px;
  }
  
  button:focus:not(:focus-visible) {
    outline: none;
  }
  
  p {
    margin: auto;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  `;
