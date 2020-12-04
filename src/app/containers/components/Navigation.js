import '../../styles/navigation.css';
import { motion } from 'framer-motion';
import {  NavLink } from "react-router-dom";

const activeStyle = {
  borderBottom: 'solid 1px #f8e112', 
  paddingBottom: '0.4em'
}

const containerVariants = {
  hidden: { 
    opacity: 0, 
  },
  visible: { 
    opacity: 1, 
    transition: { delay: 1.5, duration: 1.5 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
};

const Navigation = () => {
    return (
            <nav>
                <ul>
                    <NavLink activeStyle={activeStyle} to="/" exact>
                      <motion.li
                      whileHover={{ scale: 1.2,  color: '#f8e112' }}
                      transition={{ type: 'spring', stiffness: 200 }}>
                        <motion.a whileHover={{color: '#f8e112'}} href=''>Pradzia</motion.a>
                        </motion.li>
                    </NavLink>
                    <NavLink activeStyle={activeStyle} to="/about">
                      <motion.li
                      whileHover={{ scale: 1.2,  color: '#f8e112' }}
                      transition={{ type: 'spring', stiffness: 200 }}>
                        <motion.a whileHover={{color: '#f8e112'}} href=''>Apie mane</motion.a>
                        </motion.li>
                    </NavLink>
                    <NavLink activeStyle={activeStyle} to="/services">
                      <motion.li
                      whileHover={{ scale: 1.2,  color: '#f8e112' }}
                      transition={{ type: 'spring', stiffness: 200 }}>
                        <motion.a whileHover={{color: '#f8e112'}} href=''>Paslaugos</motion.a>
                        </motion.li>
                    </NavLink>
                    <NavLink activeStyle={activeStyle} to="/register">
                      <motion.li
                      whileHover={{ scale: 1.2,  color: '#f8e112' }}
                      transition={{ type: 'spring', stiffness: 200 }}>
                        <motion.a whileHover={{color: '#f8e112'}} href=''>Registruotis</motion.a>
                        </motion.li>
                    </NavLink>
                    <NavLink activeStyle={activeStyle} to="/contact">
                      <motion.li
                      whileHover={{ scale: 1.2,  color: '#f8e112' }}
                      transition={{ type: 'spring', stiffness: 200 }}>
                        <motion.a whileHover={{color: '#f8e112'}} href=''>Kontaktai</motion.a>
                        </motion.li>
                    </NavLink>
                </ul>
            </nav>
    );
}

export default Navigation;