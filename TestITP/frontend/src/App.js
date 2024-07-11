import './App.css';
import CounterClass from './Components/CounterClass';
import Header from './Components/Header';
import AddStudent from './Components/AddStudent';
import AllStudents from './Components/AllStudents';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>

          <Route path="/all" exact element={<AllStudents />} />
          <Route path="/add" element={<AddStudent />} />
          
        </Routes>
      </div>
    </Router>
  );
}

//

export default App;
