// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
//console.log(props.comments)
const [comments] = useState(props.comments)
console.log(comments)
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map((entry, index) => {
        return <Comment key={index} comment={entry}/>
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
