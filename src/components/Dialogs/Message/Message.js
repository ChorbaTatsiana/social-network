import React from "react";
import s from "./../Dialogs.module.css";

const Message = props => {
    return <div className={s.dialogs}>{props.text}</div>;
};

export default Message;
