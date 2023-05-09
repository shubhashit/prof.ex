import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from './components/Landingpage';
import CompanyIntershipPage from './components/CompanyIntershipPage';
import Test from './components/Test';
import Test2 from './components/Test2';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage></LandingPage>} />
          <Route exact path="/internship/companyname" element={<CompanyIntershipPage></CompanyIntershipPage>} />
          <Route exact path="/internship/companyname/test" element={<Test></Test>} />
          <Route exact path="/internship/companyname/test2" element={<Test2></Test2>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
