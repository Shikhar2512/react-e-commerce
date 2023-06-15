// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword 
} from 'firebase/auth';
import {
    getFirestore,
    doc,//get a document insntance 
    getDoc,//get data from document 
    setDoc //set data in document
} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZRPFV-IBpfZ0v34Rs_ZoSwnjS8EN8ln0",
    authDomain: "top-clothing-db.firebaseapp.com",
    projectId: "top-clothing-db",
    storageBucket: "top-clothing-db.appspot.com",
    messagingSenderId: "939258601284",
    appId: "1:939258601284:web:9c7899f645e905f6744111"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account',
});
export const auth = getAuth(); // keep track of authentication state of whole application 
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const db = getFirestore(); // points to our database
export const createUserDocumentFromAuth = async (user) => {
    console.log(user);
    const userDocRef = doc(db, 'users', user.uid); // instance of particular user but we dont know it exists or not 
    const userSnapShot = await getDoc(userDocRef); // actual object to check wheather the user exits in DB or not 
    if (!userSnapShot.exists()) { // id user data doesnot exist create and set doc
        const { displayName, email } = user;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        }
        catch (error) {
            console.log("error in setDoc ", error);
        }
    }
    return userDocRef;
} 
export const createAuthUserWithEmailAndPassword = async ()=>{ // making an authenticated user inside firebase authentication tab. this is not user document inside firestore instane 


} 