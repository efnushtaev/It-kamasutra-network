import React from 'react';
import Header from './Header'
import { connect } from 'react-redux';
import { setAuthUsersDataThunk } from './../../../redux/reducer/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount(){
        this.props.setAuthUsersDataThunk()
        // headerAPI.login().then(response => {
        //     if(response.resultCode === 0) {
        //         let {id, email, login} = response.data;
        //         this.props.setAuthUsersData(id, email, login);
        //     }
        // });
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps=(state)=>({

})

export default connect(mapStateToProps,{setAuthUsersDataThunk})(HeaderContainer);