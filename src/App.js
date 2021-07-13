import {
  lazy,
  useEffect,
} from 'react';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import AccessibleNavigationAnnouncer
  from './components/AccessibleNavigationAnnouncer';

const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const CreateAccount = lazy(() => import('./pages/CreateAccount'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))




function App() {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings =
        { "appId": "149ba7c4d2b4b2f2805bbc926f166d443", "popupWidget": true, "automaticChatOpenOnNavigation": true };
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, [])

 


  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/forgot-password" component={ForgotPassword} />

          {/* Place new routes over this */}
          <Route path="/app" component={Layout} />
          {/* If you have an index page, you can remothis Redirect */}
          <Redirect exact from="/" to="/login" />

        </Switch>
      </Router>
    </>
  )
}

export default App
