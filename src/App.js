import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.scss";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Posts from "./Pages/Posts";
import NewPost from "./Pages/NewPost";
import Post1 from "./Pages/Post1";
import Post1Button from "./Pages/Post1Button";
import Comments from "./Pages/Comments";
import Navigation from "./Pages/Navigation";
import NavLink from "./Pages/NavLink";
import Father from "./Pages/ContextApi/Father";
import Category from "./Pages/Category/Category";
import Login from "./Pages/Login/App";
import UseReducer from "./Pages/UseReducer/UseReducer";
import LoginPage from "./Pages/LoginPage/LoginPage";
import OpenStreet from "./Pages/OpenStreet/OpenStreet";


function App() {
  return (
  <Router>
   <nav>
     <button><Link to="/">Home</Link></button>
     <button><Link to="about">About</Link></button>
     <button><Link to="posts">Posts</Link></button>
     <button><Link to="navlink">NavLink</Link></button>
     <button><Link to="ContextApi">ContextApi</Link></button>
     <button><Link to="Category">Category</Link></button>
     <button><Link to="login">Login</Link></button>
     <button><Link to="LoginPage">LoginPage</Link></button>
     <button><Link to="UseReducer">UseReducer</Link></button>
     <button><Link to="OpenStreet">OpenStreet</Link></button>
   </nav>
    <Routes >
       <Route path="navlink" element={<NavLink/>} />
       <Route path="ContextApi" element={<Father/>} />
       <Route path="Category" element={<Category/>} />
       <Route path="login" element={<Login/>} />
       <Route path="LoginPage" element={<LoginPage/>} />
       <Route path="UseReducer" element={<UseReducer/>} />
       <Route path="OpenStreet" element={<OpenStreet/>} />
       
       <Route path="/" element={<Home/>} >
         <Route index element={<Navigation/>}  />  
       </Route>
       <Route path="about" element={<About/>} ></Route>
       <Route path="posts" element={<Posts/>} >
           <Route path="new" element={<NewPost/>} />
           <Route path=":postId" element={<Post1/>}> 
              <Route index element={<Post1Button/>} />
              <Route path="comments" element={<Comments/>  }/>  
           </Route>
       </Route>
       <Route path="*" element={<h1>Page not found (404)</h1>}/>  
    </Routes>
  </Router>
  );
}

export default App;
