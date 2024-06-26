// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Analytics, getAnalytics, isSupported } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: `https://${process.env.NEXT_PUBLIC_AUTH_DOMAIN}`,
  projectId: process.env.NEXT_PUBLIC_PROJET_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SEND_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MESSUREMENT_ID,
};

// Initialize Firebase
export const firebasedb = initializeApp(firebaseConfig);
export let analytics: Analytics | undefined;
if (typeof window !== "undefined") {
  isSupported()
    .then((isSupported: boolean) => {
      if (isSupported) {
        analytics = getAnalytics(firebasedb);
      }
    })
    .catch((error) => {
      console.error("Firebase Analytics is not supported", error);
    });
}
