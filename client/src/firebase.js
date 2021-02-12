import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX1urHkOdLwo9dPAaIkJRWQGXIOHYN8pA",
  authDomain: "pandapatter-bd157.firebaseapp.com",
  projectId: "pandapatter-bd157",
  storageBucket: "pandapatter-bd157.appspot.com",
  messagingSenderId: "1031861828761",
  appId: "1:1031861828761:web:c7c67c0359d346175ccc08",
  measurementId: "G-LK22L2JBD0",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const generateUserDocument = async (user, moreData) => {
  // Check to see if there is user data.
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const getCurrentContent = await userRef.get();
  if (!getCurrentContent.exists) {
    // If user data isn't present we want to write some
    const { email, displayName } = user;
    try {
      await userRef.set({
        displayName,
        email,
        ...moreData,
      });
    } catch (err) {
      console.error("There was a problem creating the user document", err);
    }
  }
  return getUserDocument(user.uid);
};
// Return user data using getUserDocument
const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDoc = await firestore.doc("users/${uid}").get();
    return {
      uid,
      ...userDoc.data(),
    };
  } catch (err) {
    console.error("Could not fetch the user", err);
  }
};
// Original rules for FireStore
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2021, 3, 11);
//     }
//   }
// }
