import React from "react";
import { Post } from "./Post.js";

export const PostList = (props) => {
  return props.postsState.map((post, index) => (
    <Post
      post={post}
      key={index}
      index={index+1}
      postFocus={props.postFocus}
      setPostFocus={props.setPostFocus}
    />
  ));
};
