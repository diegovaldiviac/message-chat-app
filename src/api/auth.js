import firebase from "firebase/app";
import 'firebase/auth';
import db from "../db/firestore"


const createUserProfile = userProfile =>
  db
    .collection('profiles')
    .doc(userProfile.uid)
    .set(userProfile)


export async function register({email, password, username, avatar}) {

    const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
    await createUserProfile({uid: user.uid, username, password, email, avatar, joinedChats: []})
}

export const onAuthStateChanges = onAuth =>
    firebase.auth().onAuthStateChanged(onAuth);

export const getUserProfile = uid => {
    db
        .collection('profiles')
        .doc(uid)
        .get()
        .then(snapshot => snapshot.data())
}

export const logout = () => firebase.auth().signOut();

export const login = ({email, password}) => 
    firebase.auth().signInWithEmailAndPassword(email, password);
