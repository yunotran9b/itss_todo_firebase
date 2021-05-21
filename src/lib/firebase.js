import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBGcuh_AgWraIi48BJ6i_8JnL6IuWtKLOg",
    authDomain: "fir-sample-52db0.firebaseapp.com",
    projectId: "fir-sample-52db0",
    storageBucket: "fir-sample-52db0.appspot.com",
    messagingSenderId: "436477464399",
    appId: "1:436477464399:web:16146f48501e681ac9ff3a"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//Add firebase storage
const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;

export const getFirebaseItems = async () => {
  try {
    const snapshot = await db
      .collection("todos")
      .get();
    const items = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export const addFirebaseItem = async (item) => {
  try {
    const todoRef = db.collection("todos");
    await todoRef.add(item);
  } catch (err) {
    console.log(err);
  }
}

export const updateFirebaseItem = async (item, id) => {
  try {
    const todoRef = db.collection("todos").doc(id);
    await todoRef.update(item);
  } catch (err) {
    console.log(err);
  }
}

export const clearFirebaseItem = async (item) => {
  const todoRef = db.collection("todos").doc(item.id);
  await todoRef.delete().then(function () {
  }).catch(function (err) {
    console.log(err);
  });
}; 