import React from "react";
// import { App } from "./src/app";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root") as HTMLElement);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0-KocgC9mlE57vQsfBU-7Yy2LYyh6Pxw",
  authDomain: "what-even-is-web-accessibility.firebaseapp.com",
  projectId: "what-even-is-web-accessibility",
  storageBucket: "what-even-is-web-accessibility.appspot.com",
  messagingSenderId: "343315310021",
  appId: "1:343315310021:web:c2ea02d456cf443b6017ac",
  measurementId: "G-7WWW4WCKKN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

root.render(<></>);
