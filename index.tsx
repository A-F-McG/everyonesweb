import React from "react";
// import { App } from "./src/app";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root") as HTMLElement);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

type firebaseConfigType = {
    apiKey: string, authDomain: string, projectId: string, storageBucket: string, messagingSenderId: string,appId: string, measurementId: string
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: firebaseConfigType = process.env.firebaseConfig as unknown as firebaseConfigType;


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

root.render(<></>);
