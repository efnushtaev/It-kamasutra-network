import React from 'react';
import classes from './dialogs.module.scss';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import elFormsTextarea from './../../../Styles/Elements/Forms/textarea.module.scss'

const Dialogs = (props) => {

    let dialogElements =
        props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)

    let messageElements =
        props.state.messagesData.map(m => <Message message={m.message} come={m.come}/>)

    let newMessage = React.createRef()

    let addMessage = () => {
        let message = newMessage.current.value
        alert(message)
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

            <textarea placeholder="NEW MESSAGE..." ref={newMessage}></textarea>
            <button onClick={addMessage}>Add message</button>
        </div>
        </>
    )
}

export default Dialogs