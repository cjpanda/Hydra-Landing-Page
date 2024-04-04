import { Navbar, Hero, About, Services } from "./components/index";

function App() {
  return (
    <>
      <section>
        <Navbar />
        <Hero />
      </section>

      <About />
      <Services />
    </>
  );
}

export default App;
