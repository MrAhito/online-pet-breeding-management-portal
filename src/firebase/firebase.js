import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: 'AIzaSyDPWEar_YpPdlX_3YV7JaDjBcvQoR2xO-0',
    authDomain: 'pet-society-613aa.firebaseapp.com',
    projectId: 'pet-society-613aa',
    storageBucket: 'pet-society-613aa.appspot.com',
    messagingSenderId: '752993757716',
    appId: '1:752993757716:web:0ac8cbb68cc74696031501',
    measurementId: 'G-PBF4SKQLP5'
})

export const auth = app.auth();
export default app