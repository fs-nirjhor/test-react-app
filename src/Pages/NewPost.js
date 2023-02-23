import React from 'react';
import { useOutletContext } from "react-router-dom";

const NewPost = () => {
const [currentUser] = useOutletContext();

return (
    <div>
    <h3>Welcome {[currentUser]}, write a new post!</h3>
    {
      currentUser.map(user => <h3>Welcome {user}, write a new post!</h3>)
    }
     
    </div>
);
};

export default NewPost;