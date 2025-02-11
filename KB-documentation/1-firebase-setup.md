# Creating a Firebase-Integrated React Web App 

>## 1. Setting up a Firebase Account, Application, and Database
### Create a Firebase Account and Application
1. Go to [https://firebase.google.com/](https://firebase.google.com/) and select "Sign in"
![alt text](firebase-setup-photos/firebase-setup-00.png)
2. Sign in with an existing account or select "Create Account" and choose the account type needed. 
![alt text](firebase-setup-photos/firebase-setup-01.png)
3. Select "Go to console", or "Create Project" if you are redirected to your console automatically. 
![alt text](firebase-setup-photos/firebase-setup-02.png)
![alt text](firebase-setup-photos/firebase-setup-03.png)
4. Enter your project name and click "Continue"
![alt text](firebase-setup-photos/firebase-setup-04.png)
5. Enable Gemini in Firebase and click "Continue"
![alt text](firebase-setup-photos/firebase-setup-05.png)
6. Enable Google Analytics and click "Continue"
![alt text](firebase-setup-photos/firebase-setup-06.png)
7. Select the "Default Account for Firebase" Gin the dropdown menu (unless otherwise specified) and click "Create Project"
![alt text](firebase-setup-photos/firebase-setup-07.png)
8. Click 'Continue" once your project is created.
![alt text](firebase-setup-photos/firebase-setup-08.png)
9. Click the web icon (</>) to set up Firebase for the web
![alt text](firebase-setup-photos/firebase-setup-09.png)
10. Enter a nickname for your app. Then click "Register app"
![alt text](firebase-setup-photos/firebase-setup-10.png)
11. Copy the generated code (the Firebase SDK Configuration object) and paste it into a new file called "firebase.js" (this can be created in notepad++ or in VSCode). Then click "Continue to Console."
![alt text](firebase-setup-photos/firebase-setup-11.png)
(Note: This code can be accessed again later through your projects dashboard)

### Set up a Firestore Database For Your Firebase Application
1. Under "Choose a product to add to your app" select "Cloud Firestore" 
![alt text](firebase-setup-photos/firebase-setup-12.png)
2. Select "Create Database" 
![alt text](firebase-setup-photos/firebase-setup-13.png)
3. Choose your preferred Firestore location from the drop down, then click "Next"
![alt text](firebase-setup-photos/firebase-setup-14.png)
4. Select "Start in production mode" and then click "Create"
![alt text](firebase-setup-photos/firebase-setup-15.png)

