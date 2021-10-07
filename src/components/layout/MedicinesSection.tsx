import React, { useContext } from "react";
import Context from "../../context/context";
import { MedicineItem } from "../../model/medicineItem";
import MedicinesItem from "./MedicinesItem";
function MedicinesSection() {

  const context: any = useContext(Context)
  // if (!context.medicines) {
  //   return null
  // }
  console.log("Hola soy un context: SECTION MEDICINES", context)
  return (
    <section id="medicine" className="medicine">
      <div className="wrapperSection">

        <h3>Pastillas</h3>

        <table>
          <thead>
            <tr>
              <th>Marcas que ofrecemos</th>

              <th>Laboratorio</th>

              <th>Precio</th>
            </tr>
          </thead>

          <tbody>
            {
              context.value.medicines.pills.map((aPill: MedicineItem, i: number) => {
                return <MedicinesItem key={i} item={aPill} />
              })
            }

          </tbody>
        </table>

        <h3>Anillos</h3>

        <table>
          <thead>
            <tr>
              <th>Marcas que ofrecemos</th>

              <th>Laboratorio</th>

              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {
              context.value.medicines.rings.map((aPill: MedicineItem) => {
                return <MedicinesItem item={aPill} />
              })
            }
          </tbody>
        </table>

        <h3>Parches</h3>

        <table>
          <thead>
            <tr>
              <th>Marcas que ofrecemos</th>

              <th>Laboratorio</th>

              <th>Precio</th>
            </tr>
          </thead>

          <tbody>
            {
              context.value.medicines.patches.map((aPill: MedicineItem) => {
                return <MedicinesItem item={aPill} />
              })
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}
export default MedicinesSection