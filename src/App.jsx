import {
  Navbar,
  Hero,
  About,
  Services,
  Technologies,
  Howto,
  ContactUs,
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
      <ContactUs />
    </>
  );
}

export default App;
