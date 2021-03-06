import "./services.css";
import AnimateSlides from "../Animations/PageSlide/SlideAnimation";

export const Services = () => {
  let text = [
    <div>
      <h1>Paslaugos</h1>
      <p>Paslaugos kurias teikiu</p>
    </div>,
  ];
  return <AnimateSlides className="about">{text}</AnimateSlides>;
};
