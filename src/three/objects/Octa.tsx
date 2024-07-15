import * as THREE from "three";
import { useRef } from "react";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";

const Octa = (props: ThreeElements["mesh"]) => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => (mesh.current.rotation.x += 0.0004));
  useFrame((state, delta) => (mesh.current.rotation.y += 0.0035));

  return (
    <motion.mesh
      {...props}
      ref={mesh}
      animate={{ transition: { duration: 4 } }}
    >
      <octahedronGeometry args={[2, 3]} />
      <meshStandardMaterial wireframe />
    </motion.mesh>
  );
};

export default Octa;
