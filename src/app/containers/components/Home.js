import '../../styles/home.css';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {
    x: "-100vw",
    opacity: 0, 
},
visible: { 
    x: 0,
    opacity: 1, 
    transition: {duration: 0.5 }
},
exit: {
    x: "-100vw",
    transition: { ease: 'easeInOut' }
}
};

const Home = () => {
    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="landing">
            <h1>Karolina Kostinaitė</h1>
            <p>Profesionali Grožio Procedūrų Specialistė</p>
        </motion.div>
    );
}

export default Home;