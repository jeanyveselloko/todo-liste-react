import { useState, useEffect } from 'react';
import { firestore } from '../firebase/firebase';

export const useFirestore = (collectionName) => {
  const [data, setData] = useState(null);
  const collectionRef = firestore.collection(collectionName);

  useEffect(() => {
    const unsubscribe = collectionRef.onSnapshot(snapshot => {
      const items = [];
      snapshot.forEach(doc => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setData(items);
    });

    return () => unsubscribe();
  }, [collectionRef, collectionName]);

  const addDocument = async (document) => {
    await collectionRef.add(document);
  };

  return { data, addDocument };
};

// export default useFirestore;