import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Layout from '../components/layout/layout';
import Home from '../pages/home';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;