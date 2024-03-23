import { firebasedb } from "./firebasedb";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

export const fireStore = getFirestore(firebasedb);

// export const analytics = getAnalytics(firebasedb);
