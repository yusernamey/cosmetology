import "./home.css";
import AnimateSlides from "../Animations";

export const Home = () => {
  let text = [
    <h1>Karolina Kostinaitė</h1>,
    <p>Profesionali Grožio Procedūrų Specialistė</p>,
  ];
  return <AnimateSlides className="home" output={text} />;
};
