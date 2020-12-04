import { motion } from 'framer-motion';
import '../../styles/register.css';
const containerVariants = {
    hidden: {
    x: "-100vw",
    opacity: 0, 
},
visible: { 
    x: 0,
    opacity: 1, 
    transition: {duration: 0.3 }
},
exit: {
    x: "-100vw",
    transition: { ease: 'easeInOut' }
}
};


const Register = () => {
    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="register">
            <h1>Registruokis ir išmegink :)</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, magnam.</p>
        </motion.div>
    );
}


export default Register;