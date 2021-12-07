import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stage } from '@react-three/drei';
import Mclaren from './components/models/McClaren/Mclaren-Senna';
import CameraControls from './components/CameraControls'

function App() {
  return (
   <Canvas gl={{ preserveDrawingBuffer: true }} shadows dpr={[1, 1.5]} camera={{ position: [0, 0, 150], fov: 50 }}>
     <CameraControls />
     {/* <ambientLight intensity={0.5} /> */}
     <directionalLight intensity={0.1} />

     <Suspense fallback={null} >
       <Stage>
       <Mclaren />
       </Stage>
     </Suspense>
   </Canvas>
  );
}

export default App;
