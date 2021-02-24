import "./home.css";
import HomeAnimation from "../Animations/Home/HomeAnimation";

export const Home = () => {
  let text = [
    <h1>Karolina Kostinaitė</h1>,
    <p>Profesionali Grožio Procedūrų Specialistė</p>,
  ];
  return <HomeAnimation className="home" output={text} />;
};
