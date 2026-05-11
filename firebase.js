  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAl_cK2UUYxh7TJCzisztKlrJ-8lBgG6cM",
    authDomain: "analytics-website-projec-cf4ad.firebaseapp.com",
    projectId: "analytics-website-projec-cf4ad",
    storageBucket: "analytics-website-projec-cf4ad.firebasestorage.app",
    messagingSenderId: "612061599657",
    appId: "1:612061599657:web:21a9178b192ab40ed756b8",
    measurementId: "G-MKK0XF4DEN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);