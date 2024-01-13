

import './App.css';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { Home } from './components/layout/Home';
import { Modal } from './components/Modal';
import { SearchPage } from './components/SearchPage';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>

          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/search'>
            <SearchPage />
          </Route>


        </Switch>
        <Route path='/'>
          <Modal />
        </Route>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
