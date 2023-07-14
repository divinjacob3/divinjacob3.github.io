import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
import Portfolio from './components/Portfolio';
// import Contact from './Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route exact path="/" component={Home} />
          <Route path="/about" component={About} /> */}
          <Route path="/" Component={Portfolio} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;