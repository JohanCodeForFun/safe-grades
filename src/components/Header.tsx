import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Safe Grades</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#story">Our Story</a></li>
          <li><a href="#signup">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;