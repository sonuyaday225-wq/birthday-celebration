export function Table() {
  return (
    <group>
      {/* Table top */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4, 0.1, 4]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Table legs */}
      <mesh position={[-1.8, -0.5, -1.8]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      
      <mesh position={[1.8, -0.5, -1.8]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      
      <mesh position={[-1.8, -0.5, 1.8]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      
      <mesh position={[1.8, -0.5, 1.8]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 16]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
    </group>
  );
}
