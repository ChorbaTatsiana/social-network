import React from 'react';
import styles from './FormsControls.module.css';

const FornControl = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + hasError ? styles.error : ''}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FornControl {...props}><textarea {...input} {...restProps} /></FornControl>

};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FornControl {...props}><input {...input} {...restProps} /></FornControl>
};
