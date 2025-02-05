// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {initializeAuth,getReactNativePersistence} from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJo0Rt_9j56t08dIwH8eiBrZJmEwHp8Kc",
  authDomain: "project2025-62df0.firebaseapp.com",
  projectId: "project2025-62df0",
  storageBucket: "project2025-62df0.firebasestorage.app",
  messagingSenderId: "1014913259859",
  appId: "1:1014913259859:web:c43d6b0ecca0b9c9eee9a6",
  measurementId: "G-1CPX4MLMF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=initializeAuth(app,{
    persistence:getReactNativePersistence(ReactNativeAsyncStorage)
})
export const db=getFirestore(app)
const analytics = getAnalytics(app);