import styles from "./Landing.module.scss";

import { motion } from "framer-motion";

import { Canvas } from "@react-three/fiber";

import Sphere from "../../three/objects/Sphere";
import Octa from "../../three/objects/Octa";
import Markee from "../../components/markee/Markee";

import avatar from "/assets/avatar.jpeg"

const Landing = () => {
  let height = "";

  if (window.innerWidth < 1024) {
    height = "100vh";
  } else {
    height = "100vh";
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col backdrop-blur-2xl bg-black/25">
      <section className="lg:px-10 relative top-[-3.5rem] w-full flex flex-col lg:flex-row items-center justify-between max-w-[1400px] mx-auto">
        <div className="w-full flex items-center lg:items-start flex-col justify-center gap-4 h-[50vh]">
          <div className="pt-64 lg:pt-0 w-full flex flex-col justify-center items-center lg:items-start">
            <motion.h1
              initial={{ opacity: 0, bottom: -10 }}
              animate={{ opacity: 1, bottom: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="relative text-5xl font-semibold leading-8"
            >
              3D MUSEUM
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, bottom: 10 }}
              animate={{ opacity: 1, bottom: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="relative text-[1.46rem] text-slate-300"
            >
              Enjoy the art or be the artist
            </motion.p>
          </div>
          <button className="px-10 py-4 bg-white text-black font-medium border rounded-full text-sm hover:bg-white/90 active:scale-95 transition">
            Start creating
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full min-h-screen"
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Canvas
            shadows={true}
            style={{ width: `100%`, height: height, position: `relative` }}
          >
            <ambientLight intensity={Math.PI / 6} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              decay={0}
              intensity={Math.PI}
            />
            <pointLight
              position={[-10, -10, -10]}
              decay={0}
              intensity={Math.PI}
            />
            <Octa position={[0, 0, 0]} />
          </Canvas>
        </motion.div>
      </section>
      <div className="bg-transparent relative w-full min-h-[25px]">
        <div className="absolute bottom-0 w-full">
          <Markee baseVelocity={-0.5}>
            3D MUSEUM. CREATE YOUR ART. BE THE ARTIST. BE THE ART.
          </Markee>
        </div>
      </div>
      <section
        className={`relative min-h-screen w-full flex justify-center ${styles.customBg}`}
      >
        <motion.div
          className={`absolute w-full top-0 left-0 ${styles.sectionTwo}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.75 }}
          viewport={{
            margin: "-400px",
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: ["linear"],
          }}
        >
          <Canvas
            shadows={true}
            style={{
              width: `100%`,
              height: `100vh`,
              position: `relative`,
              opacity: `0.15`,
            }}
          >
            <ambientLight intensity={Math.PI / 6} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              decay={0}
              intensity={Math.PI}
            />
            <pointLight
              position={[-10, -10, -10]}
              decay={0}
              intensity={Math.PI}
            />
            <Sphere position={[0, 0, 0]} />
          </Canvas>
        </motion.div>
        <div className="z-10 px-8 py-20 w-full flex flex-col items-center gap-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{
              margin: "-200px",
            }}
            transition={{
              duration: 0.8,
              delay: 0,
              ease: ["linear"],
            }}
            className="w-full flex flex-col items-center gap-3"
          >
            <h1 className="text-black text-center text-4xl font-semibold">
              ABOUT 3D ART
            </h1>
            <p className="text-black text-center max-w-[500px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              corporis perferendis adipisci odit perspiciatis enim optio facilis
              pariatur saepe
            </p>
          </motion.div>
          <div className="w-full h-full max-w-[900px] bg-black rounded-lg flex items-center justify-center text-9xl">
            nada ainda :(
          </div>
        </div>
      </section>
      <section className="w-full min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold">Creator</h1>
        <div className="flex flex-col items-center justify-center">
          <div className="mask mask-circle w-32">
            <img src={avatar ? avatar : "https://avatars.githubusercontent.com/u/79847872?v=4"} />
          </div>
          <div className="w-full flex-col items-center justify-center text-center">
            <p className="leading-none">Henrique Lima</p>
            <a
              href="https://github.com/henriqlimac"
              target="_blank"
              className="text-sm text-slate-300 link-hover"
            >
              @henriqlimac
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
