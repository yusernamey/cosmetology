import "./services.css";
import AnimateSlides from "../Animations/PageSlide/SlideAnimation";
import { CardList } from "../Cards";
export const Services = () => {
  let text = [
    <h1 key={Math.random()}>Paslaugos</h1>,
    <CardList key={Math.random()} />,
  ];

  return <AnimateSlides className="services">{text}</AnimateSlides>;
};
