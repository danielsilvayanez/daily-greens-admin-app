import React, { useEffect, useState } from "react";
import firebaseApp from "../../Firebase/index";

function useAuth() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebaseApp.onAuthStateChanged((user) => {
      console.log("da user", user);
      setAuthUser(user ? user : null);
    });

    return () => unsubscribe();
  }, []);

  return authUser;
}

export default useAuth;
