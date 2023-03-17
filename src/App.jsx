import { BrowserRouter } from "react-router-dom"

import {About, Contact, Experience, Feedbacks,
Hero, Navbar, Tech, Works, StarsCanvas} from './components';
 

const App = () => {

  return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
              <Contact />
              <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5XCPHvLgmCr2IW7YgYFGx31WSh02oZ4Q",
  authDomain: "portfolio-a7b66.firebaseapp.com",
  projectId: "portfolio-a7b66",
  storageBucket: "portfolio-a7b66.appspot.com",
  messagingSenderId: "688614513021",
  appId: "1:688614513021:web:4159c6c18fcde52c051414",
  measurementId: "G-ZXL20QFWVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
