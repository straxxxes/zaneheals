import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
// importing the pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
	return (
		<div className='App'>
			<Router>
				<Nav></Nav>
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
				<Footer></Footer>
			</Router>
		</div>
	);
}

export default App;
