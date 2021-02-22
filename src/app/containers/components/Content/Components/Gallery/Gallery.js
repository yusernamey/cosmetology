import "./gallery.css";
import AnimateSlides from "../Animations";

export const Gallery = () => {
  let text = [
    <h1>Apie mane</h1>,
    <p>mano rubai geltoni Lorem ipsum dolor sit amet.</p>,
  ];
  return <AnimateSlides className="gallery" output={text} />;
};
