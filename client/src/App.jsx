import { useState } from "react";
import { Navbar, Home, Translate, About, Contact, Footer } from "./components";

function App() {
  return (
    <div className="container mx-auto w-full">
      <Navbar />
      <Home />
      <Translate />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
