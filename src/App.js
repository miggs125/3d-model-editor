import React, { Suspense, useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stage } from '@react-three/drei';
import Mclaren from './components/models/McClaren/Mclaren-Senna';
import CameraControls from './components/CameraControls';
import { RgbColorPicker } from "react-colorful";
import ModelContext from './components/ModelContext/ModelContext';


const App = () => {
	const [state, setState] = useState({
		colors: {},
		selected: ''
	});

	const setModelContext = useCallback(
		(newState) => void setState({...state, ...newState }),
		[state, setState]);
	

	const handleColorChange = (color) => {
		setState({...state, currColor: color})
		if (state.selected) {
			state.selected.color = {r:color.r/255,g:color.g/255,b:color.b/255}
		}
	}
	
	return (
		<>
		<div id='color-picker' >
			<RgbColorPicker color={state.currColor} onChange={handleColorChange} />
			<h2>{state.selected.name}</h2>
		</div >
			
			<Canvas id='canvas' gl={{ preserveDrawingBuffer: true }} shadows dpr={[1, 1.5]} camera={{ position: [0, 0, 150], fov: 50 }}>
				<CameraControls />
				<directionalLight intensity={0.1} />
				<Suspense fallback={null} >
					<Stage>
						<ModelContext.Provider value={{setModelContext, ...state}}>
							<Mclaren />
						</ModelContext.Provider>
					</Stage>
				</Suspense>
			</Canvas>
			</>
	);
}


export default App;