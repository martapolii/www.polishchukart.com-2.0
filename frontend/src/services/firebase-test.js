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