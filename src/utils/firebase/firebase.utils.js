// Import the functions you need from the SDKs you need
import { queries } from "@testing-library/react";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    doc,//get a document insntance 
    getDoc,//get data from document 
    setDoc, //set data in document
    collection, //to get collection reference
    writeBatch,
    query,
    getDocs
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

export const addCollectionAndDocument = async (collectionKey,objectsToAdd) =>{
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db); // add set events to objects passed for sucessfull transition
    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef,object);
    });
    await batch.commit();
}
export const createUserDocumentFromAuth = async (user,additionalInfo) => {
    const userDocRef = doc(db, 'users', user.uid); // instance of particular user but we dont know it exists or not 
    const userSnapShot = await getDoc(userDocRef); // actual object to check wheather the user exits in DB or not 
    if (!userSnapShot.exists()) { // id user data doesnot exist create and set doc
        const { displayName, email } = user;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        }
        catch (error) {
            console.log("error in setDoc ", error);
        }
    }
    return userDocRef;
} 
export const createAuthUserWithEmailAndPassword = async (email,password)=>{ // making an authenticated user inside firebase authentication tab. this is not user document inside firestore instane 
    if(!email ||!password){
        return "enter valid credentials";
    }
    return await createUserWithEmailAndPassword(auth,email,password);
} 
export const signInAuthUserWithEmailAndPassword = async (email,password)=>{ 
    if(!email ||!password){
        return "enter valid credentials";
    }
    return await signInWithEmailAndPassword(auth,email,password);
} 
export const signOutUser = async () => signOut(auth);

export const authStateChangeListner = (callback) =>{
   return onAuthStateChanged(auth,callback);
}

export const getCategoriesAndDocuments = async ()=>{
    const collectionRef = collection(db,'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q); //fetch doc
    const categoryMap = querySnapshot.docs.reduce((auth,docSnapshot)=>{
        const {title, items} = docSnapshot.data();
        auth[title.toLowerCase()] = items;
        return auth;
    },{})
    return categoryMap;
} 