import "./About.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <h1>About</h1>
      <button>
        <Link to="/about/profile">Button</Link>
      </button>
    </>
  );
};
export default About;
