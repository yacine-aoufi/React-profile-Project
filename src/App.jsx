import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Contact from "./components/contactme/Contact";

function App() {
  return (
    <div className="container">
      <Header />
      {/* <div className="liner"/> */}
      <Hero />
      <div className="liner"/>
      <Main />
      <div className="liner"/>
      <Contact />
    </div>
  );
}

export default App;
