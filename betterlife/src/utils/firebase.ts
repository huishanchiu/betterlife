import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCkypBRI7sPFWBYE0g4xNPbz0I6RZVKg1E',
  authDomain: 'betterlife-bc973.firebaseapp.com',
  projectId: 'betterlife-bc973',
  storageBucket: 'betterlife-bc973.appspot.com',
  messagingSenderId: '18446899821',
  appId: '1:18446899821:web:28080bb85fd492795cfd64',
  measurementId: 'G-WNHNJ6H3BB'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
