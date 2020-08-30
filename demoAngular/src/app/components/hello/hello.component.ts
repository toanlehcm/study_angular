import {
  Component,
  SimpleChanges,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <h2>Hello from hello component</h2>
    <p>{{ text }} from parent</p>
    <button (click)="onButtonClicked()">Button from Hello</button>
  `,
})
export class HelloComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked {
  @Input() text: string;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();
  // @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

  onButtonClicked() {
    this.text = 'Changed from hello component';
    this.buttonClicked.emit(this.text);
  }

  // onButtonClicked() {
  //   this.buttonClicked.emit('string');
  // }

  ngOnInit(): void {
    console.log('Child OnInit ran');
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Child OnChanges ran', { changes });
  }
  ngOnDestroy(): void {
    // console.log('Child OnDestroy ran');
  }
  ngAfterViewInit(): void {
    // console.log('Child AfterViewInit ran');
  }
  ngAfterContentInit(): void {
    // console.log('Child AfterContentInit ran');
  }
  ngAfterViewChecked(): void {
    // console.log('Child AfterViewChecked ran');
  }
  ngAfterContentChecked(): void {
    // console.log('Child AfterContentChecked ran');
  }
}
