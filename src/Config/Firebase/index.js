// Import the functions you need from the SDKs you need
import { initializeApp }from "firebase/app";
import { getAuth }      from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzbhcWEGctikwyLR3SkPW5NH7y8OR1K_Y",
  authDomain: "reactjs-techstore.firebaseapp.com",
  projectId: "reactjs-techstore",
  storageBucket: "reactjs-techstore.appspot.com",
  messagingSenderId: "589900721548",
  appId: "1:589900721548:web:e82406ff5b50eafbe1faa9",
  measurementId: "G-87B3JG14DS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const store = getFirestore(app);

export default {app,analytics,auth,firestore};

