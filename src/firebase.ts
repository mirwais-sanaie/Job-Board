import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsq0rwZUWMrTjkBgTDJrFDWA0d1bY6E30",
  authDomain: "jobboard-2e2ef.firebaseapp.com",
  projectId: "jobboard-2e2ef",
  storageBucket: "jobboard-2e2ef.firebasestorage.app",
  messagingSenderId: "378280307680",
  appId: "1:378280307680:web:28687cca800afbd29ed985",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const firestore = app.firestore();
const db = getFirestore(app);

export { app, db };
