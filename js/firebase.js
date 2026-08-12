// ==========================================
// Firebase Configuration
// ==========================================

const firebaseConfig = {
  apiKey: "AIzaSyAie7YeiL6ku5hHXGvpTEsQRfrzVO-oppo",
  authDomain: "dooarsmonsoonfestival.firebaseapp.com",
  databaseURL: "https://dooarsmonsoonfestival-default-rtdb.firebaseio.com",
  projectId: "dooarsmonsoonfestival",
  storageBucket: "dooarsmonsoonfestival.firebasestorage.app",
  messagingSenderId: "100757775016",
  appId: "1:100757775016:web:9a9a24dd735c490bab189d"
};


// ==========================================
// Initialize Firebase
// ==========================================

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


// ==========================================
// Firebase Services
// ==========================================

const db = firebase.database();
const auth = firebase.auth();