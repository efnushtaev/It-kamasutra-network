import React from 'react'
import styles from './style.module.scss'
import { Field } from 'redux-form'

const FormControl = ({meta:{touched,error,active}, input:{onBlur}, children}) => {
    
    const hasError = touched && active && error
    
    return (
        <div className={hasError ? styles.error + ' ' + styles.formControl : styles.formControl}>
            {children}
            {hasError ? <span>{error}</span> : null}
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

export const CreateField = (name, placeholder, component, validators, props = {}, text = "") => (
    <div>
        <Field 
            name={name}
            placeholder={placeholder}
            component={component}
            validators={validators}
            {...props}  
        />{text}
    </div>
)