import React, { useState, Fragment } from "react";
import {EditWindow} from './components/EditWindow';
import {Confirm} from './components/Confirm';

export const Toolbar = (props) => {
//Стейты инпутов окна ввода
  const [bodyValue, setBodyValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
//     Стейты принимающий два значения: '' и 'hidden', которые добавляются как класс css
//Этот стейт отвечает за скрыть-открыть окно ввода
  const [modalState, setModalState] = useState("hidden");
//Этот за скрыть-открыть окно подтверждения удаления
  const [confirmState, setConfirmState] =useState("hidden");

//функция, которая обнуляет инпуты ввода и открывает окно,
//вызывается кнопкой "добавить"
  const newPost = () => {
    setTitleValue("");
    setBodyValue("");
    setModalState("");
  };

//получает объект из стейта с постами, берёт данные и передаёт в стейты инпутов
//"изменить"
  const editPost = (i) => {
    let item = props.postsState[i - 1] || [];
    setTitleValue(item.title);
    setBodyValue(item.body);
    setModalState("");
  };

//функция создающая новый пост
 //"добавить" - окна редактирования
  const createNewPost = () => {
    let item = {
      id: (props.postsState.length+1),
      title: titleValue,
      body: bodyValue,
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => [...props.postsState, json])
      .then((arr) => props.setPostsState(arr))
      .catch((err) => console.log(err));
  };
//редактирует пост
// "изменить" - окна редактирования
  const createEditedPost = (i) => {
    let arr = [...props.postsState];
    let item = arr[i-1];
    item.id = i;
    item.title = titleValue;
    item.body = bodyValue;
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        arr[i-1] = json;
        return arr})
      .then(() => {
        props.setPostsState([...arr]);
        setModalState("hidden");
        props.setPostFocus("");
      })
      .catch((err) => console.log(err));
  };

  //удаляет пост с запросом на сервер
  //вызывается кнопкой "да" окна подтверждения
    const deletePost = (i) => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${i}`, {
        method: "DELETE",
      })
        .then(() => {
          props.setPostsState(props.postsState.filter((obj, x) => x !== (i-1)));
          props.setPostFocus("");
          setConfirmState('hidden');
        })
        .catch((err) => console.log(err));
      };


// проверяет был ли выделен пост, если да, то изменяет его соответсвенно id поста
// если нет, то создаёт новый пост
  const editedornew = (i) => {
    if (props.postFocus) {
      createEditedPost(i);
    } else {
      createNewPost();
      setModalState("hidden");
      setTitleValue("");
      setBodyValue("");
    }
  };

  return (
    <Fragment>
      <div className="Toolbar">
        <button
          type="button"
          className="btn btn-outline-dark toolbar-btn"
          onClick={() => newPost()}
          disabled={(props.postFocus)}
        >
          Добавить
        </button>

        <button
          type="button"
          className="btn btn-outline-dark toolbar-btn"
          onClick={() => editPost(props.postFocus)}
          disabled={!(props.postFocus)}
        >
          Изменить
        </button>

        <button
          type="button"
          className="btn btn-outline-danger toolbar-btn"
          onClick={() => setConfirmState('')}
          disabled={!(props.postFocus)}
        >
          Удалить
        </button>

<EditWindow
titleValue={titleValue}
setTitleValue={setTitleValue}
bodyValue={bodyValue}
setBodyValue={setBodyValue}
modalState={modalState}
setModalState={setModalState}
postFocus={props.postFocus}
editedornew={editedornew} />

  <Confirm
confirmState={confirmState}
setConfirmState={setConfirmState}
deletePost={deletePost}
postFocus={props.postFocus} />



     </div>
    </Fragment>
  )
}
