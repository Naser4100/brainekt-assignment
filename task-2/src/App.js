import './App.css';
import dotenv from 'dotenv'
import Dashboard from './components/Dashboard/Dashboard';

// configuring .env variable for accessing env vars
dotenv.config();

const App = () => {
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
