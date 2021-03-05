import React from "react";
import Delivery from "../components/Delivery";

export default function Archive({ deliveries, setDeliveries }) {
  return (
    <ul>
      {deliveries.map(
        (delivery, index) =>
          delivery.document.done && (
            <Delivery
              delivery={delivery.document}
              index={index}
              deliveries={deliveries}
              setDeliveries={setDeliveries}
              documentId={delivery.documentId}
            />
          )
      )}
    </ul>
  );
}
