import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBK4-HyWEkZO8TIAZ_NkMPc0HfzxtQwB38",
  authDomain: "example-clothing-project.firebaseapp.com",
  databaseURL: "https://example-clothing-project.firebaseio.com",
  projectId: "example-clothing-project",
  storageBucket: "example-clothing-project.appspot.com",
  messagingSenderId: "824745828688",
  appId: "1:824745828688:web:3925726209c7fbb2898c55"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
