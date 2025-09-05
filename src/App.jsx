import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen flex flex-col">
        <Header />
        <main className="flex-grow overflow-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
