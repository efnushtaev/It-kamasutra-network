import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { login } from './../../../../redux/reducer/auth-reducer';
import style from './../../Common/FormsControls/style.module.scss';
import {Input, CreateField} from "./../../Common/FormsControls";
import { required } from '../../../../utils/validations';


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    
    return (
        <form onSubmit={handleSubmit}>
            {CreateField('email', 'Email', Input, [required])}
            {CreateField('password', 'Password', Input, [required])}
            {CreateField('rememberMe', null, Input, [required], {type: "checkbox"}, 'remember me')}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && CreateField('captcha', 'Symbols from image', Input, [required])}


            {error && <div className={style.formError}>
                {error}
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
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha) }
    
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (
        <div>
            <h3>Login</h3>
            <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth:state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)