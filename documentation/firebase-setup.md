 # Creating a react app with firebase authentication

 ---
 ## Create a Firebase App
 ### **to get Firebase configuration object from firebase.com:**
 (need for step 5 in visual studio steps below)
  1. create a project
  2. rehister the app (<> icon)
  3. copy the configuration from under `Add Firebase SDK`

---
## Create a React App
### **In visual studio:**
1. Create a react app with firebase authentication 
 `npx create-react-app react-auth-firebase`

 output with helpful commands:
 ```
 To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

Created git commit.

Success! Created react-auth-firebase at C:\P\C229-Code\W11_Firebase\react-auth-firebase
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd react-auth-firebase
  npm start

Happy hacking!
```

2. cd into the `react-auth-folder` and start the appliation 
```
cd react-auth-firebase
  npm start
```
- now have a react app with firebase in browser:
![alt text](image.png)

### Authenticate Users with Firebase Functions
3. install firebase 
`npm i firebase -- save`

4. create a `firebase_setup` folder in `src`

5. create `firebase.js` in this folder and initialize firebase using your Firebase configuration object (Firebase SDK) + import firebase modules 
example:
```
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignout,
} from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyA2xhc_aA8mWuYU34zqEO5AyRztSZpKPZ4",
authDomain: "my-project-1531702898498.firebaseapp.com",
databaseURL: "https://my-project-1531702898498-default-rtdb.firebaseio.com",
projectId: "my-project-1531702898498",
storageBucket: "my-project-1531702898498.appspot.com",
messagingSenderId: "38039037147",
appId: "1:38039037147:web:47d089daa5c016f81298fe",
measurementId: "G-SBPW7H55B0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
```

6. need to create 3 functions to authenticate users: signUp, signIn, signOut (see src/firebase_setup/firebase.js)
   
### Create React Forms 
7. create a react form, `signup.js`
  - will collect email + pass from user 
  - create a new component `Signup.js` (see code in file)
  - will track email + password using state 

8. Create the sign-in form (see `Signin.js`)

9. Create the profile page in `profile.js`
  - users will be redirected to this app upon succesful login/authentication

### Create Authentication Routes
10. need to serve created pages by setting up a `react-router-dom`
  - install it by running:
  `npm i react-router-dom --save`
  - configure it in `index.js` (see file)
  
### Using React Context to track user authentication status
- use React context to track a users authentication status across the app, so you know whether they are logged in or not 
11. add `AuthContext.js` in `src`
  - create and export `AuthContext`

### Create Authentication Context
12. create `AuthProvider.js` to allow components to use `AuthContext`
13. wrap routes in `index.js` with AuthProvider 

## Create Protected Routes
- can protect sensitive routes by checking authentication status of users navigating to a protected page (Profile)
14. modify `Profile.js` to redirect a user if not authenticated

15. run the app with `npm start` from `react-auth-firebase` folder 
  (had to make changes to index.js because was using outdated method)
  - mount path in browser window to `http://localhost:3000/login`
  - page will look like this: ![alt text](image-1.png)

---

### Activate the Authentication on firebase.com
1. `authentication` > `get started` > `sign-in method` > `email/password`
2. toggle `enable` and `save`
3. `add new provider` 
4. click `authentication` in left nav bar then `add user`, then create a new user

### Test the Authentication
5. go back to your app and attempt to log in

** DOESN'T WORK ** - I signed in but was not redirected