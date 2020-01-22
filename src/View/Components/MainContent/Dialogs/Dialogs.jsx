import React from 'react';
import classes from './dialogs.module.scss';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import elFormsTextarea from './../../../Styles/Elements/Forms/textarea.module.scss'
import { updateNewMessageCreateAction, addMessageActionCreate } from './../../../../redux/reducer/dialogPage-reducer';

const Dialogs = (props) => {
    debugger;
    let newText = React.createRef()

    
    let updateBodyPost = () => {
        let text = newText.current.value;
        props.updatingBodyMessage(text);
    }
    let addPost = () => {
        props.postNewMessage()
    }

    let dialogElements =
        props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)

    let messageElements =
        props.messagesData.map(m => <Message message={m.message} come={m.come}/>)



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

            <textarea onChange={updateBodyPost} value={props.newMessageText} placeholder="NEW MESSAGE..." ref={newText}></textarea>
            <button onClick={addPost}>Add message</button>
        </div>
        </>
    )
}

export default Dialogs