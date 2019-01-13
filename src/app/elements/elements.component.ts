import { Component, OnInit, Output, EventEmitter, Input, HostListener } from '@angular/core';
import { Element } from '../../model/element';
import { ELEMENTS } from '../../mock/mock-elements';
import { ElementService } from '../service/element.service';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {

  @Input() elements: Element[];

  constructor(private elementService:ElementService) { }

  ngOnInit() {
  }

  onSelect(element: Element): void {
    this.elementService.setSelectedElement(element);
    this.elementService.selectChange();
  }

}
