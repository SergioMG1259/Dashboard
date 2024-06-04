import {Subject} from 'rxjs';
import { SelectionChange } from './selection-change';

export class SelectionHandler<T> {
    //valores seleccionados actualmente, no acepta repetidos
    private _selection = new Set<T>()
    //elementos no seleccionados a emitir
    private _deselectedToEmit: T[] = []
    //elementos seleccionados para emitir
    private _selectedToEmit: T[] = []
    //arreglo de valores seleccionados
    private _selected: T[] | null = null
    //encargado de emitir los cambios
    readonly changedEmit = new Subject<SelectionChange<T>>()

    constructor (valueSelectedInit?:T[]) {
        //por si tiene valores al iniciar
        if (valueSelectedInit && valueSelectedInit.length > 0) {
            this._markSelected(valueSelectedInit[0]);
        }
        
        this._selectedToEmit.length = 0
    }

    isEmpty(): boolean {
        return this._selection.size === 0
    }

    hasValue(): boolean {
        return !this.isEmpty();
    }

    isSelected(value: T): boolean {
        return this._selection.has(value)
    }

    get selected(): T[] {
        if (!this._selected) {
          this._selected = Array.from(this._selection.values())
        }
    
        return this._selected;
    }

    //marca el elemento como seleccionado y se agrega al arreglo de seleccionados a emitir
    private _markSelected(value: T) {
        if (!this.isSelected(value)) {
            this._selection.add(value)
            this._selectedToEmit.push(value)
        }
    }

    //desmarca el elemento su lo esta y lo agrega al arreglo de deseleccionados a emitir
    private _unmarkSelected(value: T) {
        if (this.isSelected(value)) {
            this._selection.delete(value)
            this._deselectedToEmit.push(value)
        }
    }

    private _select(...values:T[]) {
        values.forEach(value => {
            this._markSelected(value)
        });
        this._emitChangeEvent()
    }

    private _emitChangeEvent() {
        this._selected = null
        if (this._selectedToEmit.length > 0 || this._deselectedToEmit.length > 0) {
            this.changedEmit.next({
                source: this,
                selected: this._selectedToEmit,
                noSelected: this._deselectedToEmit
            })
        }

        this._deselectedToEmit = [];
        this._selectedToEmit = [];
    }
}