import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCxGSltmHDUbb9yPOe_wR30G_9lkw-PaE0",
	authDomain: "mango-market-9df47.firebaseapp.com",
	projectId: "mango-market-9df47",
	storageBucket: "mango-market-9df47.appspot.com",
	messagingSenderId: "348123480570",
	appId: "1:348123480570:web:b2acb169d85e14347be443",
	measurementId: "G-4XHSTDXPED",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
