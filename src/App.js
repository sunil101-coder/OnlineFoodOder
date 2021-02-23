import React from 'react'
import './css/App.css'
import { Switch ,Route} from 'react-router-dom'
import Main from './page/index'
import About from './page/About'
import Orderonline from './ordernow/ordernow'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route  exact path="/" component={Main} />
        <Route  exact path="/about" component={About} />
        <Route  exact path="/order-online" component={Orderonline} />
      </Switch>
    </div>
  );
}

export default App;
