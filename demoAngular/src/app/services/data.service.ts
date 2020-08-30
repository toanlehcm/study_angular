import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private _textFromHello: string;

  get textFromHello(): string { //export
    return this._textFromHello;
  }

  setTextFromHello(): string { //export
    return this._textFromHello = text;
  }
}
