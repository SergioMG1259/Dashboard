import { SelectionHandler } from "./selection-handler"

// objeto del evento que se dispara cuando hay cambios en el dropdown
export interface SelectionChange<T> {
    source: SelectionHandler<T>
    selected: T[]
    noSelected: T[]
}