import React, { createContext, useEffect, useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "../UserPool";
import Parse from 'parse/dist/parse.min.js';

const AccountContext = createContext();



const Account = (props) => {
  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = Parse.User.current();
//      const user = Pool.getCurrentUser();
      if (user) {
/*
        user.getSession((err, session) => {
          if (err) {
            reject();
          } else {
            resolve(session);
          }
        });
*/
        resolve();          
      } else {
        reject();
      }
    });
}
useEffect(() => {
  const currentUser = Parse.User.current();
  if (currentUser !== null) {
     setStatus(true);
  } else {
     setStatus(false);
  }
//    getSession().then((session) => {
//      console.log("Session: ", session);
//      setStatus(true);
//    });
  }, []);

  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });

      const authDetails = new AuthenticationDetails({ Username, Password });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log("onSuccess: ", data);
          resolve(data);
        },
        onFailure: (err) => {
          console.error("onFailure: ", err);
          reject(err);
        },
        newPasswordRequired: (data) => {
          console.log("newPasswordRequired: ", data);
          resolve(data);
        },
      });
    });
  };
  const [status, setStatus] = useState(false);

  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
    }
  };

  return (
    <AccountContext.Provider
      value={{ authenticate, getSession, logout, status }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };
