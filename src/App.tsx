import styles from "./App.module.scss";
import Header from "./components/header/Header";

import Landing from "./pages/landing/Landing";

const App = () => {
  return (
    <>
      <div
        className={`relative w-full bg-transparent text-white ${styles.customBg}`}
      >
        <Header />
        <Landing />
      </div>
      <div className="min-h-screen flex items-center justify-center">
        o museu vai ficar aqui, por isso some o header
      </div>
    </>
  );
};

export default App;
