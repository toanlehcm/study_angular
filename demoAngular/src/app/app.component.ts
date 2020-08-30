import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //document.querySelector('app-root'); <app-root></app-root>
  // templateUrl: './app.component.html',
  template: `
    <!-- <h1>welcome app</h1>-->
    <!-- <app-hello></app-hello>
    <app-hi></app-hi> -->

    <!-- stringInterpolation -->
    <h1 [ngStyle]="{color: textColor, background: backgroundColor}">Welcome to {{ title }} </h1>
    <h1 [ngStyle]="styleObj">{{ title }}</h1>
    <!-- SquareBrackets -->
    <h1 [style.color] = "textColor" [style.backgroundColor] = 'backgroundColor' [textContent] = "title"></h1>
    <!-- class binding -->
    <h1 [class.with-border] = "withBorder">{{ title }}</h1>
    <!-- ngClass -->
    <h1 [ngClass]="{
      'with-border': withBorder,
      'other-class': true
    }">{{ title }}</h1> <!-- if other-class is true, other-class will be show in element -->

    <!-- <p> {{ des}} </p> -->
    <!-- [src] is a attri binding -->

    <img src = "{{ imgSrc }}">
    <img [src] = "imgSrc">
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoAngular'; // title is an instance/variable of class, is an access modifier, default type is a public(private, protacted)
  // title: string = 'demoAngular'; //not use.

  imgSrc = 'https://picsum.photos/200/300';

  textColor = 'tomato';
  backgroundColor = 'black';
  styleObj = {
    color: this.textColor,
    background: this.backgroundColor,
  };
  withBorder = true;

}
