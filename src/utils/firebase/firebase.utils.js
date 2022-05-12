// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth, signInWithRedirect,
  signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
 } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2TtsYETzfL4qXxl2kg2mADGMd3fwhssI",
  authDomain: "shopit-c50b5.firebaseapp.com",
  projectId: "shopit-c50b5",
  storageBucket: "shopit-c50b5.appspot.com",
  messagingSenderId: "523991847122",
  appId: "1:523991847122:web:917a87c86a1e72dd791d0b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  createUserWithEmailAndPassword(auth, email, password);
}