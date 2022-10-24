import './App.css';
import Movie from './components/Movie';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
    return (
        <Router>
            <>
                <div className="App">
                    <Nav />
                    <Routes>
                        <Route exact path="/" element={<Movie/>} />
                    </Routes>
                </div>
            </>
        </Router>
  );
}

export default App;
