
import React from "react"
import {BrowserRouter as Router,Route} from "react-router-dom"
import Join from "./Components/Join"
import Chat from "./Components/Chat"
import SignUp from "./Components/signup"


function App() {
  return (
    <div className="App">
     <Router>
<Route path="/" exact component={Join}/>
<Route path="/chat" exact component={Chat}/>
<Route path="/signup" exact component={SignUp}/>
     </Router>
    </div>
  );
}

export default App;
