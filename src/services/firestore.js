import { db } from "./firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const addInvestmentData = async (userId, data) => {
  try {
    await addDoc(collection(db, `users/${userId}/investments`), data);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const getInvestmentData = async (userId) => {
  const querySnapshot = await getDocs(collection(db, `users/${userId}/investments`));
  return querySnapshot.docs.map(doc => doc.data());
};
