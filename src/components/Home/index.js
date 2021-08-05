import { AuthContext } from 'context/AuthProvider';
import React, { useContext, useState } from 'react';
import ImageGrid from './ImageGrid';
import Modal from './Modal';
import Title from './Title';
import Upload from './Upload';

const Home = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const { user } = useContext(AuthContext);

    return (
        <div className="App">
            <Title displayName={user.displayName} photoURL={user.photoURL} />
            <Upload />
            <ImageGrid setSelectedImage={setSelectedImage} />
            {selectedImage
                && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
        </div>
    );
}

export default Home;