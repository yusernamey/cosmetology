import { motion } from 'framer-motion';
import '../../styles/contact.css';
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


const Contact = () => {
    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="contact">
            <h1>Kur mane rasti?</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam rerum recusandae corporis, possimus ad autem!</p>
        </motion.div>
    );
}


export default Contact;