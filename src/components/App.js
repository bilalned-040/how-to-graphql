import { useState } from 'react';

import {Route, Switch} from "react-router-dom";

import CreateLink from './CreateLink';
import Header from './Header';
import LinkList from './LinkList';
import Login from './Login';
import Search from './Search';

import './../styles/App.css';

function App() {
  const [reload, setReload] = useState(0);
  const forceReload = () => setReload(reload + 1);
  return (
    <div className="center w85">
      <Header reload={forceReload} />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route exact path="/create" component={CreateLink} />
          <Route exact path="/login" render={() => <Login reload={forceReload} />} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
