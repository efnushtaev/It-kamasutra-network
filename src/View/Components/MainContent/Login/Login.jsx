import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { login } from './../../../../redux/reducer/auth-reducer';
import style from './../../Common/FormsControls/style.module.scss';
import {Input} from "./../../Common/FormsControls";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} placeholder={'Email'} component={Input}/>
            </div>
            <div>
                <Field  name={'password'}  placeholder={'Password'} component={Input}/>
            </div>
            <div>
                <Field  name={'rememberMe'} type={'checkbox'} component={Input}/> <span>remember me</span>
            </div>
            {props.error && <div className={style.formError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
const Login = (props) => {
    const onSubmit= (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe) }
    
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    
    return (
        <div>
            <h3>Login</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)