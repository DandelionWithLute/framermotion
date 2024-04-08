import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
// import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div>
      {/* <Sidebar /> */}
      <section>
        <Navbar />
        <Hero />
      </section>
      <section>2</section>
      <section>3</section>
      <section>4</section>
      <section>5</section>
      <section>6</section>
    </div>
  );
};

export default App;
