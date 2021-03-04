import React from 'react';

import './App.css';
import Slider from './components/Slider';
import background from '../src/images/background.jpg';

function App() {
	return (
		<div
			className='App'
			style={{
				backgroundImage: `url(${background})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				margin: 'auto',
			}}
		>
			<Slider />
		</div>
	);
}

export default App;
