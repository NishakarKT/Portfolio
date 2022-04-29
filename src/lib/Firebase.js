import Firebase from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyAZLC3YlggqTDRHf5y-rGU6vZva0r4wBck",
    authDomain: "portfolio-nk.firebaseapp.com",
    projectId: "portfolio-nk",
    storageBucket: "portfolio-nk.appspot.com",
    messagingSenderId: "989992271087",
    appId: "1:989992271087:web:1215e64f6d2b1568feaf1a",
    measurementId: "G-FZ2DRQFK54"
};

const firebase = Firebase.initializeApp(config);
export default firebase;