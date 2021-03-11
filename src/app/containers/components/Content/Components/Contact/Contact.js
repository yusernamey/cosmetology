import "./contact.css";
import AnimateSlides from "../Animations/PageSlide/SlideAnimation";

export const Contact = () => {
  let text = [
    <h1 key={Math.random()}>Apie mane</h1>,
    <p key={Math.random()}>mano rubai geltoni Lorem ipsum dolor sit amet.</p>,
  ];
  return <AnimateSlides className="contact">{text}</AnimateSlides>;
};
