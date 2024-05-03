import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3rm7Ef1JAXqIqycK35f3ph6lSJiFIwF8",
  authDomain: "olxnew-b793a.firebaseapp.com",
  projectId: "olxnew-b793a",
  storageBucket: "olxnew-b793a.appspot.com",
  messagingSenderId: "171079714272",
  appId: "1:171079714272:web:29f77cc73a1da651a6d785",
  measurementId: "G-GZ67GL01WN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (userInfo) => {
  try {
    const { email, password, firstName, lastName } = userInfo;
    const authResponse = await createUserWithEmailAndPassword(auth, email, password);
    await addDoc(collection(db, "users"), {
      email: email,
      firstName: firstName,
      lastName: lastName,
      authId: authResponse.user.uid
    });
    alert("Registration Successful");
    return true;
  } catch (e) {
    alert(e.message);
    throw e;
  }
};

const signIn = async (userInfo) => {
  try {
    const { email, password } = userInfo;
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login Successful");
    return true;
  } catch (e) {
    alert(e.message);
    throw e;
  }
};

export { signIn, signUp };
