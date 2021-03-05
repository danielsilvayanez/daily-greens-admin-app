import { deliveryRef, mealRef } from './index'

export async function fetchDeliveries() {
  const dbResult = await deliveryRef.get().then((data) => {
    const deliveryData = []
    data.forEach((doc) => {
      deliveryData.push({ document: doc.data(), documentId: doc.id })
    })
    return deliveryData
  })
  return dbResult
}

export async function fetchMeals() {
  const dbResult = await mealRef.get().then((data) => {
    const mealData = []
    data.forEach((doc) => {
      mealData.push({ document: doc.data(), documentId: doc.id })
    })
    return mealData
  })
  return dbResult
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
            return doc.data()
          }
        })
    })
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
            return doc.data()
          }
        })
    })
}

export function postDelivery(data) {
  return deliveryRef
    .add(data)
    .then((docRef) => {
      const documentId = docRef.id

      deliveryRef.doc(documentId).update({
        _id: documentId,
      })

      return documentId
    })
    .then((documentId) => {
      return deliveryRef
        .doc(documentId)
        .get()
        .then((doc) => {
          if (doc.exists) {
            return doc.data()
          }
        })
    })
}

// export function fetchDeliveries() {
//   return db.get().then((querySnapshot) => {
//     let deliveriesData = [];
//     querySnapshot.forEach((doc) => {
//       deliveriesData.push(doc.data());
//     });

//     return deliveriesData;
//   });
// }
