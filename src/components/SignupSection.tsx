import '../styles/StorySection.css';
import { NavLink } from 'react-router';

const SignupSection = () => {
  return (
    <section className="signup-section">
      <h2>Join Safe Grades</h2>
      <p>Sign up today to start using Safe Grades for a secure and efficient grading experience. Download your students' programming scripts and grade assignments with ease!</p>
      <NavLink to="/login">
        <button className="signup-button">Sign up!</button>
      </NavLink>
    </section>
  );
}

export default SignupSection;