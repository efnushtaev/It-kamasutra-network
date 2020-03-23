import React from 'react'
import styles from './style.module.scss'

const FormControl = (props) => {
    const hasError = props.meta.touched && props.meta.error
    return (
        <div className={hasError ? styles.error + ' ' + styles.formControl : styles.formControl}>
            {props.children}
            <span>{props.meta.error}</span>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, children, ...restProps} = props
    return (
        <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    )
}
export const Input = (props) => {
    const {input, meta, children, ...restProps} = props
    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    )
}