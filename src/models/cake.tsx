import { useRef } from 'react';
import { Mesh } from 'three';

export function Cake() {
  const meshRef = useRef<Mesh>(null);

  return (
    <group>
      {/* Bottom layer */}
      <mesh ref={meshRef} position={[0, 0.25, 0]}>
        <cylinderGeometry args={[1, 1, 0.5, 32]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Middle layer */}
      <mesh position={[0, 0.65, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.3, 32]} />
        <meshStandardMaterial color="#D2691E" />
      </mesh>
      
      {/* Top layer */}
      <mesh position={[0, 0.95, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.2, 32]} />
        <meshStandardMaterial color="#CD853F" />
      </mesh>
      
      {/* Frosting */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[1.02, 1.02, 0.05, 32]} />
        <meshStandardMaterial color="#FFE4E1" />
      </mesh>
      
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.82, 0.82, 0.05, 32]} />
        <meshStandardMaterial color="#FFE4E1" />
      </mesh>
      
      <mesh position={[0, 1.05, 0]}>
        <cylinderGeometry args={[0.62, 0.62, 0.05, 32]} />
        <meshStandardMaterial color="#FFE4E1" />
      </mesh>
    </group>
  );
}
