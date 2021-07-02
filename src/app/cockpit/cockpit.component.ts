import {
  Component,
  OnInit,
  EventEmitter,
  Output
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
  newServerName = '';
  newServerContent = '';

  constructor() { }
  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }
  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }
}
