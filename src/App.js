import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import Mail from './components/Mail'
import MailBody from './components/MailBody'
import Inbox from './components/Inbox'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Login' component={Login} />
      <Route path='/Mail' component={Mail} />
      <Route path='/Inbox' component={Inbox} />
      <Route path='/MailBody' component={MailBody} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
