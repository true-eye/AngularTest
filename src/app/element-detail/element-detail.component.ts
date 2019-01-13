import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Element } from '../../model/element';
import { ElementService } from '../service/element.service';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-element-detail',
  templateUrl: './element-detail.component.html',
  styleUrls: ['./element-detail.component.css']
})
export class ElementDetailComponent implements OnInit {
  element: Element;

  constructor(private elementService: ElementService) { }

  ngOnInit() {
    this.elementService.selectChanged.subscribe(() => {
      
      this.element = {...this.elementService.getSelectedElement()};
    })
  }

  onModify() {
    this.elementService.updateElement(this.element);
  }

  onDelete() {
    this.elementService.removeElement();
    this.element = null;
  }

  onAdd() {
    this.elementService.addElement(this.element);
  }

}
