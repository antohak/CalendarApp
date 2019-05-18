import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyC2axb1qS_u2xkFbuClrC9GGOcHPPz-ynI",
  authDomain: "calendar-b8b25.firebaseapp.com",
  databaseURL: "https://calendar-b8b25.firebaseio.com",
  projectId: "calendar-b8b25",
  storageBucket: "calendar-b8b25.appspot.com",
  messagingSenderId: "1055459320923"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase