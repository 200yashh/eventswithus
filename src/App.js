import "./App.css";
import Events from "./Events";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./create";
import Contact from './Contact';
import About from "./About";

function App() {
  return (
    <Router>

    <div className="App">
      <Header />
     
        <Switch>
          <Route exact path ="/"><Home /></Route>
          <Route path ="/events"><Events /></Route>
          <Route path ="/add-events"><Create /></Route>
          <Route path ="/about"><About /></Route>
          <Route path ="/contactus"><Contact /></Route>
        </Switch>
     <Footer/>
    </div>
  </Router>
  );
}

export default App;
