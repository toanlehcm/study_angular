import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 [class.with-border] = "withBorder"
        [ngStyle]="{color: textColor}">{{ title }}</h1>
    <button (click) = "onButtonClick()">{{ withBorder ? hide_btn : show_btn }}</button>
    <app-hello [text] = "title" (buttonClicked) = "onBtnCLickedFromHello($event)"></app-hello>
    <app-hi></app-hi>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked {

  title = 'demoAngular';
  imgSrc = 'https://picsum.photos/200/300';

  textColor = 'tomato';
  withBorder = true;

  hide_btn = "Hide Border";
  show_btn = "Show Border";

  onBtnCLickedFromHello(event: string) {
    console.log({event}, 'clicked from Child component');
    this.title = event;
  }

  ngOnInit(): void {
    console.log('Parent OnInit ran');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // console.log('Parent OnChanges ran', { changes });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // console.log('Parent OnDestroy ran');
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log('Parent ngAfterViewInit ran');
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    // console.log('Parent ngAfterContentInit ran');
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    // console.log('Parent AfterViewChecked ran');
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    // console.log('Parent ngAfterContentChecked ran');

    //throw new Error("Method not implemented.");
  }

  onButtonClick() {
    this.withBorder = !this.withBorder;
    this.title = 'Changed';
  }
}
