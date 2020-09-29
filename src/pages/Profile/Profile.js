import React from "react";
import { Redirect } from "react-router-dom";

export const Profile = (props) => {
  //Здесь ничегго особенного, просто рендер данных полученных с сервера.
  if (props.login) {
    console.log(props.confidentialData.id);
    return (
      <div className="wrap">
        <div className="profileWindow">
          <p>
            <strong>name:&nbsp;</strong>
            {props.confidentialData.name}
          </p>
          <p>
            <strong>username:&nbsp;</strong>
            {props.confidentialData.username}
          </p>
          <p>
            <strong>email:&nbsp;</strong>
            {props.confidentialData.email}
          </p>
          <p>
            <strong>phone:&nbsp;</strong>
            {props.confidentialData.phone}
          </p>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/login" />;
  }
};
