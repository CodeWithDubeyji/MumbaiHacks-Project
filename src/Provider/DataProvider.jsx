// DataContext.js
import React, { createContext, useState, useEffect } from 'react';
import { database } from '../firebase/firebase'; // Adjust the import based on your project structure
import { ref, onValue } from 'firebase/database';

// Create the Context
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [desks, setDesks] = useState(null);
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    // Reference to each part of the data in your Firebase database
    const profilesRef = ref(database, 'profile');
    const desksRef = ref(database, 'desks');
    const tasksRef = ref(database, 'tasks');

    // Listen to changes in the "profiles" data
    onValue(profilesRef, (snapshot) => {
      setProfile(snapshot.val());
    });

    // Listen to changes in the "desks" data
    onValue(desksRef, (snapshot) => {
      setDesks(snapshot.val());
    });

    // Listen to changes in the "tasks" data
    onValue(tasksRef, (snapshot) => {
      setTasks(snapshot.val());
    });
  }, []);

  return (
    <DataContext.Provider value={{ profile, desks, tasks }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
