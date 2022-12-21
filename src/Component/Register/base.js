
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZdCKiiYVIpvBc_3oEziG03bVq5Oa2M2c",
  authDomain: "raihan1-b6f0d.firebaseapp.com",
  projectId: "raihan1-b6f0d",
  storageBucket: "raihan1-b6f0d.appspot.com",
  messagingSenderId: "435135924107",
  appId: "1:435135924107:web:48d3627a9e3121b38f918e",
  measurementId: "G-NTK1EBYEV1"
};


const app = initializeApp(firebaseConfig);
const firestore=getFirestore(app);