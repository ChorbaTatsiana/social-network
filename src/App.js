import React,{ Suspense }  from "react";
import { Route, withRouter } from 'react-router-dom';
import "./style.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
//import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
import News from './components/News/News';
import Musics from './components/Musics/Music';
import Settings from './components/Settings/Settings';
// import Dialogscontainer from "./components/Dialogs/Dialogs-container";


import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/login/login';
import { initializeApp } from './redux/app-reducer';
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/preloader/preloader";
import withSuspense from './hoc/withSuspense';

const Dialogscontainer = React.lazy(() => import('./components/Dialogs/Dialogs-container'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileInfo/ProfileContainer'));

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
            render={withSuspense(Dialogscontainer)} />
          <Route path='/profile/:userId?' 
          render={withSuspense(ProfileContainer)} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Musics />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <LoginPage />} />

        </div>
      </div>
    );
  }

};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
}
)

export default compose(withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
