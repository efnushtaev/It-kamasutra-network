import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
import elFormsTextarea from './../../../../Styles/Elements/Forms/textarea.module.scss';
import { reduxForm, Field } from 'redux-form';
import {required, maxLengthCreator} from './../../../../../utils/validations/'
import { Textarea } from '../../../Common/FormsControls';
const maxLength15 = maxLengthCreator(15)
const AddNewPostForm = (props) => {
    const handleSubmit = () => {
        props.handleSubmit();
        props.reset();
    }
    return (
        <form onSubmit={() => handleSubmit()}>
            <Field  component={Textarea}
                    placeholder="New post..."
                    name="newPostBody"
                    validate={[required, maxLength15]}/>
            <button>Add post</button>
        </form>
    )
}
 const AddNewPostReduxForm = reduxForm({form:'postMessage'})(AddNewPostForm)

const MyPosts = React.memo(
    props => {
        let onAddPost = (values) => {
            props.addPost(values.newPostBody);
        }
    
        let postElements = props.posts.map(p => <Post
            message={p.message} 
            likesCount={p.likesCount} 
            profile={props.profile}
            isLiked={p.isLiked}/>)
    
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
    )
    

export default MyPosts;