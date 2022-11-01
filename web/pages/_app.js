import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import * as dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
dayjs.extend(calendar)
config.autoAddCss = false

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnOvDU0SKb_3GoGvqb1bCr35tT6DA-S3c",
  authDomain: "terng-life-362819.firebaseapp.com",
  projectId: "terng-life-362819",
  storageBucket: "terng-life-362819.appspot.com",
  messagingSenderId: "405822989098",
  appId: "1:405822989098:web:4dbcda3fc46734d32b3453",
  measurementId: "G-MLQWP1PW8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
