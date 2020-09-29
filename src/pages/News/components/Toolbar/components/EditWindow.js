import React from 'react'

export const EditWindow = (props) =>{

//редактирования и создания поста
  return(

            <div className={`${props.modalState} EditWindowWrap`}>
              <div className="EditWindow">
                <input
                  type="text"
                  className="form-control"
                  placeholder="title"
                  value={props.titleValue}
                  onChange={(e) => props.setTitleValue(e.target.value)}
                />
                <textarea
                  type="text"
                  className=" bodyInput"
                  placeholder="body"
                  value={props.bodyValue}
                  onChange={(e) => props.setBodyValue(e.target.value)}
                />
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-dark toolbar-btn"
                    onClick={() => props.editedornew(props.postFocus)}
                  >
                    добавить
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger toolbar-btn"
                    onClick={() => props.setModalState("hidden")}
                  >
                    отмена
                  </button>
                </div>
              </div>
              </div>


  )
}
