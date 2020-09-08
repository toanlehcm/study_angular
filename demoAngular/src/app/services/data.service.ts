import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root' // global
// })
@Injectable()

export class DataService {
  private _textFromHello: string;

  get textFromHello(): string { //export
    return this._textFromHello;
  }

  setTextFromHello(text: string) { //export
    this._textFromHello = text;
  }
}
