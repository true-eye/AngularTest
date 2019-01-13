import { Injectable, Output, EventEmitter } from '@angular/core';
import { ELEMENTS } from 'src/mock/mock-elements';
import { Element } from '../../model/element'

@Injectable({
  providedIn: 'root'
})

export class ElementService {
  elements: Element[] = ELEMENTS;
  selectedElement: Element;
  @Output() selectChanged: EventEmitter<Element> = new EventEmitter;

  constructor() { }

  selectChange() {
    this.selectChanged.emit();
  }

  getSelectedElementIndex(): number {
    return this.elements.indexOf(this.selectedElement);
  }

  getElements(): Element[] {
    return this.elements;
  }

  getSelectedElement(): Element {
    return this.selectedElement;
  }

  setSelectedElement(selElement) {
    console.log(selElement);
    this.selectedElement = selElement;
  }

  removeElement() {
    var index = this.getSelectedElementIndex();
    this.elements.splice(index, 1);
    this.selectedElement = null;
  }

  updateElement(updateElement) {
    var index = this.getSelectedElementIndex();
    this.elements[index] = updateElement;
    this.selectedElement = updateElement;
    this.selectChanged.emit();
  }

  addElement(addElement) {
    this.elements.push(addElement);
    this.selectedElement = addElement;
    this.selectChanged.emit();
  }
}
