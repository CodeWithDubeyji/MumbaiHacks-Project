import React, { useEffect, useState } from 'react';
import { auth, database } from '../firebase/firebase';
import { ref, query, orderByChild, equalTo, get } from 'firebase/database';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const user = auth.currentUser;
  
      if (user) {
        const userEmail = user.email;
        const profileRef = ref(database, 'profiles');
        
        const userQuery = query(profileRef, orderByChild('email'), equalTo(userEmail));
  
        try {
          const snapshot = await get(userQuery);
  
          if (snapshot.exists()) {
            const data = snapshot.val();
            const profileData = Object.values(data)[0];  // Get the first item
            setUserProfile(profileData);
          } else {
            console.log('No profile found for this email.');
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      } else {
        console.log('User not authenticated.');
      }
  
      setLoading(false);
    };
  
    fetchUserProfile();
  }, []);
  

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>User Profile</h1>
      {userProfile ? (
        <div>
          <p>Name: {userProfile.username}</p>
          <p>Email: {userProfile.email}</p>
          <p>Department: {userProfile.department}</p>
          <p>designation: {userProfile.designation}</p>
          {/* Render other fields as needed */}
        </div>
      ) : (
        <p>No profile information available.</p>
      )}
    </div>
  );
};

export default UserProfile;
