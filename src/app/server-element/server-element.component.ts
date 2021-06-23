import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // Binding to Custom events
  // @Input() element: { type: string, name: string, content: string };
  // also you can
  // Assign an alias for Custom Events as per below
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit(): void {
  }

}
