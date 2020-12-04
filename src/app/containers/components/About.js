import '../../styles/about.css';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {
    x: "-100vw",
    opacity: 0, 
},
visible: { 
    x: 0,
    opacity: 1, 
    transition: {duration: 0.3, ease: 'easeInOut' }
},
exit: {
    x: "-100vw",
    transition: { ease: 'easeInOut' }
}
};

const About = () => {
    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="about"
        >
            <h1>Apie mane</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam voluptates, doloremque deserunt rem magnam nobis et corrupti pariatur maxime quis architecto est voluptatum quisquam reprehenderit ea delectus ullam nulla praesentium!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, unde.</p>
        </motion.div>
    );
}


export default About;