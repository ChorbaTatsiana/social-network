import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";


const Dialogs = props => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(item => <DialogItem name={item.name} 
        id={item.id} key={item.id} />);
    let messageElement = state.messages.map(m => <Message text={m.message} key={m.id} />);

    let submit = values => {
        props.sendMessage(values.newMessageBody)
    }

    if (props.isAuth === false) return <Redirect to='/login' />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <div>
                    <MessageReduxForm onSubmit={submit} />
                </div>
            </div>
        </div>
    );
};
const maxlength10 = maxLengthCreator(50);
const AddMessageForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                placeholder={"enter your message"}
                name={'newMessageBody'}
                component={Textarea} 
                validate={[required, maxlength10]}
                />
            <div>
                <button>send</button>
            </div>
        </form>
    )
};

const MessageReduxForm = reduxForm({ form: 'dialogsAddMessageForm' })(AddMessageForm);

export default Dialogs;
