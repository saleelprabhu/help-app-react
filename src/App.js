import React from 'react';
// John Deere Logo
import logo from './resources/jd_logo.png'
// Components to navigate
import SearchContent from './components/searchcontent'
import ContentDetail from './components/contentdetail'
// Router components
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// Redux components
import store from './redux/store';
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav className="navbar navbar-light bg-light">
              <Link className="navbar-brand w-10" to="/">
                  
              </Link>
          </nav>
          <Switch>
            <Route path="/details/:id" component={ContentDetail}/>
            <Route path="/" component={SearchContent}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;