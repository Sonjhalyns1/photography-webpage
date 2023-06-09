// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvqN_yzdhAbkXt-uzzurlk5Qp12cnEK9A",
  authDomain: "photo-uploader-1ebb2.firebaseapp.com",
  projectId: "photo-uploader-1ebb2",
  storageBucket: "photo-uploader-1ebb2.appspot.com",
  messagingSenderId: "303523089502",
  appId: "1:303523089502:web:1d45a37be8f0bd902838cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

