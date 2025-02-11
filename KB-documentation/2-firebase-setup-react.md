>## 2. Creating a Firebase-compatible React+Vite App
**Note**:
`TEArticlePortal` = **root** directory
`client` = front-end directory, contains react app 


>### Create a React app using Vite 
- [ ] Create a folder on your computer in which you want to store the application code. Open this folder in VSCode (File > Add Folder to Workspace > Select your folder in the file explorer). Right-click on this folder in the VSCode Explorer and select "Open in Integrated Terminal"
![alt text](firebase-setup-react-photos/firebase-setup-react-00.png)

- The terminal will open at the bottom of the app. This is where you will run all your commands (Simply enter the command and hit 'Enter' on your keyboard). Pay attention to the file path to make sure you are running the commands from the right folder.
![alt text](firebase-setup-react-photos/firebase-setup-react-01.png) 

(**Note**:In this example, "TEArticlePortal" is considered the "**root**", and "**frontend**" is the react-app folder containig all client-side/react/frontend code. A "backend" folder will contain all the server-side/backend/database-related code.)

- [ ] Run `npm install -g create-react-app` from the root folder in the terminal to install react gloablly. 
(See example below to get an idea of what it looks like when you run a command. The only errors worth noting will be in red and say "ERROR, command failed", or something similar).
![alt text](firebase-setup-react-photos/firebase-setup-react-02.png)

 - [ ] Run `npm create vite@latest frontend --template react` from the root
   - Specify the folder name in which you want to create your react app. "Client" or "frontend" is common convention. 
 - [ ] When prompted with "Ok to proceed? (y)" type y
![alt text](firebase-setup-react-photos/firebase-setup-react-03.png)
- [ ] When prompted to "Select a framework" use your arrow keys to hightlight "React", and hit Enter
![alt text](firebase-setup-react-photos/firebase-setup-react-04.png)
- [ ] Select a variant: "Javascript + SWC"
![alt text](firebase-setup-react-photos/firebase-setup-react-05.png)
 - [ ] Run `cd frontend` to go into the frontend folder 
 - [ ] Run `npm install` to install necessary React packages 
 - [ ] Run `npm run dev` to launch the React app (**Use this command whenever you want to view your app during development**)
- You should now have a link in the terminal through which you can access your react app. **Ctrl + click** on the link to see it open in your browser. 
![alt text](firebase-setup-react-photos/firebase-setup-react-06.png)
![alt text](firebase-setup-react-photos/firebase-setup-react-07.png)
To terminate the app and be able to enter further commands in the terminal, enter **Ctrl+C** and type **y**, then hit **Enter**
You will now also have a 'frontend' folder containing the basic scaffolding of a react app.
![alt text](firebase-setup-react-photos/firebase-setup-react-08.png)

Below is how you should set up your file structure for a full stack app:
```
/my-project
│── /frontend              # React app (stored separately)
│   │── /public            # Static assets
│   │── /src
│   │   │── /assets        # Images, fonts, etc.
│   │   │── /components    # Reusable UI components
│   │   │── /hooks         # Custom React hooks
│   │   │── /layouts       # Layout components (Navbar, Sidebar, etc.)
│   │   │── /pages         # Page components
│   │   │── /services      # API calls & Firebase integration
│   │   │   │── api.js     # Backend API calls (Axios/Fetch)
│   │   │   │── firebase.js # Firebase authentication & Firestore config
│   │   │── /store         # State management (Redux/Zustand/Context)
│   │   │── /utils         # Utility functions, helpers 
│   │   │── /routes        # React Router configurations
│   │   │── App.js         # Main React component
│   │   │── index.js       # React entry point
│   │── .env               # Frontend environment variables
│   │── package.json       # Frontend dependencies
│
│── /backend               # Node.js / Express backend
│   │── /src
│   │   │── /config        # Environment and DB configs
│   │   │── /controllers   # Business logic for API routes
│   │   │── /db            # PostgreSQL database connection
│   │   │── /middleware    # Auth & validation middlewares
│   │   │── /models        # Database models (Sequelize, Prisma, etc.)
│   │   │── /routes        # API route handlers
│   │   │── server.js      # Backend entry point
│   │── .env               # Backend environment variables
│   │── package.json       # Backend dependencies
│
│── /infra                 # Infrastructure & deployment files (optional)
│   │── Dockerfile         # Docker configuration
│   │── docker-compose.yml # Docker Compose file
│   │── terraform/         # Terraform scripts (if using)
│
│── .gitignore             # Ignore node_modules, .env, etc.
│── README.md              # Project documentation
 ```








>### Installing and Setting Up Firebase in your React App

**3. Install Firebase**
 - [x] Run  `npm install firebase` from the frontend

**5. Initialize Firebase in your React App**
- [x] In `services` folder in `src` directory create: `firebase.js`
- [x] Retrieve the code generated earlier (firebase SDK configuration from firebase.com, below is an example of how this code looks from a test configuration): 

```javascript
// example firebase CDK configuration:
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeHP28Ta8ceyLhnR9owcXmwyWhJo-xTEs",
  authDomain: "fir-test-project-2fe7d.firebaseapp.com",
  projectId: "fir-test-project-2fe7d",
  storageBucket: "fir-test-project-2fe7d.firebasestorage.app",
  messagingSenderId: "876729847802",
  appId: "1:876729847802:web:9ac48fc57534df1bc65e43",
  measurementId: "G-CPBGBNJQYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore
const analytics = getAnalytics(app);

export { app, db }; // Export Firestore instance
```

Paste the modified SDK configuration code below in your `firebase.js` file instead:
```javascript
// Firebase authentication & Firestore configuration

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Import Firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig); // Initialize Firebase
const db = getFirestore(app); // Initiliaze Firestore database

export { db, collection, addDoc };
```

>It is best to store the configuration object values `firebaseConfig` inside an .env file for security reasons. **IS THIS IS SECURE ENOUGH??**
>- [x] Create a `.env` file in your **frontend** folder and add the following, replacing the values with the Ids from the `firebaseConfig` object: 
>```javascript
># Firebase secret keys:
>VITE_API_KEY=your-api-key
>VITE_AUTH_DOMAIN=your-auth-domain
>VITE_PROJECT_ID=your-project-id
>VITE_STORAGE_BUCKET=your-storage-bucket
>VITE_MESSAGING_SENDER_ID=your-messaging-sender-id
>VITE_APP_ID=your-app-id
>VITE_APP_MEASUREMENT_ID=your_measurement_id
>```
>  - [x] make sure you have a .gitignore file in your **root** folder with `.env` listed within


**6. Test the connection to firebase**
Test by submitting dummy data 
- [x] Create a `firebase-test.js` file inside `src > services`
- [x] Create a submit handler:
```javascript
// example submit handler for testing firebase connection
import { db, collection, addDoc } from "./firebase.js"; // import Firestore

const handleSubmit = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "testing"), {
      // creating a collection called "testing", where the dummy data will be stored
      name: "Marta", // dummy data
      email: "Marta@test.com",
      timestamp: new Date(),
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export default handleSubmit;
```

- [x] Add the code to import the submit handler into your react app by replacing the existing code in `App.jsx` with:
```javascript
// Test code to see if firebase connection is working with a submit handler:
import "./App.css";
import handleSubmit from "./services/firebase-test.js";
import { useRef } from "react";

function App() {
  const dataRef = useRef(null);

  const submithandler = (e) => {
    e.preventDefault(); // prevent default form submission
    handleSubmit(dataRef.current.value); // passing a string value
    dataRef.current.value = ""; // clear the input field
  };

  return (
    <div className="App">
      <form onSubmit={submithandler}>
        <input type="text" ref={dataRef} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;
```
  - [ ] Run `npm run dev` from frontend, and try submitting data via the form on your web app. Check the firebase database console for evidence of a connection, under Project Overview > Firestore Database > Data.
  ![alt text](firebase-setup-react-photos/firebase-setup-react-09.png)

**Troubleshooting**: 
- If you recieve a **permissions error**, navigate to Project Overview > Firestore Database > Rules, and create a rule which grants anybody read/write priviledges to the "testing" collection:
![alt text](firebase-setup-react-photos/firebase-setup-react-10.png)
Replacing the existing code with the following:
```js
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /testing/{document=**} {
      allow read, write: if true;
    }
  }
}
```

- Re-run the `npm install` command from the frontend terminal before running `npm run dev` to re-build the app and make sure all required dependencies are installed

## To-do:
- [ ] ask about secure way to store .env variables 