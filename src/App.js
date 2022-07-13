import './App.scss'
import '../src/sass/helper.scss'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Postdetail from './pages/Postdetail/Postdetail';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';


function App() {

  return (
    <Provider store={store}>
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path='/post' element={<Postdetail />} />
        </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
