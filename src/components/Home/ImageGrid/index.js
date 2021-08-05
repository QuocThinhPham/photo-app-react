import { AuthContext } from 'context/AuthProvider';
import { motion } from 'framer-motion';
import useFirestore from 'hooks/useFirestore';
import React, { useContext, useMemo } from 'react';

const ImageGrid = ({ setSelectedImage }) => {
    const { user } = useContext(AuthContext);
    const condition = useMemo(() => {
        return {
            fieldName: 'uid',
            operator: '==',
            compareValue: user.uid
        }
    }, [user.uid]);
    const { docs } = useFirestore('gallery', condition);

    return (
        <div className="image-grid">
            {
                docs.length > 0
                    ? docs.map(doc => (
                        <motion.div
                            className="image-wrap"
                            key={doc.createdAt}
                            onClick={() => setSelectedImage(doc)}
                            whileHover={{ opacity: 1 }}
                            layout
                        >
                            <motion.img src={doc.url} alt={doc.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }} />
                        </motion.div>
                    ))
                    : <p className="notify">🥺🥺Oops! Nothing at all</p>
            }
        </div>
    );
}

export default ImageGrid;