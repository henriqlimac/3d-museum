import * as THREE from "three";
import { useRef, useEffect } from "react";
import { ThreeElements, useFrame, useLoader } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useMotionValue, useSpring } from "framer-motion";

import platinum from "/assets/platinum.png";

const Sphere = (props: ThreeElements["mesh"]) => {
  const mesh = useRef<THREE.Mesh>(null);

  const options = {
    damping: 20,
  };

  useFrame((state, delta) => (mesh.current.rotation.x += 0.0004))
  useFrame((state, delta) => (mesh.current.rotation.y += 0.0035))

  return (
    <motion.mesh
      {...props}
      ref={mesh}
    >
      <sphereGeometry args={[4.4]} />
      <meshStandardMaterial wireframe color={"black"}/>
    </motion.mesh>
  );
};

export default Sphere;
