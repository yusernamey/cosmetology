import { motion } from 'framer-motion';
import '../../styles/services.css';

const containerVariants = {
    hidden: {
    x: "-100vh",
    opacity: 0, 
},
visible: { 
    x: 0,
    opacity: 1, 
    transition: {duration: 0.3 }
},
exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
}
};


const Services = () => {
    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="services">
            <h1>Kokias paslaugas teikiu?</h1>
            
        </motion.div>
    );
}


export default Services;