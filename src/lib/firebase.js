import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA1kIs_8Nh6xBJVIJ-vWkbmlN57NHP7r7Y",
  authDomain: "i-feel-you-cf014.firebaseapp.com",
  projectId: "i-feel-you-cf014",
  storageBucket: "i-feel-you-cf014.firebasestorage.app",
  messagingSenderId: "164783549118",
  appId: "1:1055783845678:web:1234567890abcdef"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();