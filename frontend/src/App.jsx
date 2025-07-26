import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import Wiki from './routes/Wiki/Wiki';
import './App.css';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/wiki" element={<Wiki />} />
            </Routes>
        </>
    );
}

export default App;
