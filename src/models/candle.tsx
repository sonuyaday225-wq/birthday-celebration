import { useRef } from 'react';
import { PointLight } from 'three';

type CandleProps = {
  isLit: boolean;
  scale?: number;
  position?: [number, number, number];
};

export function Candle({ isLit, scale = 1, position = [0, 0, 0] }: CandleProps) {
  const lightRef = useRef<PointLight>(null);

  return (
    <group position={position} scale={scale}>
      {/* Candle body */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
        <meshStandardMaterial color="#FF6B6B" />
      </mesh>
      
      {/* Wick */}
      <mesh position={[0, 1.05, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.2, 8]} />
        <meshStandardMaterial color="#2C3E50" />
      </mesh>
      
      {/* Flame */}
      {isLit && (
        <>
          <mesh position={[0, 1.25, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color="#FFA500" />
          </mesh>
          <pointLight
            ref={lightRef}
            position={[0, 1.25, 0]}
            intensity={2}
            distance={5}
            color="#FFA500"
          />
        </>
      )}
    </group>
  );
}
