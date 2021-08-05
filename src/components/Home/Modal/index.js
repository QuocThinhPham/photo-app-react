import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImage, setSelectedImage }) => {
    const handleClicked = () => {
        setSelectedImage(null);
    }

    return (
        <motion.div className="backdrop" onClick={handleClicked}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <motion.img src={selectedImage.url} alt={selectedImage.id}
                initial={{ x: '100vw' }}
                animate={{ x: '0' }} />
        </motion.div>
    );
}

export default Modal;