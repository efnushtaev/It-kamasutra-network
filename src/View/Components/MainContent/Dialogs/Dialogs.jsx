import React from 'react';
import classes from './dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import elFormsTextarea from './../../../Styles/Elements/Forms/textarea.module.scss'
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form'

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field  component="textarea"
                    name="newDialogMessage"
                    placeholder="NEW MESSAGE..." />
            <button>Add message</button>
        </form>
    )
}

const DialogReduxForm = reduxForm({ form: 'dialogMessage' })(DialogsForm)
const Dialogs = (props) => {
    if (!props.isAuth) return <Redirect to={'/login'} />;

    let addNewDialogMessage = (values) => {
        props.postNewMessage(values.newDialogMessage)
    }

    let dialogElements =
        props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)

    let messageElements =
        props.messagesData.map(m => <Message message={m.message} come={m.come} />)


    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {dialogElements}
                </div>
                <div className={classes.messages}>
                    {messageElements}
                </div>
            </div>
            <div className={elFormsTextarea.container}>
                <DialogReduxForm onSubmit={addNewDialogMessage} />
            </div>
        </div>
    )
}



export default Dialogs;