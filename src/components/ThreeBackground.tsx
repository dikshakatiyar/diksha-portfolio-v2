import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 💠 Particle Field — With higher speed and count
const Particles = () => {
  const ref = useRef<THREE.Points>(null);
  const count = 4000;

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 12;
      positions[i3 + 1] = (Math.random() - 0.5) * 12;
      positions[i3 + 2] = (Math.random() - 0.5) * 12;

      // Random purple shades
      colors[i3] = 0.4 + Math.random() * 0.2; // R
      colors[i3 + 1] = 0.2 + Math.random() * 0.1; // G
      colors[i3 + 2] = 0.6 + Math.random() * 0.3; // B
    }

    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        vertexColors
        transparent
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

// 🌍 Globe — Bigger, faster, more filled
const SimpleGlobe = () => {
  const ref = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const count = 4500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const radius = 2.2;

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      const i3 = i * 3;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;


      const intensity = 0.9 + 0.9 * Math.sin(phi); // change
      colors[i3] = 0.9 + intensity * 0.7;
      colors[i3 + 1] = 0.7 + intensity * 0.8;
      colors[i3 + 2] = 1.5 + intensity * 0.5;
    }

    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.025) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        color="0118D8"
        transparent
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

// ⬛ Floating Wireframe Box
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

// 🎨 Main Canvas Wrapper
const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          style={{ background: 'transparent' }}
          dpr={[1, 1.5]}
          performance={{ min: 0.9 }}
        >
          <ambientLight intensity={0.7} />
          <pointLight position={[7, 7, 7]} intensity={1.5} color="#C68EFD" />

          <Particles />
          <SimpleGlobe />

          {/* Multiple Floating Boxes */}
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
