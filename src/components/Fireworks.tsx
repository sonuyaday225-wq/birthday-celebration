import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type FireworksProps = {
  isActive: boolean;
  origin?: [number, number, number];
};

export function Fireworks({ isActive, origin = [0, 10, 0] }: FireworksProps) {
  const particlesRef = useRef<THREE.Points>(null);
  const timeRef = useRef(0);

  const particleCount = 1000;
  
  const { positions, velocities, colors } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Random spherical distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const speed = 2 + Math.random() * 3;
      
      velocities[i3] = Math.sin(phi) * Math.cos(theta) * speed;
      velocities[i3 + 1] = Math.sin(phi) * Math.sin(theta) * speed;
      velocities[i3 + 2] = Math.cos(phi) * speed;
      
      // Random colors
      colors[i3] = Math.random();
      colors[i3 + 1] = Math.random();
      colors[i3 + 2] = Math.random();
      
      // Start at origin
      positions[i3] = origin[0];
      positions[i3 + 1] = origin[1];
      positions[i3 + 2] = origin[2];
    }

    return { positions, velocities, colors };
  }, [origin]);

  useFrame((_, delta) => {
    if (!isActive || !particlesRef.current) return;

    timeRef.current += delta;
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      if (timeRef.current < 3) {
        positions[i3] += velocities[i3] * delta;
        positions[i3 + 1] += velocities[i3 + 1] * delta - 9.8 * delta * timeRef.current;
        positions[i3 + 2] += velocities[i3 + 2] * delta;
      }
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;

    if (timeRef.current > 3) {
      timeRef.current = 0;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] = origin[0];
        positions[i3 + 1] = origin[1];
        positions[i3 + 2] = origin[2];
      }
    }
  });

  if (!isActive) return null;

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} vertexColors transparent opacity={0.8} />
    </points>
  );
}
