import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './components/Home'
import Services from './components/Services'
import Login from './components/Login'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Login' component={Login} />
      <Route path='/Service' component={Services} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
