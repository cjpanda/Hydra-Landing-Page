import {
  Navbar,
  Hero,
  About,
  Services,
  Technologies,
  Howto,
} from "./components/index";

function App() {
  return (
    <>
      <section>
        <Navbar />
        <Hero />
      </section>

      <About />
      <Services />
      <Technologies />
      <Howto />
    </>
  );
}

export default App;
