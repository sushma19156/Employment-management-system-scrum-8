import logo from './logo.svg';
import './App.css';
import TableData from './comp/TableData';
import Login from './comp/Login';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className="App bg-primary">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark m-2">
          <a className="navbar-brand text-white p-1 m-1" href="">EMS</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-item nav-link" ><Link to="/register" className='text-white text-decoration-none'> Register</Link></a>
              <a className="nav-item nav-link "><Link to="/login" className='text-white text-decoration-none'> Login</Link></a>
              <a className="nav-item nav-link" ><Link to="/adddetails" className='text-white text-decoration-none'> AddEmployee</Link></a>
              <a className="nav-item nav-link"><Link to="/tabledata" className='text-white text-decoration-none'> Employee Data</Link></a>
            
            </div>
          </div>
        </nav>

        <Route path="/register" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/adddetails" component={Login} />
        <Route path='/tabledata' component={TableData} />
      </div>
    </Router>
  );
}

export default App;
