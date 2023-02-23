
import './App.css';
import { useState } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import GoogleLogin from "./components/GoogleLogin/GoogleLogin";
import FacebookLogin from "./components/FacebookLogin/FacebookLogin";


// import for firebase
import firebaseConfig from "./firebase.config";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({
    name:'',
    email:'',
    password:'',
    photo:'',
    message: '',
    isSuccess: false,
    isSignIn: false
  });

  return (
    <div className="App">
      <header className="App-header">
       <h2>Firebase Authentication</h2>
        <GoogleLogin user={user} setUser={setUser} auth={auth}></GoogleLogin >
        <FacebookLogin user={user} setUser={setUser} auth={auth}></FacebookLogin >
        <hr />
        <LoginForm user={user} setUser={setUser} auth={auth}/>  
      </header>
    </div>
  );
}

export default App; 