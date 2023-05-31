import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyADANxtx3pecr3rkQLidQKoS95MbZn-OWI",
    authDomain: "fir-df13e.firebaseapp.com",
    projectId: "fir-df13e",
    storageBucket: "fir-df13e.appspot.com",
    messagingSenderId: "319131312222",
    appId: "1:319131312222:web:982f8bc6423f7f0be9d4cf",
    measurementId: "G-627E45TY8G"
  };

  export default firebase.initializeApp(firebaseConfig)