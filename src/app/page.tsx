// components
import { Navbar, Footer, SearchBar } from "../components";

// sections
import Hero from  "./hero";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <SearchBar/>
      <Hero />
      <Footer />
    </>
  );
}
