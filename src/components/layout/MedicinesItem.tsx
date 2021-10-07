import React from "react";
import { MedicineItem } from "../../model/medicineItem";

function MedicinesItem(prop: { item: MedicineItem }) {

  return (
    <tr>
      <td>{prop.item.brand}</td>
      <td>{prop.item.laboratory}</td>
      <td>${prop.item.price}</td>
    </tr>
  )
}

export default MedicinesItem