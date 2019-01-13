import { Component } from '@angular/core';
import { ELEMENTS } from 'src/mock/mock-elements';
import { Element } from '../model/element';
import { ElementService } from './service/element.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elements: Element[];
  selectedElement: Element;

  constructor(private elementService: ElementService) { }

  ngOnInit() {
    this.elements = this.elementService.getElements();
  }
}
