import React from 'react';
import HeaderContainer from './View/Components/Header/HeaderContainer';
import Sidebar from './View/Components/Sidebar/Sidebar';
import ProfileContainer from './View/Components/MainContent/Profile/ProfileContainer';
import DialogsContainer from './View/Components/MainContent/Dialogs/DialogsContainer';
import Login from './View/Components/MainContent/Login/Login';
import UsersContainer from './View/Components/MainContent/Users/UsersContainer';
import { Route, withRouter } from 'react-router-dom';
import { initializeApp } from './redux/reducer/app-reducer';
import './View/Styles/fonts.css';
import 'logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './View/Components/Common/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

render() {
  if(!this.props.initialized) {
    return <Preloader/>
  }
    return  <div className="app-wrapper">
              <HeaderContainer />
              <Sidebar />
              <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                <Route path="/users" render={() => <UsersContainer />} />
                <Route path="/login" render={() => <Login />} />
              </div>
            </div>
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default  compose(
                  withRouter,
                  connect(mapStateToProps,{initializeApp})
                )(App);
