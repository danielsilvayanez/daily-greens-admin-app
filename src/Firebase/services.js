import { deliveryRef } from "./index";

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
