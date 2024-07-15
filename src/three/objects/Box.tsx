import * as THREE from "three";
import { useRef, useEffect } from "react";
import { ThreeElements, useLoader } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useMotionValue, useSpring } from "framer-motion";

import platinum from "/assets/platinum.png";
import blursilver from "/assets/blursilver.jpg";
import silver from "/assets/silver.jpg";

const Box = (props: ThreeElements["mesh"]) => {
  const mesh = useRef<THREE.Mesh>(null);

  const [map] = useLoader(THREE.TextureLoader, [blursilver]);

  const options = {
    damping: 20,
  };

  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  };

  const manageMouseMove = (e: any) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => window.removeEventListener("mouse", manageMouseMove);
  }, []);

  return (
    <motion.mesh
      {...props}
      ref={mesh}
      rotation-x={window.innerWidth < 1024 ? 0.5 : mouse.y}
      rotation-y={0.8}
      rotation-z={0}
      animate={{ transition: { duration: 4 } }}
    >
      <RoundedBox args={[2, 2, 2]} radius={0.2}>
        <meshMatcapMaterial attach="material" matcap={map} color={"white"} />
      </RoundedBox>
    </motion.mesh>
  );
};

export default Box;
