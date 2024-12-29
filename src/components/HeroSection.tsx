import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Welcome to Safe Grades</h2>
        <p>Empowering educators to safely manage virtual machines for grading assignments and downloading student scripts.</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="hero-image-container">
        <img className='hero-image' src="/path/to/your/image.jpg" alt="Safe Grades" />
      </div>
    </section>
  );
}

export default HeroSection;