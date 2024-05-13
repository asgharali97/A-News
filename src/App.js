import { useState } from 'react';
import './App.css';
import Navbar from './Componets/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import News from './Componets/News';
import LoadingBar from 'react-top-loading-bar';
function App() {
  const [progress, setProgress] = useState(0)
  const apiKey = process.env.REACT_APP_NEWS_API
  return (

    <>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={10} country='in' category="general" />} />
          <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={10} country='in' category="general" />} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={20} country='in' category="entertainment" />} />
          <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={20} country='in' category="business" />} />
          <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={20} country='in' category="health" />} />
          <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={20} country='in' category="science" />} />
          <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={20} country='in' category="sports" />} />
          <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={20} country='in' category="technology" />} />
        </Routes>


      </Router>
    </>
  );
}

export default App;
