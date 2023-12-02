import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDicjM37W_je7cA7PFuZ80XEL0v3smeOL0",
  authDomain: "guerreropassagens.firebaseapp.com",
  databaseURL: "https://guerreropassagens-default-rtdb.firebaseio.com",
  projectId: "guerreropassagens",
  storageBucket: "guerreropassagens.appspot.com",
  messagingSenderId: "521820548207",
  appId: "1:521820548207:web:4f8df3fcebfafead94f19a",
  measurementId: "G-RQELCSYVYW"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
