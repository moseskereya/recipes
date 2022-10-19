import './App.css';
import Fodie from './components/Foodie';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
    return (
        <Router>
            <>
                <div className="App">
                    <Nav />
                    <Routes>
                        <Route exact path="/" element={<Fodie/>} />
                    </Routes>
                </div>
            </>
        </Router>
  );
}

export default App;
