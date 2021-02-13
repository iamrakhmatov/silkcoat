import About from "./aboutUs/AboutUs";
import Products from "./products/Products";
import Projects from "./projects/Projects";
import Partners from "./partners/Partners";
import Footer from "./footer/Footer";

function Body() {
  return (
    <div className="w-full">
      <About />
      <Products />
      <Projects />
      <Partners />
      <Footer />
    </div>
  );
}

export default Body;
