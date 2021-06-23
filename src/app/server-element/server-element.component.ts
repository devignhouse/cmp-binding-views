import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit {
  // Binding to Custom Properties
  // @Input() element: { type: string, name: string, content: string };
  // also you can
  // Assign an alias for Custom Properties as per below
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit(): void {
  }

}
