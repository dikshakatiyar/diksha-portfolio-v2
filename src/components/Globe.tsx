
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Globe = () => {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(2800 * 3); // Reduced complexity ///changes
    const colors = new Float32Array(2800 * 3);
    
    for (let i = 0; i < 2800; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 3.8;   //changes
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      const intensity = 1.2 + 0.8 * Math.sin(phi); //changes
      colors[i * 3] = 0.4 + intensity * 0.4;
      colors[i * 3 + 1] = 0.2 + intensity * 0.5;
      colors[i * 3 + 2] = 0.9 + intensity * 0.1;
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.8;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.025}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

export default Globe;
