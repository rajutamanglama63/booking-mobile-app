import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD47Cj4SeO1ULD3F5EAhxtYWfySQxpPn2U",
  authDomain: "hotelbooking-project-33729.firebaseapp.com",
  projectId: "hotelbooking-project-33729",
  storageBucket: "hotelbooking-project-33729.appspot.com",
  messagingSenderId: "1007282601315",
  appId: "1:1007282601315:web:025a298b8adc5683bee756",
  measurementId: "G-63EMP6RJMT",
};

const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const db = getFirestore(app);

export { auth, db };
