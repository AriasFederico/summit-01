import './App.css';
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Provider } from './provider/Provider';

function App() {
	return (
		<BrowserRouter>
			<Provider>
				<Routes>
					<Route index path='/' element={<Home />} />
				</Routes>
			</Provider>
		</BrowserRouter>
	);
}

export default App;
