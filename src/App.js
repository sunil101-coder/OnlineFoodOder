import React from 'react'
import './css/App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Switch ,Route} from 'react-router-dom'
import Main from './page/index'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route  exact path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
