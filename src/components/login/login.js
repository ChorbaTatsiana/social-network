import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login, logout } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import styles from '../common/FormsControls/FormsControls.module.css';

const maxlength10 = maxLengthCreator(20);

const LoginForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder={"email"}
                    name={"email"}
                    component={Input}
                    validate={[required, maxlength10]}
                />
            </div>
            <div>
                <Field
                    name={"password"}
                    placeholder={"password"}
                    component={Input}
                    validate={[required, maxlength10]}
                    type={"password"}
                />
            </div>
            <div>
                <Field name={"rememberMe"} component={Input} type={"checkbox"} />{" "}
                remember me
            </div>
            {props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>login</button>
            </div>
        </form>
    );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

let Login = props => {
    let submit = values => {
        props.login(values.email, values.password, values.rememberMe);
    };
    if (props.isAuth) {
        console.log('login');
        return <Redirect to={"/profile"} />;
    }
    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={submit} />
        </>
    );
};
let mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    };
};

export default connect(mapStateToProps, { login })(Login);
