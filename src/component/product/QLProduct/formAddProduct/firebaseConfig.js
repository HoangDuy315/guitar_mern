import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp ({
    authDomain: "test-64a54.firebaseapp.com",
  projectId: "test-64a54",
  storageBucket: "test-64a54.appspot.com",
  messagingSenderId: "358789865250",
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  measurementId: "G-MEASUREMENT_ID",
});

// Firebase storage reference
const storage = getStorage(app);
export default storage;