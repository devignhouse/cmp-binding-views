import {
  Component,
  Input,
  ViewEncapsulation,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ContentChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
  // ViewEncapsulation's default value is Emulated.
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  // Custom Property/Event
  @Output() elementDeleted = new EventEmitter<{removableIndex:number}>();
  // Properties shared from a Parent Component
  // Binding to Custom Properties
  @Input() element: { type: string, name: string, content: string };
  @Input() name: string;
  @Input() removableIndex: number;
  // also you can
  // Assign an alias for Custom Properties as per below
  // @Input('srvElement') element: { type: string, name: string, content: string };
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log("Constructor triggered");
  }
  ngOnInit(): void {
    console.log("ngOnInit triggered!");
    // textContent for the div is empty as the view has not been initialized yet
    console.log('text content: ' + this.header.nativeElement.textContent);
    console.log('text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  // Receives a changes argument
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges triggered!");
    console.log(changes);
  }
  ngDoCheck() {
    console.log("ngDoCheck triggered!");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit triggered!");
    console.log('text content of paragraph: ' + this.paragraph.nativeElement.textContent);

  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked triggered!");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit triggered!");
    console.log('text content: ' + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked triggered!");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy triggered");
  }
  // Emitting an Event via a Custom Property
  onRemoveElement() {
    this.elementDeleted.emit({
      removableIndex: this.removableIndex
    });
  }
}
