import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { useEffect, useState } from 'react';

function useAuthListener() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log('User is logged in:', currentUser);
        setUser(currentUser);
      } else {
        console.log('No user is logged in');
        setUser(null);
      }
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);

  return user;
}

export default useAuthListener;
