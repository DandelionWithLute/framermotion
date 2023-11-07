import "./hero.scss";

const Hero = () => {
  return (
    <div className="main">
      <div className="content">
        <div className="name">William Shakespeare</div>
        <div className="desc">Learn Webdev</div>
        <div className="desc">and UI design</div>
      </div>
        
      <div className="hero">
        <img src="hero.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
