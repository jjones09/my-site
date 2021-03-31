import { Link, Route, Switch } from 'react-router-dom';

import Contact from './Contact/';
import Projects from './Projects/';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">Jordan Jones.</header>
      <header className='Subheader'>software engineer</header>
      <div className='line-container'>
        <hr />
      </div>
      <div className='link-container'>
        <Link to='/projects' className='link'>projects</Link>
        <Link to='/contact' className='link'>contact</Link>
      </div>
      
        <Switch>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
    </div>
  );
};

export default App;
