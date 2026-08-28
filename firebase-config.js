const firebaseConfig = {
    apiKey: "AIzaSyB25VaErJEsI3VLBeb52cpczKRmEWC4fEs",
    authDomain: "pak-earning-site.firebaseapp.com",
    databaseURL: "https://pak-earning-site-default-rtdb.firebaseio.com",
    projectId: "pak-earning-site",
    storageBucket: "pak-earning-site.firebasestorage.app",
    messagingSenderId: "830671389706",
    appId: "1:830671389706:web:16ab555ffdd85cff70cbf3"
};

// Initialize Firebase (only once)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// 🔴 Using Realtime Database
const db = firebase.database();
