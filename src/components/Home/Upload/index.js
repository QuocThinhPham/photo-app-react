import React, { useState } from 'react';
import ProgessBar from './ProgressBar';

const Upload = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const acceptTypes = ['image/png', 'image/jpeg'];

    const handleChanged = (e) => {
        let selected = e.target.files[0];
        if (selected && acceptTypes.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg).');
        }
    }

    return (
        <form className="upload">
            <label>
                <input type="file" onChange={handleChanged} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <p className="error">{error}</p>}
                {file && <ProgessBar file={file} setFile={setFile} />}
            </div>
        </form>
    );
}

export default Upload;