

const firebaseConfig = {
    apiKey: "AIzaSyC4KcdP3wir6hGOm9mzElyjF_vuO8e1A5Y",
    authDomain: "snakev2-ae352.firebaseapp.com",
    projectId: "snakev2-ae352",
    storageBucket: "snakev2-ae352.appspot.com",
    messagingSenderId: "74357038554",
    appId: "1:74357038554:web:cd0271c960e791d0e074e3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
