import React, { useEffect, useState, Fragment } from "react";
import { Toolbar } from "./components/Toolbar/Toolbar.js";
import { PostList } from "./components/PostList.js";


export const News = () => {

 //Стейт со всеми постами
  const [postsState, setPostsState] = useState([]);
 //Стейт хранящий в себе id выделенного поста
  const [postFocus, setPostFocus] = useState("");

  //Запрос данных с сервера
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((response) => response.json())
      .then((json) =>
        setPostsState(
          json.map((object) => {
            const item = {};
            item.id = object.id;
            item.title = object.title;
            item.body = object.body;
            item.checked = false;
            return item;
          })
        )
      );
  }, []);



  return (
    <Fragment>
      <div className="container">
        <Toolbar
          postsState={postsState}
          setPostsState={setPostsState}
          postFocus={postFocus}
          setPostFocus={setPostFocus}
        />
        <hr />
        <PostList
          postsState={postsState}
          postFocus={postFocus}
          setPostFocus={setPostFocus}
        />
      </div>
    </Fragment>
  );
};
