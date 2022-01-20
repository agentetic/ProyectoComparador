import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Layout from '../components/layout/layout';
import Home from '../pages/home';
import Result from '../pages/result';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/result' element={<Result />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
