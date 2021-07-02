import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
  // ViewEncapsulation's default value is Emulated.
})
export class ServerElementComponent implements OnInit {
  // Custom Property/Event
  @Output() elementDeleted = new EventEmitter<{removableIndex:number}>();
  // Properties shared from a Parent Component
  // Binding to Custom Properties
  @Input() element: { type: string, name: string, content: string };
  @Input() removableIndex: number;
  // also you can
  // Assign an alias for Custom Properties as per below
  // @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit(): void {
  }
  // Emitting an Event via a Custom Property
  onRemoveElement() {
    this.elementDeleted.emit({
      removableIndex: this.removableIndex
    });
  }
}
