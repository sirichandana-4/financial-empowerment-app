import { db } from "./firebaseConfig";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

// Reference to the investments collection
const investmentCollectionRef = collection(db, "investments");

// Add Investment
export const addInvestment = async (investment) => {
    try {
        await addDoc(investmentCollectionRef, investment);
    } catch (error) {
        console.error("Error adding investment: ", error);
    }
};

// Get Investments
export const getInvestments = async () => {
    const data = await getDocs(investmentCollectionRef);
    return data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Delete Investment
export const deleteInvestment = async (id) => {
    try {
        await deleteDoc(doc(db, "investments", id));
    } catch (error) {
        console.error("Error deleting investment: ", error);
    }
};
