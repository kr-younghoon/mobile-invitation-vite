import styles from './App.module.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlacesAndTimes from './Pages/PlacesAndTimes';
import Reviews from './Pages/Reviews';
import ModalDropdownNav from './Home/Components/NavBar/ModalDropdownNav';

function App() {
    return (
        <Router basename="/">
            <>
                <ModalDropdownNav
                    styles="z-index:9999"
                    className={styles.modal}
                />
                <div className={styles.layout_page}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/places-and-times"
                            element={<PlacesAndTimes />}
                        />
                        <Route path="/reviews" element={<Reviews />} />
                    </Routes>
                </div>
            </>
        </Router>
    );
}

export default App;
