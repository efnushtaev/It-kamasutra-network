import React, { Suspense } from 'react';
import HeaderContainer from './View/Components/Header/HeaderContainer';
import Sidebar from './View/Components/Sidebar/Sidebar';
import Login from './View/Components/MainContent/Login/Login';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { initializeApp } from './redux/reducer/app-reducer';
import './View/Styles/fonts.css';
import './App.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './View/Components/Common/Preloader';

const DialogsContainer = React.lazy( () => import('./View/Components/MainContent/Dialogs/DialogsContainer') )
const ProfileContainer = React.lazy( () => import('./View/Components/MainContent/Profile/ProfileContainer') )
const UsersContainer = React.lazy( () => import('./View/Components/MainContent/Users/UsersContainer') )

class App extends React.Component {
  catchAllErrors = (promiseRejectionEvent) => {
    alert('some error occured');
    console.error(promiseRejectionEvent)
  }
  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.catchAllErrors)
  }
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllErrors)

  }

render() {
    return  <div className="app-wrapper">
              <HeaderContainer />
              <Sidebar />
              <React.Suspense fallback={<Preloader/>}>
              {this.props.initialized 
                ? <div className="app-wrapper-content">
                    <Switch>
                      <Route path="/dialogs" render={() => <DialogsContainer />} />
                      <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                      <Route path="/users" render={() => <UsersContainer />} />
                      <Route path="/login" render={() => <Login />} />
                      <Redirect from="/" to="/profile" />
                      <Route path="*" render={() => <h1>404</h1>} />
                    </Switch>
                  </div>
                : <Preloader/>
              }
      </React.Suspense>
            </div>
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default  compose(
  connect(mapStateToProps,{initializeApp}),
  withRouter
                )(App);
