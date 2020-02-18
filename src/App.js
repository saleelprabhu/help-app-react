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

/* 
Function to display front page
- Displaying Search Page by default
- Shows header block with John Deere Logo
- Using Redux Store to handle data between search and detail components
- Using Routing to navigate to search and detail components
*/

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav className="navbar navbar-light bg-light">
              <Link className="navbar-brand w-10" to="/">
                  <img src={logo} alt="logo" width="100" height="40" className="d-inline-block align-top"/>
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