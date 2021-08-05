import { db } from "firebase/config";
import { useEffect, useState } from "react";

const useFirestore = (collection, condition = null) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        let collectionRef = db.collection(collection).orderBy('createdAt', 'desc');

        /**
         * condition: { fieldName: 'uid', operator: '==', compareValue: 'abcxyz' }
         */

        if (condition) {
            const { fieldName, operator, compareValue } = condition;
            if (!compareValue || compareValue.length <= 0) return;
            collectionRef = collectionRef.where(fieldName, operator, compareValue);
        }

        const unsubscribe = collectionRef.onSnapshot(
            snapshot => {
                const documents = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setDocs(documents);
            },
            error => {
                console.log(error);
            }
        );

        return () => unsubscribe();
    }, [collection, condition]);

    return { docs };
}

export default useFirestore;