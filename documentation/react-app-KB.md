# TEArticlePortal
This is a temp private repository until I get admin, as I cannot run scripts on my vm. 

## Creating a Firebase-compatible React App
**Note**:
`TEIArticlePortal` = root directory
`client` = front-end directory, contains react app 

**1. Install create-react-app package globally:**
- [ ] `npm install -g create-react-app`

**2. Create a react app**
 - [ ] `create-react-app client` 
   - Specify the folder name in which you want to create your react app (front-end). "client" is common convention. 

**3. Install Firebase Package from *root* folder**
 - [ ]  `npm install firebase` 

**4. Add your react app to a Firebase project**
- [ ] this is done on the firebase website (see slides - get Max to set up an account)

**5. Initialize Firebase in your React App**
- [ ] Create new folder in src directory: `firebase_setup`
- [ ] Create a new file within that folder: `firebase.js`
- [ ] Paste the code generated earlier into this file (firebase SDK configuration from firebase.com, below is an example of how this code looks from a test configuration:) **do this**

```javascript
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
const analytics = getAnalytics(app);
```

- [ ] Store the configuration object `firebaseConfig` inside .env file for now **THIS IS NOT SECURE ENOUGH**

**6. Test the connection to firebase**
Test by submitting dummy data 
- [ ] 1. create a `handles` folder in client > src directory
- [ ] 2. create a `handlesubmit.js` file inside this folder 
- [ ] 3. create a submit handler:
```javascript
import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
 
const handleSubmit = (testdata) => {
    const ref = collection(firestore, "test_data") // Firebase creates this automatically
 
    let data = {
        testData: testdata
    }
    
    try {
        addDoc(ref, data)
    } catch(err) {
        console.log(err)
    }
}
 
export default handleSubmit
```
- [ ] 4. Add the code to import the submit handler into your react app in App.js:
  ```javascript
  import './App.css';
  import handleSubmit from './handles/handlesubmit';
  import { useRef } from 'react';
  
  function App() {
      const dataRef = useRef()

      const submithandler = (e) => {    
         e.preventDefault()  
         handleSubmit(dataRef.current.value)   
         dataRef.current.value = ""  
         }
         
         return (
            <div className="App"     
               <form onSubmit={submithandler}>        
                 <input type= "text" ref={dataRef} />
                 <button type = "submit">Save</button>
               </form>   
            </div>
         );
      }
      
      export default App;
  ```
  - [ ] 4. Run the react app `npm start` from client folder, and try submitting data via the form. Check the direbase database console for information. 

## To-do:
- [ ] ask about secure way to store .env variables 