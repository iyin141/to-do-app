import dotenv from "dotenv";
dotenv.config();
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import  admin from 'firebase-admin';



const serviceAccount = {
  "type": "service_account",
  "project_id": process.env.FIREBASE_PROJECT_ID,
  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
  "private_key": process.env.FIREBASE_PRIVATE_KEY ,
  "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  "client_id": process.env.FIREBASE_CLIENT_ID,
  "auth_uri": process.env.FIREBASE_AUTH_URI,
  "token_uri": process.env.FIREBASE_TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  "client_x509_cert_url":process.env.FIREBASE_CLIENT_X509_CERT_URL,
  "universe_domain": process.env.FIREBASE_UNIVERSE_DOMAIN
}
;



try {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    });
  }
} catch (error) {
  console.error("Firebase Admin init failed:", error);
}

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN ,
  databaseURL: process.env.FIREBASE_DATABASE_URL ,
  projectId: process.env.FIREBASE_PROJECT_ID ,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET ,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID ,
  appId: process.env.FIREBASE_APP_ID ,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
  
};

initializeApp(firebaseConfig);

const auth = getAuth();


export const sign = async (email :string , password : string,name:string): Promise<string>  => { 
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredentials.user;
    await updateProfile(user, {
      displayName:name
    })
    
    return "done";
  }
   catch (error: unknown) {
    if (error instanceof Error) {
      // Now TypeScript knows error has .message
      return error.message;
    }
    return "An unknown error occurred";
  }
}

