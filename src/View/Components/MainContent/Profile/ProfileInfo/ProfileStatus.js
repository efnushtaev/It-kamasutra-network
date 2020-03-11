import React from 'react';
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode(){
        this.setState({editMode:true})
    }
    deactivateEditMode(){
        debugger
        this.setState({editMode:false});
        this.props.updateStatus(this.state.status);
        console.log('deactivate edit mode')
    }
    onUpdateStatus = (e) => {
        
        this.setState({status:e.currentTarget.value})
        console.log(this.state.status)
    }
    render(){
        return (
            <div>
                {!this.state.editMode
                ? <div>
                    <span onClick={()=> this.activateEditMode()}>{this.props.status === '' ? '-----' : this.props.status}</span>
                </div>
                : <div><input onChange={this.onUpdateStatus} autoFocus={true} onBlur={()=>{this.deactivateEditMode()}}value={this.status} /></div>
                }
            </div>
        )
    }
}

export default ProfileStatus;