import "./app.scss";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <Cursor />
      <Sidebar />
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
