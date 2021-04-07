import { deliveryRef, mealRef, driverRef } from "./index";

export async function fetchDeliveries() {
  const dbResult = await deliveryRef.get().then((data) => {
    const deliveryData = [];
    data.forEach((doc) => {
      deliveryData.push({ document: doc.data(), documentId: doc.id });
    });
    return deliveryData;
  });
  return dbResult;
}

export async function fetchDrivers() {
  const dbResult = await driverRef.get().then((data) => {
    const driverData = [];
    data.forEach((doc) => {
      driverData.push(doc.data());
    });
    return driverData;
  });
  return dbResult;
}

export async function fetchMeals() {
  const dbResult = await mealRef.get().then((data) => {
    const mealData = [];
    data.forEach((doc) => {
      mealData.push({ document: doc.data(), documentId: doc.id });
    });
    return mealData;
  });
  return dbResult;
}

export function patchMeals(documentId, data) {
  return mealRef
    .doc(documentId)
    .update(data)
    .then(() => {
      return mealRef
        .doc(documentId)
        .get()
        .then((doc) => {
          if (doc.exists) {
            return doc.data();
          }
        });
    });
}

export function patchDelivery(documentId, data) {
  return deliveryRef
    .doc(documentId)
    .update(data)
    .then(() => {
      return deliveryRef
        .doc(documentId)
        .get()
        .then((doc) => {
          if (doc.exists) {
            return doc.data();
          }
        });
    });
}

export function postDelivery(data) {
  return deliveryRef
    .add(data)
    .then((docRef) => {
      const documentId = docRef.id;

      deliveryRef.doc(documentId).update({
        _id: documentId,
      });

      return documentId;
    })
    .then((documentId) => {
      return deliveryRef
        .doc(documentId)
        .get()
        .then((doc) => {
          if (doc.exists) {
            return doc.data();
          }
        });
    });
}

export function deleteDelivery(documentId, data, index) {
  return deliveryRef
    .doc(documentId)
    .delete(data[index])
    .then(() => {});
}
