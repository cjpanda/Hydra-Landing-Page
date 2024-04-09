import {
  Navbar,
  Hero,
  About,
  Services,
  Technologies,
  Howto,
  ContactUs,
  Footer,
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
      <Footer />
    </>
  );
}

export default App;
