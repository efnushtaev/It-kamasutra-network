import React from 'react';
import Header from './Header'
import { connect } from 'react-redux';
import { setAuthUsersData } from './../../../redux/reducer/auth-reducer';
import { headerAPI } from './../../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount(){
        headerAPI.login().then(response => {
            if(response.resultCode === 0) {
                let {id, email, login} = response.data;
                this.props.setAuthUsersData(id, email, login);
            }
        });
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps=(state)=>({

})

export default connect(mapStateToProps,{setAuthUsersData})(HeaderContainer);