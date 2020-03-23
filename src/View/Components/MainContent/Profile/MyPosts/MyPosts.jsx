import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
import elFormsTextarea from './../../../../Styles/Elements/Forms/textarea.module.scss';
import { reduxForm, Field } from 'redux-form';
import {required, maxLengthCreator} from './../../../../../utils/validations/'
import { Textarea } from '../../../Common/FormsControls';
const maxLength15 = maxLengthCreator(15)
const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field  component={Textarea}
                    placeholder="NEW POST..."
                    name="newPostBody" 
                    validate={[required, maxLength15]}/>
            <button>Add post</button>
        </form>
    )
}
 const AddNewPostReduxForm = reduxForm({form:'postMessage'})(AddNewPostForm)

const MyPosts = (props) => {

    let onAddPost = (values) => {
        props.addPost(values.newPostBody);
    }

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={classes.container}>
            <div className={elFormsTextarea.container}>
                <AddNewPostReduxForm onSubmit={onAddPost}/>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;