
import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Particles = () => {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(3500); // Reduced from 3000
    
    for (let i = 0; i < 500; i++) { // Reduced from 1000
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 8;
      positions[i3 + 1] = (Math.random() - 0.5) * 8;
      positions[i3 + 2] = (Math.random() - 0.5) * 8;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.22; //ch
      ref.current.rotation.y = state.clock.elapsedTime * 0.33; //ch
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const SimpleGlobe = () => {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(2000 * 3); // Reduced from 2000
    const colors = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 3.5;
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      const intensity = 0.5 + 0.5 * Math.sin(phi);
      colors[i * 3] = 0.5 + intensity * 0.3;
      colors[i * 3 + 1] = 0.3 + intensity * 0.4;
      colors[i * 3 + 2] = 0.8 + intensity * 0.2;
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const FloatingBox = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial
        color="#6b46c1"
        transparent
        opacity={0.4}
        wireframe
      />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 4], fov: 50 }}
          style={{ background: 'transparent' }}
          dpr={[2, 2.5]} // Limit pixel ratio for better performance
          performance={{ min: 1.5 }} // Performance settings
        >
          <ambientLight intensity={0.9} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#C68EFD" />
          
          <Particles />
          <SimpleGlobe />
          
          <FloatingBox position={[-2, 1, -2]} />
          <FloatingBox position={[2, -1, -2]} />
          <FloatingBox position={[1, 2, -2]} />
          <FloatingBox position={[-3, -1, 1]} />
          <FloatingBox position={[0, 3, -3]} />

        </Canvas>
      </Suspense>
    </div>
  );
};

export default ThreeBackground;
