import './App.css';
import axios from 'axios'
import Cards from './components/cards';

axios.defaults.baseURL = 'https://deploy-production-a99f.up.railway.app/'

function App() {
  return (
    <div >
      <Cards />
    </div>
  );
}

export default App;
