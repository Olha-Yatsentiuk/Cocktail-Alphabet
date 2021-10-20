import React, { useState, useEffect } from "react";
import getFirebase from "./firebaseConfig";


export default function UserState() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const firebase = getFirebase();

    if (firebase) {
      firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          setCurrentUser(authUser.email);
        } else {
          setCurrentUser(null);
        }
      });
    }
  }, [])
}
