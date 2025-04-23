// firebase.js
const firebaseConfig = {
    apiKey: "AIzaSyDUGk4PBFp2WS6gsMCkFcCUMmEQIWL-cYs",
    authDomain: "webfarm-bdc35.firebaseapp.com",
    projectId: "webfarm-bdc35",
    storageBucket: "webfarm-bdc35.firebasestorage.app",
    messagingSenderId: "171163595158",
    appId: "1:171163595158:web:52b28d744349f36cd06db7",
    measurementId: "G-3VG524T04J"
  };
  
  // Inisialisasi Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();