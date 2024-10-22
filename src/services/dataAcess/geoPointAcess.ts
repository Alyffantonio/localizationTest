import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseconfig";

export const addGeoPoint = async (latitude: number, longitude: number): Promise<string> => {
    try {
        const geoReferenc = await addDoc(collection(db, "geopoints"), {
            latitude,
            longitude
        });
        console.log("Document written with ID: ", geoReferenc.id);
        return geoReferenc.id;
    } catch (e) {
        console.error("Error adding document: ", e);
        throw e;
    }
};
