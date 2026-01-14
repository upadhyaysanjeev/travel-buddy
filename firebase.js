import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKzJeUK5ze2DbwKptQptGt-WEYp8DdAhM",
  authDomain: "uber-clone-9b9ea.firebaseapp.com",
  databaseURL: "https://uber-clone-9b9ea-default-rtdb.firebaseio.com",
  projectId: "uber-clone-9b9ea",
  storageBucket: "uber-clone-9b9ea.firebasestorage.app",
  messagingSenderId: "911199463870",
  appId: "1:911199463870:web:c15aa01c8aedb43ad971ef",
  measurementId: "G-VK8XQ59L9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
