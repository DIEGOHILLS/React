import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import Login from './Login';
import Tasks from './Tasks';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Initially set to true to show loading screen
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if user has logged in

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser); // Set user if they are authenticated
      } else {
        setUser(null); // Set user to null if no user is authenticated
      }
      setLoading(false); // Stop loading once the auth state is known
    });
    
    return () => unsubscribe(); // Cleanup the auth listener when component unmounts
  }, []);

  // Display loading state while Firebase checks for auth state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show the Login page if the user is not logged in yet
  if (!user || !isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  // Show the Tasks page if the user is logged in
  return <Tasks />;
}

export default App;

