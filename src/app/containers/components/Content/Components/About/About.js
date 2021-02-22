import "./about.css";
import AnimateSlides from "../Animations";

export const About = () => {
  let text = [
    <h1>Apie mane</h1>,
    <p>mano rubai geltoni Lorem ipsum dolor sit amet.</p>,
  ];
  return <AnimateSlides className="about" output={text} />;
};
