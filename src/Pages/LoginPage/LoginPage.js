import { auth } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail
} from "firebase/auth";
import { useState } from "react";

const LoginPage = () => {
  const [myUser, setMyUser] = useState({});
  const {email, password} = myUser;
  const [loggedUser, setLoggedUser] = useState({});
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const newUser = { ...myUser };
    newUser[e.target.name] = e.target.value;
    setMyUser(newUser);
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        sendEmailVerification(auth.currentUser).then(() => {
          setMessage("Email verification sent");
        });
      })
      .catch((error) => {
        setMessage(error.code);
      });
  };
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        if (user.emailVerified) {
          const newUser = { ...loggedUser };
          newUser.name = user.displayName;
          newUser.email = user.email;
          setLoggedUser(newUser);
          setMessage("Signin successful!");
        } else {
          setMessage("Please verify your email.");
        }
        console.log(user);
      })
      .catch((error) => {
        setMessage(error.code);
      });
  };
  const handleResetPassword = () => {
  	sendPasswordResetEmail(auth, email)
  .then(() => {
    setMessage("Password reset email sent!");
  })
  .catch((error) => {
    setMessage(error.code);
  });
  };
  return (
    <div>
      <form>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
      </form>
        <button onClick={handleSignUp}> Signup</button>
        <button onClick={handleSignIn}> Signin</button> 
        <br />
        <button onClick={handleResetPassword}> Forget Password ?</button>
      <h4>{message}</h4>
    </div>
  );
};

export default LoginPage;
