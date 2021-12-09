import './App.css';
import Header from './Components/Header';
import Chat from './Components/Chat';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="app__body">
          <Sidebar/>
          <Routes>
            <Route path='/room/:roomid' element={ <Chat/> }/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
