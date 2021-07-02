import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,

  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // Binding to Custom Events
   @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // also you can
  // Assign an alias for Custom Events as per below
  // @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string}>();

  // original properties used
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;

  constructor() { }
  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      //serverName: this.newServerName,
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }
  onAddBlueprint(nameInput) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }
}
