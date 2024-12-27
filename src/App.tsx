import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

import './App.css';
import ComponentEx from './pages/ComponentEx';
import Home from './pages/Home';
import ReactHook from './pages/ReactHook';

function App() {
	return (
		<>
			<Header />
			<div className="body">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/componentEx" element={<ComponentEx />} />
					<Route path="/reactHook" element={<ReactHook />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
