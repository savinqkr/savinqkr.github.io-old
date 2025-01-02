import { getFirestore } from "firebase/firestore";
import firebase from "./firebase";

const fireStore = getFirestore(firebase);

export default fireStore;
