import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, setDoc, addDoc, collection } from "firebase/firestore";
import dotenv from 'dotenv';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Importa la librería 'dotenv' para cargar las variables de entorno desde el archivo .env


// Carga las variables de entorno desde el archivo .env
dotenv.config();

// Crea la constante 'firebaseConfig' con los valores del archivo .env
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
let app;

let firestoreDB;

export const initializeFirebaseApp = () => {
    try {
        app = initializeApp(firebaseConfig);
        firestoreDB = getFirestore();
        return app
    }catch (error) {
        console.error(error);
      }
};

export const uploadProcessData = async (name, phone, mail, message) => {
    const dataToUpload = {
        name: name,
        phone: phone,
        mail: mail,
        message: message
    };
    try {
        const newDocumentRef = await addDoc(collection(firestoreDB, "leads"), dataToUpload);
        return `Documento creado con ID: ${newDocumentRef.id}`;
    } catch (error) {
        console.error(error);
        return "Error al crear el nuevo documento";
    }


};

 export const editUploadProcessData = async (name, phone, mail) => {
         const dataToUpload = {
             name: name,
             phone: phone,
             mail: mail
         };
         try {
             const document = doc(firestoreDB, "leads", "h");
             let dataUpdated = await setDoc(document, dataToUpload);
             return dataUpdated;
         }catch (error) {
             console.error(error);
           }
     
     
     };


export const getFirebaseApp = () => app;

