import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyArRTUNLO8eUNtGt2ZK698tvbRWdoY8e6g",
  authDomain: "gameloggproject-e082b.firebaseapp.com",
  databaseURL: "https://gameloggproject-default-rtdb.firebaseio.com",
  projectId: "gameloggproject",
  storageBucket: "gameloggproject.appspot.com",
  messagingSenderId: "166528624815",
  appId: "1:166528624815:web:ea29a36bfc7ba8c750cc5a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)