import firebaseApp from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./config";
import "firebase/firestore";

const firebaseInit = () => {
  firebaseApp.initializeApp(firebaseConfig);
  return firebaseApp.auth();
};

export default firebaseInit();
export const db = firebaseApp.firestore();
export const deliveryRef = db.collection("Deliveries");
