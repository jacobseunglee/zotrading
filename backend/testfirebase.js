import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config()

initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://zotrading-default-rtdb.firebaseio.com'
});

const db = getFirestore();
;
const snapshot = await db.collection('users').get();
snapshot.forEach((doc) => {
  console.log(doc.id, '=>', doc.data());
});