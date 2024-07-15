import { LuLogIn } from "react-icons/lu";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className="z-10 sticky inset-0 w-full h-14 border-b  flex items-center border-black/75 backdrop-blur-lg bg-black/75 text-white">
      <div className="max-w-7xl w-full mx-auto px-4 flex items-center justify-between">
        <nav>
          <ul className="flex gap-6">
            <li className={`${styles.navItem}`}>Start</li>
            <li className={`${styles.navItem}`}>About</li>
            <li className={`${styles.navItem}`}>Collaborators</li>
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <button className={`${styles.customBtn} flex items-center gap-2`}>
            <p className="inline-block">
              <LuLogIn />
            </p>
            <p className="hidden md:inline-block">Log in</p>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
