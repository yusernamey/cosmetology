import "./home.css";
import HomeAnimation from "../Animations/Home/HomeAnimation";

export const Home = () => {
  let text = [
    <h1 key={Math.random()}>Karolina Kostinaitė</h1>,
    <p key={Math.random()}>Profesionali Grožio Procedūrų Specialistė</p>,
  ];
  return <HomeAnimation className="home">{text}</HomeAnimation>;
};
