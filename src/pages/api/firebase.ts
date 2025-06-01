import dotenv from "dotenv";
dotenv.config();
import { initializeApp } from "firebase/app";
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "firebase/auth";
import { getDatabase , ref, set ,push,query,get  ,remove,update} from "firebase/database";
import  admin from 'firebase-admin';



const serviceAccount = {
  "type": "service_account",
  "project_id": process.env.FIREBASE_PROJECT_ID,
  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
  "private_key": process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n') ,
  "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  "client_id": process.env.FIREBASE_CLIENT_ID,
  "auth_uri": process.env.FIREBASE_AUTH_URI,
  "token_uri": process.env.FIREBASE_TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  "client_x509_cert_url":process.env.FIREBASE_CLIENT_X509_CERT_URL,
  "universe_domain": process.env.FIREBASE_UNIVERSE_DOMAIN
}
;


interface Task {
  title: string;
  completed: boolean;
  timestamp: number;
}

interface TaskLogEntry {
  task: Task;
}


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


export const sign = async (email :string , password : string,name:string): Promise<object | string>  => { 
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredentials.user;
    await updateProfile(user, {
      displayName:name
    })
    
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();
    const decoded = await admin.auth().verifyIdToken(token);
    
    const data = { message: "done", value: token , name:name,uid:decoded.uid }
    return data ;
  }
   catch (error: unknown) {
    if (error instanceof Error) {
      return error.message;
    }
    return "An unknown error occurred";
  }
}




export const log = async (email :string , password : string): Promise<object | string>  => { 
  try {  
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();
    const decoded = await admin.auth().verifyIdToken(token);
    const userRecord = await admin.auth().getUser(decoded.uid);
    const name = await userRecord?.displayName

    const data = { message: "done", value: token , uid:decoded.uid , name:name }
    return data ;
  }
   catch (error: unknown) {
    if (error instanceof Error) {
      return error.message;
    }
    return "An unknown error occurred";
  }
}

export const verify = async (token:string): Promise<string>  => { 
  try {  
    
    const result = await admin.auth().verifyIdToken(token);
    let value ='';
    if (typeof result === 'object' ) {
      value = "done"
    }
    return value
  }
   catch (error: unknown) {
    if (error instanceof Error) {
      return error.message;
    }
    return "An unknown error occurred";
  }
}

export const Log_task = async (Task:string , Date:string,Uid:string ) => {
  try {
    const db = getDatabase();
    const postListRef = ref(db, 'Tasklogs/' + Uid + '/' + 'Userlogs' );
    const newPostRef = push(postListRef);
    set(newPostRef, {
      task:{Task,Date}
});
    return {message:'done'};
  }
  catch (error: unknown) {
    if (error instanceof Error) {
      return error.message;
    }
    return "An unknown error occurred";
  }
} 

export const Fetch_task = async (Uid:string) => {
  try {
    const db = getDatabase();
    const userTaskRef = query(
      ref(db,  'Tasklogs/' + Uid + '/' + 'Userlogs')
    );

    const snapshot = await get(userTaskRef);

    if (snapshot.exists()) {
      const rawData = snapshot.val() as Record<string, TaskLogEntry>;
      const taskList = Object.entries(rawData).map(([key, value]) => ({
        id: key, 
        ...value.task, 
      }));
      return taskList;
    } else {
      console.log("No data found");
      return 'no data';
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return error.message;
    }
    return "An unknown error occurred";
  }
};

export const delete_task = async (Uid:string,id:string,) => {
  try {
    const db = getDatabase();
    const userpath = 'Tasklogs/' + Uid + '/' + 'Userlogs/' + id 
    remove(ref(db,userpath))
    return { message: 'Task deleted' }
  }
  catch (error: unknown) {
    if (error instanceof Error) {
      return error.message;
    }
    return "An unknown error occurred";
  }
   
};


export const update_task = async (Uid:string,id:string,task:string,date:string) => {
  try {
    const db = getDatabase();
    const userpath = 'Tasklogs/' + Uid + '/' + 'Userlogs/' + id 

    const postData = {
      task:{Task: task, Date:date}
  };

      await update(ref(db,userpath),postData)
       
    return {Task: task, Date:date , message:'done'};


  }
   catch (error: unknown) {
    if (error instanceof Error) {
      return error.message;
    }
    return "An unknown error occurred";
  }
};
