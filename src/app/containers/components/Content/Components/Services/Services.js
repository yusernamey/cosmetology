import "./services.css";
import AnimateSlides from "../Animations/PageSlide/SlideAnimation";
import { Cards } from "../Cards";

export const Services = () => {
  let text = [
    <div>
      <h1>Paslaugos</h1>
      <p>Paslaugos kurias teikiu</p>
      <Cards />
    </div>,
  ];
  return <AnimateSlides className="services" output={text} />;
};
