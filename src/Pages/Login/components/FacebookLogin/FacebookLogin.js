import { signInWithPopup, FacebookAuthProvider, signOut } from "firebase/auth";


//Component function
const FacebookLogin = (props) => {
  const {auth} = props;
 const facebookProvider = new FacebookAuthProvider();
  const handleFbSignIn = () => {
    signInWithPopup(auth, facebookProvider)
  .then((result) => {
    const user = result.user;
    console.log(user);
  })
  .catch((error) => {
   alert(error.message);
  });
  };
  const handleFbSignOut = () => {
    signOut(auth).then(() => {
  console.log("Sign-out successful");
}).catch((error) => {
  alert(error.message);
});
  };
  
return (
  <div className="loginBox" >
    <button className="my-btn" onClick={handleFbSignIn}>
        Sign in with Facebook 
        </button>
    <button className="my-btn" onClick={handleFbSignOut}>Sign out with Facebook </button>
  </div>
);
};

export default FacebookLogin;