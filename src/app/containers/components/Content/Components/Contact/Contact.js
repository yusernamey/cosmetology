import "./contact.css";
import AnimateSlides from "../Animations/PageSlide/SlideAnimation";

export const Contact = () => {
  let text = [
    <h1>Apie mane</h1>,
    <p>mano rubai geltoni Lorem ipsum dolor sit amet.</p>,
  ];
  return <AnimateSlides className="contact" output={text} />;
};
