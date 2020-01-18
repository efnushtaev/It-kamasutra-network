import React from 'react';
import classes from './dialogs.module.scss';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import elFormsTextarea from './../../../Styles/Elements/Forms/textarea.module.scss'
import { updateNewMessageCreateAction, addMessageActionCreate } from './../../../../redux/reducer/dialogPage-reducer';

const Dialogs = (props) => {
    let newText = React.createRef()

    let dialogElements =
        props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)

    let messageElements =
        props.state.messagesData.map(m => <Message message={m.message} come={m.come}/>)

        let updatingNewMessage = () => {
            let text = newText.current.value;
            props.dispatch(updateNewMessageCreateAction(text))
        } 

        let postNewMessage = () => {
            
            props.dispatch(addMessageActionCreate())
        }

    return (
        <>
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
        <div className={elFormsTextarea.container}>

            <textarea onChange={updatingNewMessage} value={props.newMessageText} placeholder="NEW MESSAGE..." ref={newText}></textarea>
            <button onClick={postNewMessage}>Add message</button>
        </div>
        </>
    )
}

export default Dialogs