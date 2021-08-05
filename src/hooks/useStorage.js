import { storage } from 'firebase/config';
import { addDocument } from 'firebase/services';
import { useEffect, useState } from 'react';

const useStorage = (file, uid) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = storage.ref(`${uid}/${file.name}`);

        storageRef.put(file).on('state_changed',
            snapshot => {
                let percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(percent);
            },
            error => {
                setError(error);
            },
            async () => {
                const url = await storageRef.getDownloadURL();
                addDocument('gallery', { url, uid });
                setUrl(url);
            }
        );
    }, [file, uid]);

    return { progress, error, url };
}

export default useStorage;