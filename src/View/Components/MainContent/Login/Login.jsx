import React from 'react'
import { reduxForm, Field } from 'redux-form'


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} placeholder={'Login'} component={"input"}/>
            </div>
            <div>
                <Field  name={'passsword'}  placeholder={'Password'} component={"input"}/>
            </div>
            <div>
                <Field  name={'rememberMe'} type={'checkbox'} component={"input"}/> <span>remember me</span>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
const Login = () => {
    const onSubmit= (formData) => {console.log(formData)}
    return (
        <div>
            <h3>Login</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login