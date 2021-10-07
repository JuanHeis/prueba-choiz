import { MedicineItem } from "./medicineItem";

export interface MedicineList {
    data: {
        pills: MedicineItem[],
        rings: MedicineItem[],
        patches: MedicineItem[]
    }
}